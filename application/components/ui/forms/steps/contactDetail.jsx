import React, { Component, PropTypes } from 'react'
import MultiStepButtons from './../multiStep/multiStepButtons.jsx'

export default class ContactDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postcode: (props.data && props.data.postcode) ? props.data.postcode : '',
            contactNumber: (props.data && props.data.contactNumber) ? props.data.contactNumber : '',
        }
        this.handlePostcodeChanged = this.handlePostcodeChanged.bind(this);
        this.handleContactNumberChanged = this.handleContactNumberChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handlePostcodeChanged(event) {
        this.setState({postcode: event.target.value})  
    }
    
    handleContactNumberChanged(event) {
        this.setState({contactNumber: event.target.value})  
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
                    <MultiStepButtons {...this.props} />
                </div>
            </form>
        )
    }
}
