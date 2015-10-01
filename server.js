require("babel/register");

var express = require('express'),
    path = require('path'),
    app = express(),
    port = 4444,
    react = require('react'),
    configureServer = require('./src/index._server');

configureServer(app);
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port);
console.log('Server is Up and Running at Port : ' +  port);

// we start a webpack-dev-server with our config
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    proxy: {
        "*": "http://localhost:4444"
    },
    stats: { colors: true }
});
server.listen(8090, 'localhost', function (err, result) {
       if (err) {
             console.log(err);
           }

           console.log('Listening at localhost:8090');
    });
