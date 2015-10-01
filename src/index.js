import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/routes.jsx'
import {Router} from 'react-router';
import configureStore from './store/configureStore';
import './index.less';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// declare our routes and their hierarchy
const store = configureStore();

let history = createBrowserHistory();

React.render(
    <div>
        <Provider store={store}>{() => <Router history={history}>{Routes}</Router>}</Provider>
    </div>, document.getElementById("container"));


//To debug state on UI:
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
//<DebugPanel left top bottom>
//    <DevTools store={store} monitor={LogMonitor} />
//</DebugPanel>

