# assemble-index-json

[![npm version](https://img.shields.io/npm/v/assemble-index-json.svg?style=flat-square)](https://github.com/makotot/assemble-index-json)
[![travis](http://img.shields.io/travis/makotot/assemble-index-json.svg?style=flat-square)](https://github.com/makotot/assemble-index-json)
[![dependencies](http://img.shields.io/david/makotot/assemble-index-json.svg?style=flat-square)](https://github.com/makotot/assemble-index-json)
[![devDependencies](http://img.shields.io/david/dev/makotot/assemble-index-json.svg?style=flat-square)](https://github.com/makotot/assemble-index-json)
[![License](http://img.shields.io/npm/l/assemble-index-json.svg?style=flat-square)](https://github.com/makotot/assemble-index-json)

> assemble index generator


## Install
```
$ npm i --save-dev assemble-index-json
```

## Register
```
assemble: {
  options: {
    plugins: ['assemble-index-json']
  }
}
```

## options

```
assemble: {
  options: {
    plugins: ['assemble-index-json'],
    indexJson: {
      jsonPath: './index.json',
      availables: [
        'title'
      ],
      excludes: ['./src/pages/index.hbs']
    }
  }
}
```

### jsonPath

Path to a json is generated from this plugin.

### availables

Data list that you want to retrieve from page data.

### excludes

Glob patterns of src files that you want to exclude from index.


## License

MIT

