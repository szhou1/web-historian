var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');
// var fetcher = require('../workers/htmlfetcher');
// var archive = require('../helpers/archive-helpers');

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./web/archives');

var port = 8080;
var ip = '127.0.0.1';
var server = http.createServer(handler.handleRequest);

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}

// setInterval(function() {
  // archive.readListOfUrls(function(array) {
  //   // console.log('array', array);
  //   array.forEach(function(url) {
  //     if (url.length > 0) {
  //       fetcher.fetchHtml(url);
  //     }
  //   });
  // });
// }, 5000);
