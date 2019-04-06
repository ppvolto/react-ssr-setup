import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './rootReducer';

export function configureStore(config = { initialState: {}, middleware: [] }) {
    const { initialState, middleware } = config;
    const composeEnhancers = composeWithDevTools({
        actionsBlacklist: [],
    });
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () =>
                store.replaceReducer(require('./rootReducer').default)
            );
        }
    }

    return store;
}

export default configureStore;
