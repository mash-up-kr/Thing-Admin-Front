import React from 'react';
import './Header.css';
import icon from './img/app.png'

const Header = () => {
  return <div className="Header"><div><img className="Icon" src={icon} alt="icon"/></div><p>U2U Admin</p></div>;
};

export default Header;
