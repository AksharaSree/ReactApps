import React, { useState, useEffect, useContext }  from 'react'
import {FoodContext} from '../App'
import {Link} from 'react-router-dom';

function Header() {

    let context = useContext(FoodContext);

    return (
        <div className="header-wrapper">
            <div className="header-title">
Food Ordering Portal

            </div>

            <div className="header-cart">
<Link to="cart" > cart icon </Link>
<span className="count">{context.cartLength}</span>
            </div>
        </div>
    )
}

export default Header
