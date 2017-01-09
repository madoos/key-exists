# madoos-key-exists

Check if the key of an object or array exists

## Getting Started

To install:

    npm i --save madoos-key-exists

In your project:

``` javascript

 const keyExists = require('madoos-key-exists')

 const obj = {a: {b: [1, 2, 3, {c: [[0, 1]]}]}}
 const arr = [0, 1, [3, 4]]

 keyExists(obj, 'a.b[3].c[0][25]') // => false
 keyExists(obj, 'a.b[3].c[0][1]') // => true

 keyExists(arr, '[5][0]') // => false
 keyExists(arr, '[2][0]') // => true

```
## Run test

    npm run test:unit:show

## Run cover test

    npm run test:cover:show
