import React, { Component } from 'react';
import { SelectWrapper, Select } from '../../components';

class SelectContainer extends Component {
  render() {
    return (
      <div>
        <SelectWrapper>
          <Select/>
        </SelectWrapper>
      </div>
    );
  }
}

export default SelectContainer;