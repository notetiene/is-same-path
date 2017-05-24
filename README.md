# is-same-path

> 🚷 Check that two directories resolve to the same path.

**_is-same-path_** is a simple function to check if two paths resolve
to the same path.

## Installation

Simply type:

```bash
npm install --save is-same-path
```

## Getting Started

```javascript
const isSamePath = require('is-same-path');

const paths = ['./.././//file', '../file'];

console.log(isSamePath(...paths)); // "true"
```

## JavaScript API

### isSamePath(path1, path2)
Check if two paths with different notation are the same when resolved.

* `path1`: A file system path as a `String`.
* `path2`: A second file system path as a `String`.
* Return: `true` if both path resolve to the same path.

## License

This module and the whole directory is subject to
the [MIT license](LICENSE.md).

I usually prefer the GPL license, but I don’t think it’s big enough
care for that (and scare people like you).

Copyright (c) 2017 Etienne Prud’homme

```
