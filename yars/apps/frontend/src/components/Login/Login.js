import React, { Component } from "react";
import LoginForm from "src/components/Login/LoginForm";

class Login extends Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
