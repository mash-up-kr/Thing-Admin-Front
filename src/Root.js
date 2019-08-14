import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home, Select, Category, Youtuber, Tag, PrivateRoute } from 'pages';


class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home}/>
         <PrivateRoute exact path="/select" component={Select}/>
         <PrivateRoute exact path="/category" component={Category}/>
         <PrivateRoute exact path="/youtuber" component={Youtuber}/>
         <PrivateRoute exact path="/tag" component={Tag}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;