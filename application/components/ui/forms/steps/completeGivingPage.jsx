import React, { Component, PropTypes } from 'react'
import MultiStepButtons from './../../../utils/forms/multiStepButtons.jsx'

const store = { checked: false }
 
const CompleteGP = React.createClass ({
    getInitialState() {
        return store
    },
    
    handleCheckedChanged(event) {
      store.checked = event.target.checked
      this.setState(store)  
    },
    
    render() {
        return (
        <div>
            <div className="row">
                <div className="ten columns terms">
                    <h1>Terms and conditions</h1>
                    <label><input type="checkbox" 
                                //   defaultChecked={this.state.checked} 
                                  checked={this.state.checked} 
                                  onChange={this.handleCheckedChanged} 
                                  autoFocus/>
                    <span> By submitting your details, you confirm that you've read, understood and agree to the <a href="#">terms of use</a>. </span> 
                    </label>
                </div>
            </div>
            <MultiStepButtons {...this.props}/>
        </div>
  )}
})

export { CompleteGP }