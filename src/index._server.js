import React from 'react';
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router'
import routes from './routes/routes.jsx'
import createLocation from 'history/lib/createLocation';
import { createStore } from 'redux';
import rootReducer from './reducers';


var configureServer = function(expressServer) {

    expressServer.use(function(req, res, next) {

        let location = createLocation(req.url);

        match({ routes, location}, (error, redirectLocation, renderProps) => {

            if (renderProps) {
                let store = createStore(rootReducer);
                let app = <div><Provider store={store}>{() => <RoutingContext {...renderProps} />}</Provider></div>;
                let html = React.renderToString(app);

                res.status(200).send(`<html>
<head>
    <title>Mobi-Commerz</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

    <h1>I AM FROM 4444!!!</h1>

    <div id="container">${html}</div>

    <script src="vendor.bundle.js"></script>
    <script src="site.js"></script>

</body>
</html>
`);
            }
            else {
                next();
            }

        });
    });

};

export default configureServer;
