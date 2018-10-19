import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <form className="box">
        <div className="field has-text-centered">
          <p>YARS</p>
        </div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
            <input className="input" type="email" required />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input className="input" type="password" required />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </div>
        </div>
        <div className="field">
          <button className="button is-fullwidth is-primary">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
