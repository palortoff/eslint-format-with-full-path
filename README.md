[![Npm dependencies](https://david-dm.org/palortoff/eslint-format-with-full-path.svg)](https://david-dm.org/palortoff/eslint-format-with-full-path)

# ESLint format with full path [![Npm version](https://img.shields.io/npm/v/eslint-format-with-full-path.svg)](https://www.npmjs.com/package/eslint-format-with-full-path)

This module restores the eslint output to use the full path if stripped, e.g. by gulp-eslint.

# Install

```shell
npm install --save eslint-format-with-full-path
```

# Prerequisites

npm - installed eslint.

This package requires eslint but does not install it's own to avoid different installed versions.

# Usage

## gulp

```javascript

var modifiedFormatter = require('eslint-format-with-full-path')('stylish');

gulp.task('eslint', function(){
  return gulp.src(['app'])
    .pipe(eslint())
    .pipe(eslint.format(modifiedFormatter))
    .pipe(eslint.failAfterError());
}
```

## gulp - with a custom formatter

```javascript

var modifiedFormatter = require('eslint-format-with-full-path')(myCustomFormatter);

gulp.task('eslint', function(){
  return gulp.src(['app'])
    .pipe(eslint())
    .pipe(eslint.format(modifiedFormatter))
    .pipe(eslint.failAfterError());
}
```

## eslint CLI

Custom formatter ``myFormatter.js``:

```javascript
var withFullPath = require('eslint-format-with-full-path')

module.exports = withFullPath('stylish')
```

Run ``eslint`` with it:

```shell
eslint --format ./myFormatter.js
```

# License

Licensed under the MIT license