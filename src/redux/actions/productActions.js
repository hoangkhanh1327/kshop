import { productConstants } from '../constants';
import { productApi } from '../../apis';

export const getAllProducts = () => async (dispatch) => {
    dispatch({
        type: productConstants.SET_LOADING,
    });
    const { data } = await productApi.getAllProducts();
    dispatch({
        type: productConstants.SET_PRODUCTS,
        payload: data,
    });
};

export const getProductsByCategory = (categoryId) => async (dispatch) => {
    dispatch({
        type: productConstants.SET_LOADING,
    });

    const { data } = await productApi.getProductsByCategory(categoryId);
    // add items to recently list
    dispatch({
        type: productConstants.SET_PRODUCTS,
        payload: data,
    });
};

export const setRecentlyProduct = (product) => async (dispatch) => {
    dispatch({
        type: productConstants.ADD_RECENTLY_PRODUCTS,
        payload: product,
    });
};
