import React from 'react';
import './MenuItem_56.scss';

const MenuItem_56 = ({ name, remoteURL, size }) => {
    return (
        <div className={`${size} menu-item`} >
            <img className="background-image" src={remoteURL} alt="" />
            <a href="./hats.html" className="content">
                <h1 className='title'>{name}</h1>
                <span className="subtitle">SHOP NOW</span>
            </a>
        </div>
    )
}

export default MenuItem_56;