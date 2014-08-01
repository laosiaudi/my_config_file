// Javascript File
// AUTHOR:   LaoSi
// FILE:     server.js
// 2014 @laosiaudi All rights reserved
// CREATED:  2014-07-31 23:54:54
// MODIFIED: 2014-08-01 22:44:04
var spdy = require('spdy'),
    fs = require('fs'),
    express = require('express'),
    http = require('http');
require('ssl-root-cas').inject();
var options = {
key: fs.readFileSync(__dirname + '/keys/spdy-key.pem'),
cert: fs.readFileSync(__dirname + '/keys/spdy-cert.pem'),
ca: fs.readFileSync(__dirname + '/keys/spdy-csr.pem'),

  // **optional** SPDY-specific options
  windowSize: 1024 * 1024, // Server's window size
    // **optional** if true - server will send 3.1 frames on 3.0 *plain* spdy
  autoSpdy31: false
};

var app = express();
app.use(express.static(__dirname + '/public/'))
var spdyserver = spdy.createServer(options, app);

spdyserver.listen(443);
