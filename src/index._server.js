import React from 'react';
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router'
import routes from './routes/routes.jsx'
import createLocation from 'history/lib/createLocation';
import { createStore } from 'redux';
import rootReducer from './reducers';

// declare our routes and their hierarchy
var serverRender = function(url, response) {
    console.log(url);
    let location = createLocation(url);
    var html;
    match({ routes, location}, (error, redirectLocation, renderProps) => {
        var store = createStore(rootReducer);
        console.log(store);
        var app = <div><Provider store={store}>{() => <RoutingContext {...renderProps} />}</Provider></div>;
        html = React.renderToString(app);
    });
    return html;
};

export default serverRender;
