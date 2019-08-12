import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

  state = {
    id: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onClick(this.state.id, this.state.password);
  }

  render() {
    const {disabled} = this.props;

    return (
      <div className="Login">
      <h2>Sign-In</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" name = "id" onChange={this.handleChange} value={this.state.id}></input>
        </div>
        <div>
          <input type="text" name = "password" onChange={this.handleChange} value={this.state.password}></input>
        </div>
        <div>
          <button type="submit" disabled={disabled}>Sign-In</button>
        </div>
      </form>
    </div>
    );
  }
}

export default Login;
