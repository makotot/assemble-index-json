var _ = require('lodash'),
  jsonfile = require('jsonfile'),
  minimatch = require('minimatch'),
  fsUtil = require('fs-utils');

var path = require('path');


module.exports = function (params, cb) {

  var assembleOpts = params.assemble.options,
    pages = assembleOpts.pages,
    availables = assembleOpts.indexJson.availables,
    index = [];

  _.each(pages, function (page) {
    var pathList = (page.dest).split(path.sep),
      filePath = _.drop(pathList),
      availableStore = {};

    var filtered;

    _.each(assembleOpts.indexJson.excludes, function (exclude) {
      if (!minimatch(page.src, fsUtil.normalizePath(exclude))) {
        filtered = page;
      }
    });

    if (filtered || !assembleOpts.indexJson.excludes.length) {
      _.each(availables, function (available) {
        var dataAvailable = page.data[available];

        availableStore[available] = dataAvailable ? dataAvailable : '';
      });

      index.push({
        dest: filePath.join('/'),
        data: availableStore
      });
    }
  });

  if (!assembleOpts.indexJson.jsonPath) {
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

