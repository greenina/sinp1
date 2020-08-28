import React, {Component} from 'react';





class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: []
  };


  handleChange = event=>{
      this.setState({[event.target.name]:event.target.value})
  }
  submitForm = event=>{
      event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2>Login</h2>
          <div className="row">
            <form className="col 12">
              <div className="row">
                <div>
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    id="email"
                    type="email"
                    className="validate"
                  />
                  <label htmlForm="email">email</label>
                  <span
                    className="helper-test"
                    data-error="Type a right type email"
                    data-success="right"
                  />
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                      id="password"
                      type="password"
                      className="validate"
                    />
                    <label htmlForm="password">Password</label>
                    <span
                      className="helper-test"
                      data-error="Wrong password"
                      data-success="right"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col 12">
                    <button
                      className="btn waves-effect red lighten-2"
                      type="submit"
                      name="action"
                      onClick={this.submitForm}
                    >
                      LOG IN
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterLogin;