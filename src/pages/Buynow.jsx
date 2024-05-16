import React, { useState } from 'react'
import img1 from '../Asset/64dbe3e1-70b8-449d-961c-480eb7c64a6c.webp'
import Hero from '../components/Hero'
const Buynow = () => {
    const [quantity, setQuantity] = useState(1);

    const add = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity < 5) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    };

    const remove = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 0) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    };

    const price = quantity * 1499;

    return (
        <>
            <div className='bn1'>
                <p className='bn2'>To facilitate your purchase, please log in sooner the better!</p>
                <div className='bn3'>
                    <div className='bn4'><img src={img1} alt="" /></div>
                    <div className='bn5'>
                        <p className='i1'>Redmi Buds 5A</p>
                        <p className='i2'>Black</p>
                        <p className='i3'>₹1,499 <span className='price'>₹2,999</span></p>
                        <hr />
                        <p className='i4'>Free Delivery</p>
                        <p className='i4'>COD</p>
                        <p className='i4'>10-days Replacement Policy</p>
                        <hr />
                        <p className='i5'>Check if stock is available at your pincode</p>
                        <div className='bn6'>
                            <input type="text" placeholder='enter your pincode' />
                            <p>check</p>
                        </div>
                        <hr />
                        <p className='i6'>Colour</p>
                        <div className='bn7'>
                            <p id='bn7p'>Black</p>
                            <p>White</p>
                        </div>
                        <p className='i6'>Quantity</p>
                        <div className='bn8'>
                            <p id='a' onClick={remove}>-</p>
                            <p id='b'>{quantity}</p>
                            <p id='c' onClick={add}>+</p>
                        </div>
                        <div className='bn9'>
                            <div className='bn10'>
                                <p>Redmi Buds 5A Black * {quantity}</p>
                                <p>₹{price} <span className='price'>₹2,999</span></p>
                            </div>
                            <div className='bn11'>
                                <p>Total</p>
                                <p>₹{price}</p>
                            </div>
                        </div>
                        <p className='bn12'>Sold by: Xiaomi Technology India Private Limited</p>
                        <button id='btn1'>Buy Now</button>

                    </div>
                </div>
            </div>
            <Hero />
        </>


    )
}

export default Buynow