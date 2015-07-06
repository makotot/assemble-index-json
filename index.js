var _ = require('lodash'),
  jsonfile = require('jsonfile');

jsonfile.spaces = 2;

module.exports = function (params, cb) {

  var assemble = params.assemble,
    grunt = params.grunt,
    pages = assemble.options.pages;

  var file = './index.json';

  console.log(pages)
  cb();
//  console.log(params.context.page)

//  jsonfile.writeFile(file, params.context.page, function () {
//    cb();
//  });

};
