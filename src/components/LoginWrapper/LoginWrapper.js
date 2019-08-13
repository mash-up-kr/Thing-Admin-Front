import React from 'react';
import './LoginWrapper.css'

const LoginWrapper = ({children}) => {
  return (
    <div className="LoginWrapper">
      {children}
    </div>
  );
};

export default LoginWrapper;