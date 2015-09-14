import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './containers/app';
import Featured from './components/featured/featured.jsx';
import About from './components/about/about.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import './index.less';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// declare our routes and their hierarchy
const store = configureStore();
//let history = createBrowserHistory();

React.render(
    <Provider store={store}>{() =>
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Featured} />
                <Route path="featured" component={Featured}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    }</Provider>, document.getElementById("container"));
