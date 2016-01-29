"use strict";

const test = require('tape');
const through = require('./index');
const fs = require('fs');
const streamIn = fs.createReadStream('./README.md');

test('old and new way are the same', function (t) {
    let i = 0;

    const spy = function(chunk, encoding, callback) {
        t.equal(typeof callback, 'function', 'callback is a function');
        t.equal(typeof encoding, 'string', 'encoding is a string');
        t.equal(typeof chunk, 'object', 'chunk is a object that can call tostring');
        i++;
        callback(null, {line: chunk.toString()});
    };

    const oldWay = function () {
        return new require('stream').Transform({
            objectMode: true,
            transform: spy
        });
    };

    // new way
    const throughSpy = through(spy);

    streamIn.pipe(throughSpy);
    streamIn.pipe(oldWay());

    setTimeout(function () {
        t.equal(i, 2, 'spy was called twice');
        t.end();
    }, 100);
});

