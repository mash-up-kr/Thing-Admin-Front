import React, { Component } from 'react';
import { Header } from './components';
import { LoginContainer } from './containers'


class App extends Component {
  render() {
      return (
          <div>
              <Header/>
              <LoginContainer />
          </div>
      );
  }
}

export default App;