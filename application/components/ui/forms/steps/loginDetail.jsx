import React, { Component, PropTypes } from 'react'
import MultiStepButtons from './../../../utils/forms/multiStepButtons.jsx'
import Validation from 'react-validation';

const store = { title: '',
                firstName: '', 
                lastName: '', 
                email: '', 
                emailConfirm: '', 
                password: '123', 
                passwordConfirm: '' }

const LoginDetail = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleTitleChanged(event) {
      // store.title = event.target.value
      // this.setState(store)  
    },

    handleFirstNameChanged() {
      //   console.log(this.refs.firstName);
      //   console.log(this.refs.firstName.state);
      // // store.firstName = this.refs.firstName.state.lastValue;
      // this.setState(store)  
    },
    
    handleLastNameChanged(event) {
      // store.lastName = event.target.value
      // this.setState(store)  
    },
    
    handleEmailChanged(event) {
      // store.email = event.target.value
      // this.setState(store)  
    },
    
    handleEmailConfirmChanged(event) {
      // store.emailConfirm = event.target.value
      // this.setState(store)  
    },

    handlePasswordChanged(event) {
      // store.password = event.target.value
      // this.setState(store)  
    },
    
    handlePasswordConfirmChanged(event) {
      // store.passwordConfirm = event.target.value
      // this.setState(store)  
    },
    onSubmit(event) {
        event.preventDefault();
        this.state = {
            firstName: this.refs.firstName.state.value
        };
        this.props.onNextClick(this.refs.form, this.state);
    },

    render() {
        return (
        <Validation.Form onSubmit={this.onSubmit} ref='form'>
        <div>
            <div className="row">
              <h1>Login details</h1>
              <p>Use 'Sign in with Facebook' for the quickest and easiest way to set up and log into your Sport Relief Giving Page.</p>
            </div>
            <div className="row">
            <div className="six columns">
              <label htmlFor="title">Title (optional)</label>
              <select className="form-select" id="title" name="title">
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
                <Validation.Input className="u-full-width" placeholder="First Name"
                                                type="text"
                                                onChange={this.handleFirstNameChanged} 
                                                value={this.state.firstName}
                                                validations={[
                                                    {
                                                        rule: 'isAlpha',
                                                        errorMessage: 'not alpha at all !!!/-\\'
                                                    }
                                                ]}
                                                name="firstName"
                                                ref="firstName"
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
            <MultiStepButtons {...this.props}/>
        </div>
        </Validation.Form>
    )}
})

export { LoginDetail }