import React, { Component, PropTypes } from 'react'
import MultiStepButtons from './../multiStep/multiStepButtons.jsx'

export default class CompleteGP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: (props.data && props.data.checked) ? props.data.checked : '',
        }
        this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleCheckedChanged(event) {
      this.setState({checked: event.target.checked})  
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
          </form>
      )
    }
}