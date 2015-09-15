import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

const finalCreateStore = compose(

    // Enables your middleware:
    applyMiddleware(thunkMiddleware, loggerMiddleware),

    // Provides support for DevTools:
    devTools(),

    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))

)(createStore);

export default function configureStore(initialState) {

    const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
