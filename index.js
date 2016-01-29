'use strict';

const stream = require('stream');

module.exports = function through(transformation) {
    return new stream.Transform({
        objectMode: true,
        transform: transformation
    })
};
