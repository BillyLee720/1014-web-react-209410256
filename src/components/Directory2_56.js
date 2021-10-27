import React, { useState, useEffect } from 'react';
import './Directory_56.scss';
// import items from './menu-items-data';
import MenuItem_56 from './MenuItem_56';
import axios from 'axios';

const Directory2_56 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fectchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown56.herokuapp.com/api_56/category_56';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api/category_56', data);
      setMenuItems(data);
    };
    fectchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
  return (
    <div>
      <div className="directory-menu">
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

export default Directory2_56;
