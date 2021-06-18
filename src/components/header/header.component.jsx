import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/toko aldi.svg';

import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';



const Header = ({currentUser, hidden, carCart, placeholder, handleChange}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            alflix
        </Link>
        <div className='options'>
            <input
                className='search'
                type='search'
                placeholder='Search movie'
                onChange={handleChange} />
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Welcome <strong>{currentUser.displayName}</strong>!</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);