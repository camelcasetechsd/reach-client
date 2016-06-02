import React, { Component, PropTypes } from 'react'
import MultiStepButtons from './../multiStep/multiStepButtons.jsx'

export default class LoginDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            firstName: '',
            lastName: '',
            email: '',
            emailConfirm: '',
            password: '123', 
            passwordConfirm: '' 
        }
        if(props.data){
            this.state = {
                ...this.state,
                title: (props.data.title) ? props.data.title : '',
                firstName: (props.data.firstName) ? props.data.firstName : '',
                lastName: (props.data.lastName) ? props.data.lastName : '',
                email: (props.data.email) ? props.data.email : '',
            }
        }
        this.handleTitleChanged = this.handleTitleChanged.bind(this);
        this.handleFirstNameChanged = this.handleFirstNameChanged.bind(this);
        this.handleLastNameChanged = this.handleLastNameChanged.bind(this);
        this.handleEmailChanged = this.handleEmailChanged.bind(this);
        this.handleEmailConfirmChanged = this.handleEmailConfirmChanged.bind(this);
        this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
        this.handlePasswordConfirmChanged = this.handlePasswordConfirmChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleTitleChanged(event) {
        this.setState({title: event.target.value})  
    }

    handleFirstNameChanged(event) {
        this.setState({firstName: event.target.value});
    }
    
    handleLastNameChanged(event) {
        this.setState({lastName: event.target.value})  
    }
    
    handleEmailChanged(event) {
        this.setState({email: event.target.value})  
    }
    
    handleEmailConfirmChanged(event) {
        this.setState({emailConfirm: event.target.value})  
    }

    handlePasswordChanged(event) {
        this.setState({password: event.target.value})  
    }
    
    handlePasswordConfirmChanged(event) {
        this.setState({passwordConfirm: event.target.value})  
    }
    
    onSubmit(event) {
        event.preventDefault();
        this.props.onNextClick(this.state);
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
        <div>
            <div className="row">
              <h1>Login details</h1>
              <p>Use 'Sign in with Facebook' for the quickest and easiest way to set up and log into your Sport Relief Giving Page.</p>
            </div>
            <div className="row">
            <div className="six columns">
              <label htmlFor="title">Title (optional)</label>
              <select className="form-select" id="title" name="title" onChange={this.handleTitleChanged} value={this.state.title}>
                  <option value="">Select...</option>
                    <option value="1">Mr</option>
                    <option value="2">Mrs</option>
                    <option value="3">Miss</option>
                    <option value="4">Ms</option>
                    <option value="5">Dr</option>
                    <option value="6">Mx</option>
              </select>
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>First Name</label>
                <input className="u-full-width" placeholder="First Name"
                                                type="text"
                                                onChange={this.handleFirstNameChanged} 
                                                value={this.state.firstName}
                                                autoFocus/>
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Last Name</label>
                <input className="u-full-width" placeholder="Last Name"
                                                type="text" 
                                                onChange={this.handleLastNameChanged} 
                                                value={this.state.lastName}/>
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Your email</label>
                <input className="u-full-width required" placeholder="test@mailbox.com"
                                                type="email"
                                                onChange={this.handleEmailChanged} 
                                                value={this.state.email}
                                                autoFocus/>
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Confirm email</label>
                <input className="u-full-width" placeholder="Confirm email"
                                                type="email"
                                                onChange={this.handleEmailConfirmChanged} 
                                                value={this.state.emailConfirm}/>
            </div>
            </div>
            <div className="row">
                <div className="six columns">
                <label>Password</label>
                <input className="u-full-width required" placeholder="Password"
                                                type="password"
                                                onChange={this.handlePasswordChanged} 
                                                value={this.state.password}
                                                autoFocus/>
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                <label>Confirm password</label>
                <input className="u-full-width" placeholder="Confirm Password"
                                                type="password"
                                                onChange={this.handlePasswordConfirmChanged} 
                                                value={this.state.passwordConfirm}/>
                </div>
            </div>
            <MultiStepButtons {...this.props} />
        </div>
        </form>
    )}
}
