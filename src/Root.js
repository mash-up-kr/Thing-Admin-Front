import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home, Select } from 'pages';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/select" component={Select}/>
      </BrowserRouter>
    );
  }
}

export default Root;