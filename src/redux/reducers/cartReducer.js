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
                                subTotalAmount: Math.round(
                                    product.subTotalAmount +
                                        addedProduct.subTotalAmount
                                ),
                            };
                        }
                        return product;
                    }),
                    totalAmount: Math.round(
                        state.totalAmount + addedProduct.subTotalAmount
                    ),
                    totalQuantity: state.totalQuantity + addedProduct.quantity,
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, addedProduct],
                    totalAmount: Math.round(
                        state.totalAmount + addedProduct.subTotalAmount
                    ),
                    totalQuantity: state.totalQuantity + addedProduct.quantity,
                };
            }
        case cartConstants.REMOVE_ITEM:
            // Remove a product from cart
            let removedProduct = state.items.filter(
                (product) => product.id === action.payload
            )[0];

            return {
                ...state,
                items: state.items.filter(
                    (product) => product.id !== action.payload
                ),
                totalQuantity: state.totalQuantity - removedProduct.quantity,
                totalAmount: Math.round(
                    state.totalAmount -
                        removedProduct.price * removedProduct.quantity
                ),
            };
        case cartConstants.EMPTY_CART:
            // Delete all items in cart
            return {
                ...state,
                items: [],
                totalQuantity: 0,
                totalAmount: 0,
            };
        case cartConstants.SUB_QUANTITY:
            // sub 1 quantity to product
            let product = state.items.filter(
                (item) => item.id === action.payload
            )[0];

            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...product,
                            quantity: product.quantity - 1,
                        };
                    }
                    return item;
                }),
                totalQuantity: state.totalQuantity - 1,
                totalAmount: Math.round(state.totalAmount - product.price),
            };

        case cartConstants.ADD_QUANTITY:
            // add 1 quantity to product
            let product1 = state.items.filter(
                (item) => item.id === action.payload
            )[0];

            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === product1.id) {
                        return {
                            ...product1,
                            quantity: product1.quantity + 1,
                        };
                    }
                    return item;
                }),
                totalQuantity: state.totalQuantity + 1,
                totalAmount: Math.round(state.totalAmount + product1.price),
            };
        default:
            return state;
    }
};

export default cartReducer;
