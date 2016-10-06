

var fetcher = require('/Users/student/Codes/2016-09-web-historian/workers/htmlfetcher.js');
var archive = require('/Users/student/Codes/2016-09-web-historian/helpers/archive-helpers.js');

console.log('Loaded File');

var cronJob = function() {
  archive.readListOfUrls(function(array) {
    console.log('Reading URL array', array);
    array.forEach(function(url) {
      console.log('url:', url);
      if (url.length > 0) {
        fetcher.fetchHtml(url);
      }
    });
  });  
};

cronJob();


console.log('Done');

// */1 * * * * /usr/local/bin/node /Users/student/Codes/2016-09-web-historian/web/cron.js >/tmp/stdout.log