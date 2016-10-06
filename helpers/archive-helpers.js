var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../web/archives/sites'),
  list: path.join(__dirname, '../web/archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(exports.paths.list, function(err, data) {
    if (err) {
      console.log(err);
    }
    callback(data.toString().split('\n'));

  });
};

exports.isUrlInList = function(url, callback) {
  
  var exists = false;
  exports.readListOfUrls(function(arrayOfUrls) {
    //console.log(arrayOfUrls);
    arrayOfUrls.forEach(function(urlInList) {
      if (!exists) {
        // console.log(url, urlInList);
        if (url === urlInList) {
          //console.log('found match!!!!');
          exists = true;
        }
      }
    });
    // console.log(exists);
    callback(exists);
  });
  return exists;
};

exports.addUrlToList = function(url, callback) {

  fs.appendFile(exports.paths.list, url + '\n', function(err) {
    if (err) {
      console.log(err);
    }
    callback();
  });

};

exports.isUrlArchived = function(file, callback) {
  var exists = false;
  fs.readdir(exports.paths.archivedSites, function(err, files) {
    if (err) {
      console.log(err);
    }

    files.forEach(function(xfile) {
      if (!exists) {
        if (xfile === file) {
          exists = true;
          callback(exists);
        }
      }
    });
  });
  return exists;
};

exports.downloadUrls = function(urlArray) {

  urlArray.forEach(function(url) {
    var path = exports.paths.archivedSites + '/' + url;
    //console.log(path);
    fs.writeFile(path, 'hello world', function(err) {
      if (err) {
        console.log(err);
      }
    });
  });

};












