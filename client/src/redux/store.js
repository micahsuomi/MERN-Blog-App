import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let initState = {}


const middleware = [thunk];

const store = createStore(rootReducer, initState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // sagaMiddleware.run(rootSaga),

    

));
export default store;
