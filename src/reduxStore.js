import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './state/reducers';

export default createStore(rootReducer, undefined, applyMiddleware(thunk));
