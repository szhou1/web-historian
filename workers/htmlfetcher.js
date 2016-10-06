var request = require('request');
var fs = require('fs');
// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var helpers = require('../helpers/archive-helpers');

exports.fetchHtml = function(url) {
  console.log('fetching!', url);
  var uri = 'http://' + url + '/';
  console.log('uri', uri);

  request(uri, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var scrape = body;
      var path = helpers.paths.archivedSites + '/' + url;

      fs.writeFile(path, scrape, function(err) {
        if (err) {
          console.log('error writing file', err);
        }
      });
    } else {
      console.log('error with scraping html page', error);
    }
  });
};