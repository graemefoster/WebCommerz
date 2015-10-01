require("babel/register");

var express = require('express'),
    path = require('path'),
    app = express(),
    port = 4444,
    react = require('react'),
    serverRender = require('./src/index._server');

console.log(serverRender);

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views', path.join(__dirname, 'views'));

// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

//Route not found -- Set 404
var app = express();

app.get('/', function(req, res) {
   res.render('./index.ejs', { reactOutput: serverRender(req.url) });
});

app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
