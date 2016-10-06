var path = require('path');
var http = require('http');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!


exports.handleRequest = function (req, res) {
  console.log('request url', req.url);
  // console.log(archive.paths.siteAssets + "/index.html");
  if (req.method === 'GET') {
    console.log('GET request');
    if (req.url === '/') {
      var asset = archive.paths.siteAssets + '/index.html';

    } else if (req.url.substring(0, 4) === '/www') {
      // console.log("ANOTHER WEBSITE");
      asset = archive.paths.archivedSites + req.url;
    } else {
      asset = archive.paths.siteAssets + req.url;

    }
    httpHelpers.serveAssets(res, asset);
    
  } else if (req.method === 'POST') {
    console.log('POST request');

    if (req.url === '/') {

      req.on('data', function(data) {
        // console.log("i got some",data.toString().split('=')[1]);
        var site = data.toString().split('=')[1];
        // check if url is stored in cache
        archive.isUrlInList(site, function(exists) {
          console.log(site, exists);
        });


        archive.addUrlToList(site, function() {
          res.writeHead(302, httpHelpers.headers);
          
          res.end(); 
          console.log('successfully added url to list');


        });
      });

    }
  }

};
