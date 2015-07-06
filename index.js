var _ = require('lodash'),
  jsonfile = require('jsonfile');

jsonfile.spaces = 2;

module.exports = function (params, cb) {

  var assemble = params.assemble,
    grunt = params.grunt,
    pages = assemble.options.pages;

  var file = './index.json';

//  console.log(pages)
  _.each(pages, function (page) {
    console.log(page.dest);
  });
  cb();
//  console.log(params.context.page)

//  jsonfile.writeFile(file, params.context.page, function () {
//    cb();
//  });

};

module.exports.options = {
  stage: 'render:pre:pages'
};
