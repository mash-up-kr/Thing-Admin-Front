import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Select, PrivateRoute } from 'pages';


class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
         <Route path="/" component={Home}/>
         <PrivateRoute path="/select" component={Select}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;