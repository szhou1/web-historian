var path = require('path');
var http = require('http');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!


exports.handleRequest = function (req, res) {
  console.log('request url', req.url);
  // console.log(archive.paths.siteAssets + "/index.html");
  if(req.url === "/"){
    var asset = archive.paths.siteAssets + "/index.html";

  } else if (req.url.substring(0,4) === "/www") {
    // console.log("ANOTHER WEBSITE");
    asset = archive.paths.archivedSites + req.url;
  } else {
    asset = archive.paths.siteAssets + req.url;

  }
  httpHelpers.serveAssets(res, asset);

};
