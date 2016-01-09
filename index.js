'use strict';
var _ = require('lodash');
var CLIEngine = require('eslint').CLIEngine;
var path = require('path');

module.exports = function(formatter) {
    formatter = resolveFormatter(formatter);
    return function(results) {
        _.forEach(results, function(result) {
            result.filePath = path.resolve(result.filePath);
        });
        return formatter(results);
    }
};

function resolveFormatter(formatter) {
    if (typeof formatter !== 'function') {
        formatter = CLIEngine.getFormatter(formatter) || formatter;
    }

    if (typeof formatter !== 'function') {
        throw new TypeError('Invalid Formatter');
    }

    return formatter;
}