import React from 'react';
import './SelectWrapper.css'

const SelectWrapper = ({children}) => {
  return (
    <div className="SelectWrapper">
      {children}
    </div>
  );
};

export default SelectWrapper;