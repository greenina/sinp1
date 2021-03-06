import React, { Component } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user_actions'

class Register extends Component{

    state={
        lastname:"",
        name:"",
        email:"",
        department:"",
        password:"",
        passwordConfirmation:"",
        errors:[]
    };
    displayErrors = errors =>
        errors.map((error, i) => <p key={i}>{error.message}</p>)

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)){
            error = {message:"Fill in all the fields"};
            this.setState({errors:errors.concat(error )}) 
            return false;
        } else if(!this.isPasswordValid(this.state)){
            error = { message: " Password is invalid"}
            this.setState({errors: errors.concat(error)})
            return false;  
        } else{
            return true;
        } 
    }


    isPasswordValid = ( {password, passwordConfirmation}) =>{
        if(password.length < 6 || passwordConfirmation.length < 6){
            return false
        } else if(password !== passwordConfirmation){
            return false;
        }  else {
            return true;
        }
    }
    isFormEmpty = ({ name, lastname, email,department, password, passwordConfirmation }) =>{
        return (
            !name.length ||  
            !lastname.length ||
            !email.length ||
            !department.length||
            !password.length ||
            !passwordConfirmation.length
        )
    }
    
    submitForm = event =>{
        event.preventDefault();

        let dataToSubmit = {
            email:this.state.email,
            name: this.state.name,
            lastname:this.state.lastname,
            department:this.state.department,
            password:this.state.password,
            passwordConfirmation:this.state.passwordConfirmation
        }
        

        if(this.isFormValid()){
            this.setState({errors: [] })
            console.log(dataToSubmit);
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response => {
                console.log(response);
                if(response.payload.success){
                    this.props.history.push('/login')
                } else{
                    this.setState({
                        errors:this.state.errors.concat("your attempt to send data to DB was failed")
                    })

                }
            })
            .catch(err =>{
                this.setState({
                    errors:this.state.errors.concat(err)
                })
            })

        } else {
            console.error("Form is not valid")
        }
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h2>
                        <div>회원가입</div>
                    </h2>
                    <div className="row">
                        <form className="col 12" onSubmit={event => this.submitForm(event)}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        name="lastname"
                                        value={this.state.lastname}
                                        onChange={e => this.handleChange(e)}
                                        id="lastname"
                                        type="text"
                                        className="validate"
                                    />
                                    <label className="active" htmlFor="email">lastname</label>
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
                                        name="name"
                                        value={this.state.name}
                                        onChange={e => this.handleChange(e)}
                                        id="name"
                                        type="text"
                                        className="validate"
                                    />
                                    <label className="active" htmlFor="name">name</label>
                                    <span
                                        className="helper-test"
                                        data-error="Wrong password"
                                        data-success="right"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        name="email"
                                        value={this.state.email}
                                        onChange={e => this.handleChange(e)}
                                        id="email"
                                        type="text"
                                        className="validate"
                                    />
                                    <label className="active" htmlFor="email">email</label>
                                    <span
                                        className="helper-test"
                                        data-error="Wrong password"
                                        data-success="right"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        name="department"
                                        value={this.state.department}
                                        onChange={e => this.handleChange(e)}
                                        id="department"
                                        type="text"
                                        className="validate"
                                    />
                                    <label className="active" htmlFor="department">department</label>
                                    <span
                                        className="helper-test"
                                        data-error="Wrong password"
                                        data-success="right"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        name="password"
                                        value={this.state.password}
                                        onChange={e => this.handleChange(e)}
                                        id="password"
                                        type="password"
                                        className="validate"
                                    />
                                    <label className="active" htmlFor="password">password</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        name="passwordConfirmation"
                                        value={this.state.passwordConfirmation}
                                        onChange={e => this.handleChange(e)}
                                        id="passwordconFirmation"
                                        type="password"
                                        className="validate"
                                    />
                                    <label className="active" htmlFor="passwordConfirmation">Password Confirmation</label>
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
                                        회원가입
                                    </button>

                                    

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )
    }
}


export default connect()(Register);