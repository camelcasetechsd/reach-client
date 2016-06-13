import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, BasicStep } from './basicStep.jsx'
import CustomSelect from './../../../utils/forms/customSelect.jsx'

class LoginDetail extends BasicStep {

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
        this.onSubmit = this.onSubmit.bind(this);
    }


    render() {
        return (
        <form onSubmit={this.props.onSubmit(this.onSubmit)}>
        <div>
            <div className="row">
              <h1>Login details</h1>
              <p>Use 'Sign in with Facebook' for the quickest and easiest way to set up and log into your Sport Relief Giving Page.</p>
            </div>
            <div className="row">
            <div className="six columns">
              <label htmlFor="title">Title (optional)</label>
              <CustomSelect {...this.props.fields.title} value={this.state.title} className="form-select" id="title" name="title" autoFocus >
                <option value="">Select...</option>
                <option value="1">Mr</option>
                <option value="2">Mrs</option>
                <option value="3">Miss</option>
                <option value="4">Ms</option>
                <option value="5">Dr</option>
                <option value="6">Mx</option>
              </CustomSelect>
            </div>
            <div className='help-block'>
                { this.props.fields.title.touched ? this.props.fields.title.error : '' }
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>First Name</label>
                <input className="u-full-width" placeholder="First Name"
                                                type="text"
                                                {...this.props.fields.firstName}
                                                value={this.state.firstName}
                                                autoFocus/>
            </div>
            <div className='help-block'>
                {this.props.fields.firstName.touched ? this.props.fields.firstName.error : ''}
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Last Name</label>
                <input className="u-full-width" placeholder="Last Name"
                                                type="text" 
                                                {...this.props.fields.lastName}
                                                value={this.state.lastName}
                                                autoFocus/>
            </div>
            <div className='help-block'>
                {this.props.fields.lastName.touched ? this.props.fields.lastName.error : ''}
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Your email</label>
                <input className="u-full-width required" placeholder="test@mailbox.com"
                                                type="email"
                                                {...this.props.fields.email}
                                                value={this.state.email}
                                                autoFocus/>
            </div>
            <div className='help-block'>
                {this.props.fields.email.touched ? this.props.fields.email.error : ''}
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Confirm email</label>
                <input className="u-full-width" placeholder="Confirm email"
                                                type="email"
                                                {...this.props.fields.emailConfirm}
                                                value={this.state.emailConfirm}
                                                />
            </div>
            <div className='help-block'>
                {this.props.fields.emailConfirm.touched ? this.props.fields.emailConfirm.error : ''}
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Password</label>
                <input className="u-full-width required" placeholder="Password"
                                                type="password"
                                                {...this.props.fields.password}
                                                value={this.state.password}
                                                autoFocus/>
            </div>
            <div className='help-block'>
                {this.props.fields.password.touched ? this.props.fields.password.error : ''}
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Confirm password</label>
                <input className="u-full-width" placeholder="Confirm Password"
                                                type="password"
                                                {...this.props.fields.passwordConfirm} 
                                                value={this.state.passwordConfirm}
                                                />
            </div>
            <div className='help-block'>
                {this.props.fields.passwordConfirm.touched ? this.props.fields.passwordConfirm.error : ''}
            </div>
            </div>
            {this.renderButtons()}
        </div>
        </form>
    )}
}

export default connect(mapStateToProps)(LoginDetail)