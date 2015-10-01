import {Router, Route, IndexRoute} from 'react-router';
import App from '../containers/app';
import Featured from '../components/featured/featured.jsx';
import About from '../components/about/about.jsx';
import createHashHistory from 'history/lib/createHashHistory';

//createBrowserHistory is preferred but will need some server side gumf.
let history = createHashHistory();

let routes = <Router history={history}>
    <Route path="/" component={App}>
        <IndexRoute component={Featured} />
        <Route path="featured" component={Featured}/>
        <Route path="about" component={About}/>
    </Route>
</Router>;

export default routes;
