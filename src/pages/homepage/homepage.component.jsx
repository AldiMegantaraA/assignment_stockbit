import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCartData} from '../../redux/cart/cart.action.js';
import ReactCircleModal from 'react-circle-modal'

import './homepage.styles.scss'
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

function ShopPage({handleChange}) {
    const dispatch = useDispatch()
    const shopData = useSelector(state => state.cart.cartData)
    useEffect(() => {
        dispatch(fetchCartData())
        console.log(shopData)
    }, [dispatch] ) 
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                       ];
    var today = new Date();
    var month = monthNames[today.getMonth()];
    var date = today.getDate();
    var year = today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = month+' '+ ' ' + date + ', ' + time;
    // console.log(shopData)
    return (
        <>
        <input
                className='search'
                type='search'
                placeholder='Search movie'
                onChange={handleChange} />
            <div className='shop-page'>
             
            </div>
        </>
    )
}

export default ShopPage;