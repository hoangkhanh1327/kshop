import rootReducer from './reducers';
import loggerMiddleware from './middleware/logger';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from '../utils/browserStorage';

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
