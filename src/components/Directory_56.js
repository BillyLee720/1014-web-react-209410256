import React, { useState } from 'react';
import './Directory_56.scss';
import items from './menu-items-data';
import MenuItem_56 from './MenuItem_56';

const Directory_56 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div>
            <div className='directory-menu'>
                {menuItems.map((item) => {
                    const { id, name, remoteURL, size } = item;
                    return (
                        <MenuItem_56
                            key={id}
                            name={name}
                            remoteURL={remoteURL}
                            size={size}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Directory_56;
