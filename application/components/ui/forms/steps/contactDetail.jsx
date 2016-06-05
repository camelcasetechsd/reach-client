import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, BasicStep } from './basicStep.jsx'

class ContactDetail extends BasicStep {

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
                    {this.renderButtons()}
                </div>
            </form>
        )
    }
}

export default connect(mapStateToProps)(ContactDetail)