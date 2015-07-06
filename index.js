var _ = require('lodash'),
  jsonfile = require('jsonfile');

var path = require('path');

jsonfile.spaces = 2;

module.exports = function (params, cb) {

  var assemble = params.assemble,
    grunt = params.grunt,
    pages = assemble.options.pages;

  var file = './index.json';

  console.log(assemble.options)
  _.each(pages, function (page) {
    var pathList = (page.dest).split(path.sep);

    console.log(_.without(pathList, pathList[0]));
  });

  cb();
};

module.exports.options = {
  stage: 'render:pre:pages'
};
