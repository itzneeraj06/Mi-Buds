import React from 'react'
import logo from '../Asset/logo.png'
import '../App.css'

const header = () => {
    return (
        <div className='header'>

            <div className='headertop'>
                <ul className='headerleft'>
                <li><img src={logo} alt="" className='logo' /></li>
                <li>Store</li>
                <li>Phone</li>
                <li>TV & SmartHome</li>
                <li>Tablet</li>
                <li>Lifestyle</li>
            </ul>
                <ul className='headerright'>
                    <li >Discover</li>
                    <li>Support</li>
                    <li>search</li>
                    <li>cart</li>
                    <li>Account</li>
                </ul>
            </div>
            <div className='headersec'>
                <h3>Redmi  Buds 5A</h3>
                <ul className='headerinner'>
                    <li>Overview</li>
                    <li>Specs</li>
                    <li>Review</li>
                    <li>FAQ</li>
                    <li id='buybtn'>Buy Now</li>
                </ul>

            </div>
        </div>
    )
}

export default header