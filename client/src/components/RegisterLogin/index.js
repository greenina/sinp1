import React, {Component} from 'react';
import { withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions'
import { Link } from 'react-router-dom'
// import { Formik } from 'formik';



class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: []
  };

  displayErrors = errors =>
      errors.map((error, i) => <p key={i}>{error}</p>)
  handleChange = event=>{
      this.setState({[event.target.name]:event.target.value})
  }

  submitForm = event=>{
      event.preventDefault();

      let dataToSubmit = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        lastname: this.state.lastname,
        passwordConfirmation: this.state.passwordConfirmation
      };

      if(this.isFormvalid(this.state)){
        this.setState({errors: [] })
          this.props.dispatch(loginUser(dataToSubmit))
          .then(response => {
            if(response.payload.loginSuccess){
              this.props.history.push('/uploadPage')
            } else{
              this.setState({
                errors:this.state.errors.concat(
                "Failed to login"
              )
            })
            }
          })
      } else {
        this.setState({
          errors: this.state.errors.concat("invalid form")
        })
      }
  }

  isFormvalid = ({email,password}) => email && password;
  render() {
    return (
      <div>
        <div className="container">
          <h2>
            <div>로그인</div>
          </h2>
          <div className="row">
            <form className="col 12" onSubmit={event => this.submitForm(event)}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                    id="email"
                    type="email"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                  <span
                    className="helper-test"
                    data-error="Type a right type email"
                    data-success="right"
                  />
                </div>
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
                  <label htmlFor="password">Password</label>
                  <span
                    className="helper-test"
                    data-error="Wrong password"
                    data-success="right"
                  />
                </div>
              </div>

              {this.state.errors.length > 0 && (
                <div>{this.displayErrors(this.state.errors)}</div>
              )}

              <div className="row">
                <div className="col s12">
                  <button
                    className="btn waves-effect red lighten-2"
                    type="submit"
                    name="action"
                    onClick={event => this.submitForm(event)}
                  >
                    LOG IN
                  </button>
                
                  <Link to ="/register">
                    <button
                      className="btn waves-effect red lighten-2"
                      type="submit"
                      name="action"
                    >
                       회원가입
                    </button>
                  </Link>
                  
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}
export default connect()(RegisterLogin);