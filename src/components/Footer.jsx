import React from 'react'

const Footer = () => {
    const top = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (

        <div className='btn'>
            <button onClick={top}>back to top</button>
        </div>
    )
}

export default Footer