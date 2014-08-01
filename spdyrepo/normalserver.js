// Javascript File
// AUTHOR:   LaoSi
// FILE:     normalserver.js
// 2014 @laosiaudi All rights reserved
// CREATED:  2014-08-01 00:31:55
// MODIFIED: 2014-08-01 00:32:22
var spdy = require('spdy'),
    fs = require('fs'),
    express = require('express'),
    http = require('http');
var napp = express();
napp.listen(3344);
napp.use(express.static(__dirname + '/public/'))
