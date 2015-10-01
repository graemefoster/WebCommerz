import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/app';
import Featured from '../components/featured/featured.jsx';
import About from '../components/about/about.jsx';

var routes = <Route path="/" component={App}>
                    <IndexRoute component={Featured} />
                    <Route path="featured" component={Featured}/>
                    <Route path="about" component={About}/>
                </Route>;

export default routes;
