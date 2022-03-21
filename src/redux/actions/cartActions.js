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
            description
        },
    });
};

export const removeAllItemsInCart = () => (dispatch) => {
    dispatch({
        type: cartConstants.EMPTY_CART,
    });
};
