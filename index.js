var _ = require('lodash'),
  jsonfile = require('jsonfile'),
  minimatch = require('minimatch'),
  fsUtil = require('fs-utils');

var path = require('path');


function setFilePath (page) {
  var pathList = (page.dest).split(path.sep);

  return (_.drop(pathList)).join('/');
}

function filterExcluded (excludes, page, done) {
  var filtered;

  _.each(excludes, function (exclude) {
    if (!minimatch(page.src, fsUtil.normalizePath(exclude))) {
      filtered = page;
    }
  });

  done(filtered);
}


module.exports = function (params, cb) {

  var assembleOpts = params.assemble.options,
    pages = assembleOpts.pages,
    options = assembleOpts.indexJson,
    index = [];

  _.each(pages, function (page) {
    var filePath = setFilePath(page),
      availableStore = {};

    filterExcluded(options.excludes, page, function (filtered) {

      if (filtered || !options.excludes.length) {
        _.each(options.availables, function (available) {
          var dataAvailable = page.data[available];

          availableStore[available] = dataAvailable ? dataAvailable : '';
        });

        index.push({
          dest: filePath,
          data: availableStore
        });
      }
    });

  });

  if (!options.jsonPath) {
    throw new Error('Json path is not defined!');
  }

  jsonfile.writeFile(path.resolve(assembleOpts.indexJson.jsonPath), index, {spaces: 2}, function (err) {
    if (err) {
      throw err;
    }

    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};

