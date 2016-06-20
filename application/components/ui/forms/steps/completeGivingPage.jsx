import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, BasicStep } from './basicStep.jsx'
import CustomInput from './../../../utils/forms/customInput.jsx'

class CompleteGP extends BasicStep {

    constructor(props) {
        super(props);
        this.state = {
            checked: (props.data && props.data.checked) ? props.data.checked : '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
    }

    validate(values) { 
        const errors = {};

        if(values.checked === false) {
            errors.checked = 'Confirm reading and agreeing!';
        }
        return errors;
    }

    handleCheckedChanged(event) {
      this.setState({checked: event.target.checked})  
    }

    render() {
        return (
          <form onSubmit={this.props.onSubmit(this.onSubmit)}>
            <div>
                <div className="row">
                    <div className="ten columns terms">
                        <h1>Terms and conditions</h1>
                        <label><CustomInput type="checkbox" 
                                    {...this.props.fields.checked}
                                    onChange={this.handleCheckedChanged}
                                    checked={this.state.checked} 
                                    />
                        <span> By submitting your details, you confirm that you've read, understood and agree to the <a href="#">terms of use</a>. </span> 
                        </label>
                    </div>
                    <div className='help-block'>
                        {this.props.fields.checked.touched ? this.props.fields.checked.error : ''}
                    </div>
                </div>
                {this.renderButtons()}
            </div>
          </form>
      )
    }
}

export default connect(mapStateToProps)(CompleteGP)