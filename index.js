var _ = require('lodash'),
  jsonfile = require('jsonfile');

var path = require('path');


module.exports = function (params, cb) {

  var index = [];

  var assemble = params.assemble,
    assembleOpts = assemble.options,
    pages = assembleOpts.pages;

  var availables = assembleOpts.indexJson.availables;

  _.each(pages, function (page) {
    var pathList = (page.dest).split(path.sep);

    var filePath = _.drop(pathList);

    var data = [];

    _.each(availables, function (available) {
      var dataAvailable = page.data[available];
      var availableStore = {};

      availableStore[available] = dataAvailable ? dataAvailable : '';
      data.push(availableStore);
    });

    index.push({
      dest: filePath.join('/'),
      data: data
    });
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
  stage: 'render:pre:pages'
};

