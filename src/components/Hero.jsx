import React from 'react'
import '../App.css'
import graphics from '../Asset/f012da490488601d559cf4db2588eefb.webp'
import img1 from '../Asset/fbec8b50d81d721de1e642a95c0d45da.webp'
import img2 from '../Asset/6ca67e68361d13aef1a2ffa5681b746b.webp'
import img3 from '../Asset/83d4b0db2983df7d83b1fc507bb2d05f.webp'
import img4 from '../Asset/f053056f3523a82a70880592bf014da3.webp'
import img5 from '../Asset/a9819dc4d51ce643fbbc6c281a0deb7d.webp'
import img6 from '../Asset/f2c599be1aca93549d544618230509c4.webp'
import img7 from '../Asset/b666bc420e11adfce3e28591f579f2d9.webp'

const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <img src={graphics} alt="" className='g1' />
            </div>
            <div className='h2'>
                <img src={img1} alt="" className='h3' />
                <p id='head1'> Redmi Buds 5A </p>
                <p id='head2'>ANC for Everyone</p>
            </div>
        </div>
    )
}

export default Hero