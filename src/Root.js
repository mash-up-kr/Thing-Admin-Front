import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Select, PrivateRoute } from 'pages';


class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home}/>
         <PrivateRoute exact path="/select" component={Select}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;