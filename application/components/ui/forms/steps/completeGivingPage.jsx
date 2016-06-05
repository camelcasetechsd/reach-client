import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, BasicStep } from './basicStep.jsx'

class CompleteGP extends BasicStep {

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
                {this.renderButtons()}
            </div>
          </form>
      )
    }
}

export default connect(mapStateToProps)(CompleteGP)