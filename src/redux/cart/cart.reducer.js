import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartData: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.FETCH_CART_DATA:
                return {
                    ...state,
                    cartData: action.payload
                }
            default:
                return state;
    }
}

export default cartReducer;