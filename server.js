//require("babel/register");
//
//var express = require('express'),
//    path = require('path'),
//    app = express(),
//    port = 4444,
//    react = require('react'),
//    app = require('./src/routes/routes.jsx');
//
//// Include static assets. Not advised for production
//app.use(express.static(path.join(__dirname, 'public')));
//
//// Set view path
//app.set('views', path.join(__dirname, 'views'));
//
//// set up ejs for templating. You can use whatever
//app.set('view engine', 'ejs');
//
//// Set up Routes for the application
////require('./app/routes/core-routes.js')(app);
//
////Route not found -- Set 404
//var app = express();
//
//app.get('/', function(req, res) {
//    var component = react.createElement(about);
//    var reactHtml = react.renderToString(component);
//    res.render('./index.ejs', { reactOutput: reactHtml });
//});
//
//app.get('*', function(req, res) {
//    res.json({
//        'route': 'Sorry this page does not exist!'
//    });
//});
//
//app.listen(port);
//console.log('Server is Up and Running at Port : ' + port);
