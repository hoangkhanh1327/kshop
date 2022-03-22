import { filterConstants } from '../constants';

// 0 - no filter
// 1 - asc
// 2 - desc
const initialState = {
    filterPriceType: '0',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case filterConstants.SET_PRICE_FILTER:
            return {
                ...state,
                filterPriceType: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
