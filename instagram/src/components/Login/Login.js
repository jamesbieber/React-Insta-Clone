import React from "react";
import "./login.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  login = event => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    window.location.reload();
  };

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.login} className="login-form">
        <img src="instagram.jpg" />
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.inputChangeHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.inputChangeHandler}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
