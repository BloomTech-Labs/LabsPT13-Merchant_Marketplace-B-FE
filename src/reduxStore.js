import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './state/reducers';

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
