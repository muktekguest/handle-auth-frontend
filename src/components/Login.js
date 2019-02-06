import React, { Component } from "react";



export default class Login extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    const API_URL = "https://secure-thicket-75424.herokuapp.com/api/v1"

    fetch(`${ API_URL }/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: e.target.username.value,
        password: e.target.password.value
      })
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("token", data.token);
      const url = window.decodeURIComponent(this.props.location.search);
      // this.props.history.push("/dashboard");
      this.props.history.push("/" + url.split("/")[1]);
    })
    .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={ this.onSubmit }>
          <div>
            <input name="username" type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" type="password" placeholder="password" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
