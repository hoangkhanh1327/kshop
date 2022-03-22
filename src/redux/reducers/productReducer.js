import { productConstants } from '../constants';

const initialState = {
    products: [],
    loading: true,
    recentlyViewProducts: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case productConstants.SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case productConstants.ADD_RECENTLY_PRODUCTS:
            let addedProduct = action.payload;
            const isProductExisted = state.recentlyViewProducts.filter(
                (product) => product.id === addedProduct.id
            );

            if (isProductExisted.length > 0) {
                return state;
            } else {
                return {
                    ...state,
                    recentlyViewProducts: [
                        ...state.recentlyViewProducts,
                        action.payload,
                    ],
                };
            }

        default:
            return state;
    }
};

export default productReducer;
