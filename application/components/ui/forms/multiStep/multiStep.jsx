import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'
import MultiStepHeader from './multiStepHeader.jsx'
import { reduxForm } from 'redux-form'
import { getMultiStepData, updateMultiStepData } from './../../../utils/store/actionCreators'
import { validate } from './multiStepValidate.js'

class MultiStep extends Component {

  static defaultProps = {
    showNavigation: true
  };  

  static formConfig = {
    form: "MultiStepForm",
    fields: [
      'title',
      'firstName',
      'lastName',
      'email',
      'emailConfirm',
      'password', 
      'passwordConfirm',
      'contactNumber',
      'postcode',
      'checked'
     ],
     validate
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

  handleOnClick(newStep) {
    this.setNavState(newStep)
  }

  next(data) {
    // persist submitted data in redux state
    this.props.updateData(data);
    // change url to point to next step
    browserHistory.push(this.state.nextPath);
    // change step displayed to match url in address bar
    this.setNavState(this.state.compState + 1);
  }

  previous() {
    // go to previous url
    browserHistory.goBack();
    // change step displayed to match url in address bar
    this.setNavState(this.state.compState - 1)
  }

  componentWillMount() {
    console.log("multi step will mount");
  }

  componentWillReceiveProps() {
    console.log("multi step will receive props");
  }

  componentWillUpdate() {
    console.log("multi step will update");
  }

  render() {
    const {multiStepData, showNavigation, fields, handleSubmit, submitting} = this.props;
    return (
      <div className="container">
        <MultiStepHeader currentStep={this.state.compState} steps={this.props.steps} handleOnClick={this.handleOnClick} />
        
        {React.createElement(this.props.steps[this.state.compState].component, 
            {
              data: multiStepData,
              showNavigation: showNavigation,
              showPreviousBtn: this.state.showPreviousBtn,
              showNextBtn: this.state.showNextBtn,
              previousBtnValue: this.state.previousBtnValue,
              nextBtnValue: this.state.nextBtnValue,
              onPreviousClick: this.previous,
              onNextClick: this.next,
              onSubmit: handleSubmit,
              fields: fields,
              submitting: submitting
            }
          )}

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (data) => {dispatch(updateMultiStepData(data))},
    getData: () => {dispatch(getMultiStepData())}
  }
}

const mapStateToProps = (state) => {
  return { 
    multiStepData: state.multiStep.data,
  };
}

export default reduxForm(MultiStep.formConfig, mapStateToProps, mapDispatchToProps)(MultiStep)
