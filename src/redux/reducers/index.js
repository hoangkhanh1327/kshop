import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    productState: productReducer,
    cartState: cartReducer,
    filterState: filterReducer,
});

export default rootReducer;
