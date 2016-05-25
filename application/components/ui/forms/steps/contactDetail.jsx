import React, { Component, PropTypes } from 'react'

const store = { postcode: '', contactNumber: '' }

const ContactDetail = React.createClass ({
    getInitialState() {
        return store
    },
    
    handlePostcodeChanged(event) {
      store.postcode = event.target.value
      this.setState(store)  
    },
    
    handleContactNumberChanged(event) {
      store.passwordConfirm = event.target.value
      this.setState(store)  
    },

    render() {
        return (
            <div>
            <div className="row">
                <div className="six columns">
                <label>Postcode</label>
                <input className="u-full-width required" placeholder="AB12 3CD"
                                                type="text"
                                                onChange={this.handlePostcodeChanged} 
                                                value={this.state.postcode}
                                                autoFocus/>
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                <label>Contact number</label>
                <input className="u-full-width" placeholder=""
                                                type="text"
                                                onChange={this.handleContactNumberChanged} 
                                                value={this.state.contactNumber}/>
                </div>
            </div>
            </div>
    )}
})

export { ContactDetail }