import React from 'react';
import './Select.css'
import { Link } from 'react-router-dom';

const Select = () => {
  return (
    <div className="Select">
      <h2>Menu</h2>
      <div>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/youtuber">Youtuber</Link></li>
        <li><Link to="/tag">Tag</Link></li>
      </div>
    </div>
  );
};

export default Select;