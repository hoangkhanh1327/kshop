import { cartConstants } from '../constants';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartConstants.ADD_ITEM:
            // Add or update a product in cart
            let addedProduct = action.payload;

            let isProductExisted = state.items.filter(
                (product) => product.id === addedProduct.id
            );

            if (isProductExisted.length > 0) {
                return {
                    ...state,
                    items: state.items.map((product) => {
                        if (product.id === addedProduct.id) {
                            return {
                                ...product,
                                quantity:
                                    product.quantity + addedProduct.quantity,
                                subTotalAmount:
                                    product.subTotalAmount +
                                    addedProduct.subTotalAmount,
                            };
                        }
                        return product;
                    }),
                    totalAmount:
                        state.totalAmount + addedProduct.subTotalAmount,
                    totalQuantity: state.totalQuantity + addedProduct.quantity,
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, addedProduct],
                    totalAmount:
                        state.totalAmount + addedProduct.subTotalAmount,
                    totalQuantity: state.totalQuantity + addedProduct.quantity,
                };
            }
        case cartConstants.REMOVE_ITEM:
            // Remove a product from cart
            let removedProduct = state.items.filter(
                (product) => product.id === action.payload
            );

            return {
                ...state,
                items: state.items.filter(
                    (product) => product.id !== action.payload
                ),
                totalQuantity: state.totalQuantity - removedProduct.quantity,
                totalAmount:
                    state.totalAmount -
                    removedProduct.price * removedProduct.quantity,
            };
        case cartConstants.EMPTY_CART:
            // Delete all items in cart
            return {
                ...state,
                items: [],
                totalQuantity: 0,
                totalAmount: 0,
            };
        default:
            return state;
    }
};

export default cartReducer;
