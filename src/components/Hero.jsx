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
import img8 from '../Asset/a375d9eb100884fa08dfdd7e3fb63047.webp'
import img9 from '../Asset/dfd74e81f18420401b663a6560a4830e.webp'
import img10 from '../Asset/309e7133ddb4662ec551c38b4b0de951.webp'
import img11 from '../Asset/e9ba19063f70e3a301d03b96db82611c.webp'
import img12 from '../Asset/9188751ccd85f792429f094a1a3598c8.webp'
import img13 from '../Asset/1f09faca6ecdcf6fc1a3b0bbfb467ac1.webp'
import img14 from '../Asset/0f81927ac6d6d51986615aa3c3ece39f.webp'
import img15 from '../Asset/7c99e226ecdbe50c5577348e9f95cd76.webp'
import img16 from '../Asset/63aecd8390bcf5bcd319a587b8ed8797.webp'
import img17 from '../Asset/e38ba6cfc911662760cb6ca99dc5c364.png'
import img18 from '../Asset/cddaaba682216fd555e5da9387cd8991.webp'
import img19 from '../Asset/64dbe3e1-70b8-449d-961c-480eb7c64a6c.webp'
import img20 from '../Asset/24b3275b-145b-4092-9157-1b01e7de1580.webp'
import logo from '../Asset/logo.png'

const Hero = () => {
    const top=()=>{
        document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            <div className='hero'>
                <img src={graphics} alt="" className='g1' />
            </div>
            <div className='h2'>
                <img src={img1} alt="" className='h3' />
                <p id='head1'> Redmi Buds 5A </p>
                <p id='head2'>ANC for Everyone</p>

                <div className="a1">
                    <div className="a2">
                        <div className="a4"><img src={img2} alt="" /></div>
                        <div className="a5">
                            <div className="a6">
                                <div className="a7"><img src={img3} alt="" className='a7img' /></div>
                                <div className="a8"><img src={img4} alt="" /></div>
                            </div>
                            <div className='a9'><img src={img5} alt="" className='a9img' /></div>
                        </div>
                    </div>
                    <div className="a3">
                        <div className='a10'><img src={img6} alt="" className='a10img' /></div>
                        <div className='a11'><img src={img7} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="p2">
                <div className='p3'>
                    <div className='p4'><img src={logo} alt="" className='p5' /></div>
                    <div className='p6'>
                        <div className='p7'>Redmi Buds 5A <br /><span>ANC for everyone</span></div>
                        <div className='p8'><img src={img1} alt="" className='p9' /></div>
                    </div>

                </div>
            </div>
            <div className="k1">
                <div className='k2'>
                    <p className='k3'>25dB Active <br />
                        Noise Cancellation</p>
                    <p className='k4'>Break free from distractions with Active Noise Cancellation. <br /> Boost your concentration by eliminating unwanted noise.</p>
                    <img src={img8} alt="" className='k5' />
                </div>
            </div>
            <div className="j1">
                <div className="j2">
                    <p className="j3">Transparency Mode</p>
                    <p className="j4">Listen to what matters with added Transparency Mode <br />along with Active Noise Cancellation mode.</p>
                    <img src={img9} alt="" className='j5' />
                </div>
            </div>
            <div className="l1">
                <div className="l2">
                    <p className="l3">
                        12mm Dynamic Drivers
                    </p>
                    <p className="l4">
                        Crafted to provide unparalleled dynamic audio and deep <br />bass, ensuring an immersive audio experience.

                    </p>
                    <img src={img10} alt="" className='l5' />
                </div>
            </div>
            <div className="o1">
                <img src={img11} alt="" className='g2' />
                <img src={img12} alt="" className='g3' />
                <p className='g4'>Quick Charge 10mins = Up to 90mins of Playtime</p>
                <p className='g5'>Power up your playlist. Enjoy marathon listening <br />sessions with up to 30-hours of Long-lasting <br />Entertainment</p>
            </div>
            <div className="f1">
                <div className="f2">
                    <p className='f3'>Google Fast Pair </p>
                    <img src={img13} alt="" className='f4' />
                    <p className='f5'>Enjoy Seamless Connectivity with Google Fast Pair. Get the pop-up notification as soon as you open the flap of earbuds.</p>
                </div>
            </div>
            <div className="x1">
                <div className="x2">
                    <p className="x3">AI Environmental Noise Cancellation for calls</p>
                    <img src={img14} alt="" className='x5' />
                    <p className="x4">AI Environmental Noise Cancellation (AI ENC) ensures clear communication even in noisy environments</p>
                </div>
            </div>
            <div className="y1">
                <div className="y2">
                    <p className="y3">IPX4</p>
                    <img src={img15} alt="" className='y4' />
                    <p className="y5">From braving rain showers to intense workouts, these earbuds are up for any challenge with IPX4 rating.</p>
                </div>
            </div>
            <div className="s1">
                <div className="s2">
                    <img src={img16} alt="" />
                    <p>Dive into Wireless Freedom with Redmi Buds 5A's Bluetooth 5.4! Enjoy faster connections and broader coverage.</p>
                </div>
            </div>
            <div className="w1">
                <div className="w2">
                    <p className='w3'>Premium Design</p>
                    <p className='w4'>Crafted with meticulous attention to detail, the smooth curves and sleek contours evoke the natural beauty of a polished pebble, creating a truly captivating aesthetic.</p>
                    <img src={img17} alt="" className='w5' />
                </div>
            </div>
            <div className="z1">
                <div className="z2">
                    <p className="z3">Low Latency Mode</p>
                    <p className="z4">Quick response time with Low Latency Mode, ensuring that sound syncs perfectly with your gaming maneuvers.</p>
                    <img src={img18} alt="" className='z5' />
                </div>
            </div>
            <div className="t1">
                <div className="t2">
                    <p className='t3'>Touch Controls</p>
                    <p className='t4'>Control your music effortlessly with the touch controls of Redmi Buds 5A, tapping and double-tapping with precision</p>
                </div>
            </div>
            <div className="q1">
                <div className="q2">
                    <div className='q3'>
                        <img src={img19} alt="" />
                        <p>Bass Black</p>
                    </div>
                    <div className='q3'>
                        <img src={img20} alt="" />
                        <p>Timeless White</p>
                    </div>
                </div>
            </div>
            <div className='r1'>
                <p>The Redmi Buds 5A available in Bass Black and Timeless White colors comes in matt-finish to enhance the look and feel. It comes with a range of features: <br />
25dB Active Noise Cancellation: Experience undisturbed audio with up to 25dB noise cancellation. <br />
Bluetooth 5.4: Enjoy faster connection and broader coverage with Bluetooth v5.4. <br />
Transparency Mode: Listen to what matters with added Transparency Mode along with Active Noise Cancellation mode. <br />
12mm Dynamic Drivers: Equipped with powerful 12mm dynamic drivers, Redmi Buds 5A delivers an exceptional audio experience with rich, immersive sound quality. <br />
Google Fast Pair: Google Fast Pair ensures a swift and hassle-free connection, offering a seamless experience. <br />
AI Environmental Noise Cancellation for calls: AI Environmental Noise Cancellation (ENC) enhances call clarity, ensuring uninterrupted communication even in noisy environments, and making every call crystal clear. <br />
Up to 30 Hours of Battery Life: The Redmi Buds 5A provides a playback time of up to 30 hours (case) with ANC Off and up to 23 hours (case) with ANC On. The mentioned playtime was achieved when the volume was set to 50% with SBC Codec. <br />
IPX4: Featuring an IPX4 rating, Redmi Buds 5A offers water resistance and durability. <br />
Low Latency Mode: ~60ms Low Latency mode enhances the overall user experience by providing synchronized and lag-free audio, ideal for gaming. <br />
Touch Controls: Control your music effortlessly with the touch controls of Redmi Buds 5A, tapping and double-tapping with precision. <br />
Xiaomi Earbuds app: The Xiaomi Earbuds app offers customization to different modes, low latency mode, and more.</p>
            </div>
            <div className='btn'>
                <button onClick={top}>back to top</button>
            </div>


        </div>
    )
}

export default Hero