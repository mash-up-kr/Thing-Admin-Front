import React, { Component } from 'react';
import { Header } from '../components';
import { SelectContainer } from '../containers'

class Select extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SelectContainer/>
      </div>
    );
  }
}

export default Select;