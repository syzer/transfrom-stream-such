# WAT

Using node 5 streams?
Tired of calling:

```js
new stream.Transform({
        objectMode: true,
        transform: function (chunk, encoding, callback) {
            callback(null, {chunk});
        }
})
```

#### Here's a tip for you
above is equivalent to:

```js
let through = require('transfrom-stream-such');
through(function (chunk, encoding, callback) {
    callback(null, {chunk});
})
```

