import React, { useState } from 'react'
import logo from '../Asset/logo.png'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menu, setMenu] = useState("overview");

    return (
        <div className='header'>

            <div className='headertop'>
                <ul className='headerleft'>
                    <li id='logo'><img src={logo} alt="" className='logo' /></li>
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
                    <li onClick={() => { setMenu("overview") }} ><Link to={'/'} className='link' style={{ color: menu === 'overview' ? '#000' : '#959695' }}>Overview</Link></li>
                    <li onClick={() => { setMenu("specs") }}><Link to={'/specs'} className='link' style={{ color: menu === 'specs' ? '#000' : '#959695' }}>Specs</Link></li>
                    <li onClick={() => { setMenu("review") }}><Link to={'/review'} className='link' style={{ color: menu === 'review' ? '#000' : '#959695' }}>Review</Link></li>
                    <li onClick={() => { setMenu("faq") }}><Link to={'/faq'} className='link' style={{ color: menu === 'faq' ? '#000' : '#959695' }}>FAQ</Link></li>
                    <li onClick={() => { setMenu("buy") }}><Link to={'/buynow'} className='link' id='buybtn'>Buy Now</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Header