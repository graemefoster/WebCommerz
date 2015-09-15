import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './containers/app';
import Featured from './components/featured/featured.jsx';
import About from './components/about/about.jsx';
import createHashHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import './index.less';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// declare our routes and their hierarchy
const store = configureStore();

//createBrowserHistory is preferred but will need some server side gumf.
let history = createHashHistory();

React.render(
    <div>
        <Provider store={store}>{() =>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Featured} />
                    <Route path="featured" component={Featured}/>
                    <Route path="about" component={About}/>
                </Route>
            </Router>
        }</Provider>

    </div>, document.getElementById("container"));


//To debug state on UI:
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
//<DebugPanel left top bottom>
//    <DevTools store={store} monitor={LogMonitor} />
//</DebugPanel>

