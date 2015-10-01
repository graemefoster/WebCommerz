import React from 'react';
import { Provider } from 'react-redux';
import routes from './routes/routes.jsx'
import configureStore from './store/configureStore';
import './index.less';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// declare our routes and their hierarchy
const store = configureStore();

React.render(
    <div>
        <Provider store={store}>{() => routes}</Provider>
    </div>, document.getElementById("container"));


//To debug state on UI:
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
//<DebugPanel left top bottom>
//    <DevTools store={store} monitor={LogMonitor} />
//</DebugPanel>

