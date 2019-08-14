import React, { Component } from 'react';
import { LoginWrapper, Login } from '../../components';
import { Redirect } from 'react-router-dom';
import Auth from '../../services/Auth';
import * as service from '../../services/login';

class LoginContainer extends Component {
  constructor(props) {
    super();

    this.state = {
        isAuth: false,
        fetching: false
    };
  }

  handleSignInClick = async (id, password) => {
   try{
      this.setState({
        fetching: true 
      });
    
      const response = await service.signIn(id, password);
      if (response.status === 200) {
        alert('성공');
        Auth.authenticate();

    console.log(Auth.getAuth())
        this.setState({
          isAuth: Auth.getAuth()
        })
      } else {
        this.setState({
          fetching: false 
        });
      }
    } catch (error) {
      alert('실패');
      console.log(error);
    }
  }

  render() {
    const { fetching, isAuth } = this.state;
    if(isAuth) {
      return(<Redirect to='/select'/>)
    } else {
      return(
        <LoginWrapper>
          <Login disable={fetching} onClick={this.handleSignInClick}/>
        </LoginWrapper>
      )
    }
  
  }
}

export default LoginContainer;