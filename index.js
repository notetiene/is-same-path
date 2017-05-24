/**
 * @fileOverview Check if two paths are the same when resolved.
 * @name index.js<is-same-path>
 * @module is-same-path
 * @author Etienne Prud’homme <e.e.f.prudhomme@gmail.com>
 *
 * Last-Updated: Wed May 24 17:29:50 (EDT) 2017 by etienne
 * Created: 2017-05-09
 *
 * @license MIT License
 *
 * Copyright (c) 2017 Etienne Prud’homme
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions: The above
 * copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Commentary:
 *
 * Code:
 */

const path = require('path');


/**
 * Check if two paths with different notation are the same when
 * resolved.
 * @param {String} path1 - The first path.
 * @param {String} path2 - The second path.
 * @returns {bool} True if they are the same.
 */
function isSamePath(path1, path2) {
    return path.resolve(path1) === path.resolve(path2);
}


module.exports = isSamePath;

// isSamePath.js<lib> ends here
