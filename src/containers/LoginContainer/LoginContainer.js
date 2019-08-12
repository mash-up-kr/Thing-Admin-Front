import React, { Component } from 'react';
import { LoginWrapper, Login } from '../../components';
import * as service from '../../services/login';

class LoginContainer extends Component {

  constructor(props) {
    super();

    this.state = {
        fetching: false
    };
  }

  handleSignInClick = async (id, password) => {
    this.setState({
      fetching: true 
    });

    await service.signIn(id, password);

    this.setState({
      fetching: false
    });
  }

  render() {
    const {fetching} = this.state;

    return (
      <LoginWrapper>
        <Login disable={fetching} onClick={this.handleSignInClick}/>
      </LoginWrapper>
    );
  }
}

export default LoginContainer;