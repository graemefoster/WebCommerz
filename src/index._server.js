import React from 'react';
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router'
import routes from './routes/routes.jsx'
import createLocation from 'history/lib/createLocation';
//import configureStore from './store/configureStore';

// declare our routes and their hierarchy
const store = {
    subscribe: function(){},
    dispatch: function(){},
    getState: function(){ return {items:[]}}
};

var serverRender = function(url, response) {
    let location = createLocation(url);
    var html;
    match({ routes, location}, (error, redirectLocation, renderProps) => {
        var app = <div><Provider store={store}>{() => <RoutingContext {...renderProps} />}</Provider></div>;
        html = React.renderToString(app);
    });
    return html;
};

export default serverRender;
