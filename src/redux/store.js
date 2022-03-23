import rootReducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from '../utils/browserStorage';

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    compose(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
