import React from 'react'
import img1 from '../Asset/64dbe3e1-70b8-449d-961c-480eb7c64a6c.webp'

const Specs = () => {
  return (
    <div>
      <div className="sp1">
        <h3>Redmi Buds 5A</h3>
        <img src={img1} alt="" />
        <div className='sp0'>
          <h5 className='gen'>General Features</h5>
          <div className='sp2'>
            <div className='sp3'>
              <p>Driver size:</p>
              <p>Dynamic frequency: </p>
              <p>Response range:</p>
              <p>ANC Depth:</p>
              <p>ANC Modes:</p>
              <br />
              <p>Environmental Noise Cancellation:</p>
              <p>IPX Rating:</p>
              <br />
              <p>Control type:</p>
              <p>Charging interface:</p>
            </div>
            <div className='sp4'>
              <p>12mm Dynamic Drivers</p>
              <p>20Hz-24KHz</p>
              <p>25dB at 2kHz</p>
              <p>Nill</p>
              <p>Three modes <br /> (Noise cancellation/Transparency/Off)</p>
              <p>AI ENC for clear and uninterrupted calls</p>
              <p>IPX4 - Earphones only (Sweat and Splash Proof)</p>
              <p>Touch</p>
              <p>Type C</p>

            </div>
          </div>
        </div>
        <div className='sp0'>
          <h5 className='gen'>Bluetooth</h5>
          <div className="sp2">
            <div className="sp3">
              <p>Bluetooth Version: </p>
              <p>Bluetooth range:</p>
              <p>Supported Audio Formats:</p>

            </div>
            <div className="sp3">
              <p>Bluetooth®5.4</p>
              <p>10m</p>
              <p>SBC</p>

            </div>
          </div>


        </div>
        <div className='sp0'>
          <h5 className='gen'>Features</h5>
          <div className="sp2">
            <div className="sp3">
              <p>Google Fast Pair: </p>
              <p>App Support:</p>
              <p>Low Latency Mode:</p>
              <p>Latency:</p>

            </div>
            <div className="sp3">
              <p>Yes</p>
              <p>Yes - Xiaomi Earbuds App</p>
              <p>Yes</p>
              <p>60ms</p>

            </div>
          </div>


        </div>
        <div className='sp0'>
          <h5 className='gen'>Battery</h5>
          <div className="sp2">
            <div className="sp3">
              <p>Battery Capacity: </p>
              <p>Battery Charge Time:</p><br />
              <p>Playback time ANC OFF | 50% Volume | SBC:</p>
              <p>ANC OFF | 50% Volume | SBC:</p><br />
              <p>Fast Charge:</p>

            </div>
            <div className="sp3">
              <p>440mAh(Case), 34mAh x 2(Earbuds)</p>
              <p>Approx. 42 mins(Earbuds) Approx. 1.5 hours(Case)</p>
              <p>Case + Earbuds - Up to 30hrs Earbuds - Up to 5hrs</p>
              <p>Case + Earbuds - Up to 23hrs Earbuds - Up to 3.5hrs</p>
              <p>10mins = ~90mins</p>

            </div>
          </div>


        </div>
        <div className='sp0'>
          <h5 className='gen'>Weight & Dimensions</h5>
          <div className="sp2">
            <div className="sp3">
              <p>Single earbud net weight:</p>
              <p>Total weight with charging case:</p>
              <p>Earbud dimensions:</p>
              <p>Charging case dimensions:</p>

            </div>
            <div className="sp3">
              <p>Approx. 3.6g</p>
              <p>Approx. 41.2g</p>
              <p>31.1*20.9*22.5mm</p>

            </div>
          </div>


        </div>
        
        <p className='dis'>Disclaimer: *Data provided by internal laboratories. Industry measurement methods may vary, and therefore actual results may differ</p>
      </div>
    </div>
  )
}

export default Specs