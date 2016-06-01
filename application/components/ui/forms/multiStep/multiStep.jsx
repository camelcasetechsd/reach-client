import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'
import MultiStepHeader from './multiStepHeader.jsx'
import { connect } from 'react-redux'
import * as actionCreators from './../../../utils/store/actionCreators'

class MultiStep extends Component {

  static defaultProps = {
    showNavigation: true
  };

  constructor(props) {
    super(props);
    this.btnText = {
      previous: 'Previous',
      next: 'Next',
      complete: 'Complete'
    };
    this.state = this.getNavState(props.currentStep);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  getNavButtonsState(currentStep){
    var showPreviousBtn = false;
    var showNextBtn = false;
    if(currentStep > 0 ){
      showPreviousBtn = true;
      showNextBtn = true;
    }
    else if(currentStep === 0) {
      showNextBtn = true;
    }
    else {
      showPreviousBtn = true;
    }
    return {
        showPreviousBtn: showPreviousBtn,
        showNextBtn: showNextBtn,
        previousBtnValue: this.btnText.previous,
        nextBtnValue: (currentStep === this.props.steps.length - 1) ? this.btnText.complete : this.btnText.next
      }
  }

  getNavPathsState(currentStep){
    var nextPath = '';
    var previousPath = '';
    if(currentStep > 0){
      previousPath = this.props.steps[currentStep - 1].url
    }
    if(currentStep < (this.props.steps.length - 1)){
      nextPath = this.props.steps[currentStep + 1].url
    }
    return {
        previousPath: previousPath,
        nextPath: nextPath
      }
  }

  getNavState(currentStep) {
    var navState = {
      compState: currentStep,
    };
    var navPathsState = this.getNavPathsState(currentStep);
    navState.previousPath = navPathsState.previousPath
    navState.nextPath = navPathsState.nextPath
    var navButtonsState = this.getNavButtonsState(currentStep);
    navState.showPreviousBtn = navButtonsState.showPreviousBtn
    navState.showNextBtn = navButtonsState.showNextBtn
    navState.previousBtnValue = navButtonsState.previousBtnValue
    navState.nextBtnValue = navButtonsState.nextBtnValue
    return navState;
  }

  setNavState(currentStep) {
    this.setState(this.getNavState(currentStep));
  }

  handleKeyDown(evt) {
    if (evt.which === 13) {
      this.next()
    }
  }

  handleOnClick(newStep) {
    this.props.dispatch(actionCreators.getTime(500))
    this.setNavState(newStep)
  }

  next(form, data) {
    form.forceValidate(true);
    var isValid = form.isValidForm();
    if(isValid === true){

      console.log(form, data);
      // browserHistory.push(this.state.nextPath);
      // this.setNavState(this.state.compState + 1);
    }
  }

  previous() {
    browserHistory.goBack();
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1)
    }
  }

  render() {
    
    console.log(this.props.time);

    return (
      <div className="container" onKeyDown={this.handleKeyDown}>

        <MultiStepHeader currentStep={this.state.compState} steps={this.props.steps} handleOnClick={this.handleOnClick} />
        
        {React.createElement(this.props.steps[this.state.compState].component, 
          Object.assign(
              {}, 
              {
                showNavigation: this.props.showNavigation,
                showPreviousBtn: this.state.showPreviousBtn,
                showNextBtn: this.state.showNextBtn,
                previousBtnValue: this.state.previousBtnValue,
                nextBtnValue: this.state.nextBtnValue,
                onPreviousClick: this.previous,
                onNextClick: this.next
              }
            )
          )}
        
        
      </div>
    );
  }
}


// This is our select function that will extract from the state the data slice we want to expose
// through props to our component.
const mapStateToProps = (state/*, props*/) => {
  return {
    frozen: state._time.frozen,
    time: state._time.time,
    // It is very bad practice to provide the full state like that (reduxState: state) and it is only done here
    // for you to see its stringified version in our page. More about that here:
    // https://github.com/rackt/react-redux/blob/v4.0.0/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
    reduxState: state,
  }
}

const ConnectedMultiStep = connect(mapStateToProps)(MultiStep)
export default ConnectedMultiStep