import React from 'react';
import Routes from './routes/routes.jsx'
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation';
//import configureStore from './store/configureStore';

// declare our routes and their hierarchy
const store = {
    subscribe: function(){},
    dispatch: function(){},
    getState: function(){}
};

var serverRender = function(url, response) {
    let location = createLocation('/about');
    var html;
    match({ Routes, location}, (error, redirectLocation, renderProps) => {
        var app = <div><RoutingContext location={location} /></div>;
        html = React.renderToString(app);
        console.log(html);
    });
    return html;
};

export default serverRender;
