import React, { Component } from 'react';
import { Header } from '../components';
import Auth from '../services/Auth';

class Select extends Component {
  render() {
    if(Auth.getAuth()) {
      return (
        <div>
          <Header/>
          <h1>성공</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Header/>
          <h1>실패</h1>
        </div>
      );
    }
  }
}

export default Select;