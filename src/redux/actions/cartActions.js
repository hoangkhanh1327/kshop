import { cartConstants } from '../constants';

export const addItemToCart = (product, quantity) => async (dispatch) => {
    const { id, title, price, image, description } = product;
    let subTotalAmount = price * quantity;
    dispatch({
        type: cartConstants.ADD_ITEM,
        payload: {
            id,
            title,
            price,
            quantity,
            image,
            subTotalAmount,
            description,
        },
    });
};

export const removeAllItemsInCart = () => (dispatch) => {
    dispatch({
        type: cartConstants.EMPTY_CART,
    });
};

export const subItemQuantity = (productId) => (dispatch) => {
    dispatch({
        type: cartConstants.SUB_QUANTITY,
        payload: productId,
    });
};

export const addQuantity = (productId) => (dispatch) => {
    dispatch({
        type: cartConstants.ADD_QUANTITY,
        payload: productId,
    });
};

export const removeItemFromCart = (productId) => (dispatch) => {
    dispatch({
        type: cartConstants.REMOVE_ITEM,
        payload: productId,
    });
};
