# WAT

Unigng node 5 streams?
Tired of calling:


```js
new stream.Transform({
        objectMode: true,
        transform: function (chunk, encoding, callback) {
            callback(null, {chunk});
        }
})
```

Heres a tip for you:

let
