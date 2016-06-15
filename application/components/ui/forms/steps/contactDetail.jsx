import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, BasicStep } from './basicStep.jsx'
import CustomInput from './../../../utils/forms/customInput.jsx'

class ContactDetail extends BasicStep {

    constructor(props) {
        super(props);
        this.basicState = {
            postcode: (props.data && props.data.postcode) ? props.data.postcode : '',
            contactNumber: (props.data && props.data.contactNumber) ? props.data.contactNumber : '',
        }
        this.state = this.basicState;
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePostcodeChanged = this.handlePostcodeChanged.bind(this);
        this.handleContactNumberChanged = this.handleContactNumberChanged.bind(this);
    }

    handlePostcodeChanged(event) {
        this.setState({postcode: event.target.value})  
    }
    
    handleContactNumberChanged(event) {
        this.setState({contactNumber: event.target.value})  
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit(this.onSubmit)}>
                <div>
                    <div className="row">
                        <div className="six columns">
                        <label>Postcode</label>
                        <CustomInput className="u-full-width required" placeholder="AB12 3CD"
                                                        type="text"
                                                        {...this.props.fields.postcode}
                                                        onChange={this.handlePostcodeChanged}
                                                        value={this.state.postcode}
                                                        />
                        </div>
                        <div className='help-block'>
                            {this.props.fields.postcode.touched ? this.props.fields.postcode.error : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="six columns">
                        <label>Contact number</label>
                        <CustomInput className="u-full-width" placeholder=""
                                                        type="text"
                                                        {...this.props.fields.contactNumber}
                                                        onChange={this.handleContactNumberChanged}
                                                        value={this.state.contactNumber}/>
                        </div>
                        <div className='help-block'>
                            {this.props.fields.contactNumber.touched ? this.props.fields.contactNumber.error : ''}
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
            </form>
        )
    }
}

export default connect(mapStateToProps)(ContactDetail)