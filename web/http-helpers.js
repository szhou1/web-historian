var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  console.log('serve asset', asset);

  fs.readFile(asset, function(error, content) {
    if (error) {
      console.log('ERROR'); 
      res.writeHead(404, this.headers);
      res.end();
    } else {
      res.writeHead(200, this.headers);
      res.end(content, 'utf-8');
    }
  });

  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
};

exports.appendSite = function(res, asset, callback) {
  console.log('append site', asset);
  // check if site already exists in txt file
    // if exists, then do nothing and return
    // if not then append and close
};

// As you progress, keep thinking about what helper functions you can put here!
