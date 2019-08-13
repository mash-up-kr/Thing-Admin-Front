import React, { Component } from 'react';
import { LoginWrapper, Login } from '../../components';
import { Redirect } from 'react-router-dom';
import * as service from '../../services/login';

class LoginContainer extends Component {
  constructor(props) {
    super();

    this.state = {
        isAuth: false,
        fetching: false
    };
  }

  setIsAuth = () => {
    this.setState({
      isAuth: true,
    });
  };

  handleSignInClick = async (id, password) => {
   try{
      this.setState({
        fetching: true 
      });
    
      const response = await service.signIn(id, password);
      if (response.status === 200) {
        alert('성공');
        this.setState({ isAuth: true });
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
    const { isAuth, fetching } = this.state;
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