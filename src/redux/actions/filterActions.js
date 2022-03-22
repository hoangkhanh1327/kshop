import { filterConstants } from '../constants';

export const filterPrice = (filterType) => (dispatch) => {
    dispatch({
        type: filterConstants.SET_PRICE_FILTER,
        payload: filterType,
    });
};
