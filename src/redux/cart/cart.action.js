import CartActionTypes from './cart.types';
import axios from 'axios';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const setCartData = (payload) => {
    return {type:CartActionTypes.FETCH_CART_DATA, payload}
}

export const fetchCartData = () => {
    return async dispatch => {
        try {
            const res = await axios.get('http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=2')
            const {data} = res
            // console.log(data)
            dispatch(setCartData(data))
        } catch(err) {
            console.error(err)
        }
    }
}