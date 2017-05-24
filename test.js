/**
 * @fileOverview This file contains the unit tests for the
 * “is-same-path” module.
 * @name test.js<is-same-path>
 * @author Etienne Prud’homme <e.e.f.prudhomme@gmail.com>
 *
 * Last-Updated: Wed May 24 18:10:40 (EDT) 2017 by etienne
 * Created: 2017-05-24
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

const testIt      = require('ava');
const isSamePath  = require('./');
const path        = require('path');
const currentPath = process.cwd();

testIt((_test) => {
    const upperUpperPath = path.resolve(path.join(currentPath, '../../'));

    _test.is(isSamePath(path.join(upperUpperPath, 'foo/bar'), '../../foo/bar'),
             true,
            'Absolute path can match a relative path.');
    _test.is(isSamePath('./.././//file', '../file'), true,
            'Adding extra path characters “/” can still match the path.');
});

// test.js<is-same-path> ends here
