import React from 'react';
import Router from 'react-router';
import App from './app.jsx'

import Featured from './components/featured/featured.jsx';
import About from './components/about/about.jsx';

import './main.less';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

// declare our routes and their hierarchy
let routes = (
  <Route handler={App}>
    <DefaultRoute handler={About} />
    <Route name="featured" path="featured" handler={Featured}/>
    <Route name="about" path="about" handler={About}/>
  </Route>
)

Router.run(routes, Router.HashLocation, Root => {
  React.render(<Root />, document.body);
});
