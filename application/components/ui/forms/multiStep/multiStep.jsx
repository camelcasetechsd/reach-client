import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'
import MultiStepHeader from './multiStepHeader.jsx'
import { connect } from 'react-redux'
import { updateMultiStepData } from './../../../utils/store/actionCreators'

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

  next(newData) {
    var oldData = this.props.multiStepData;
    this.props.updateData(oldData,newData);
    browserHistory.push(this.state.nextPath);
    this.setNavState(this.state.compState + 1);
  }

  previous() {
    browserHistory.goBack();
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1)
    }
  }

  render() {
    console.log(this.props.multiStepData);
    return (
      <div className="container">

        <MultiStepHeader currentStep={this.state.compState} steps={this.props.steps} handleOnClick={this.handleOnClick} />
        
        {React.createElement(this.props.steps[this.state.compState].component, 
          Object.assign(
              {}, 
              {
                data: this.props.multiStepData,
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (oldData, newData) => {dispatch(updateMultiStepData(oldData,newData))}
  }
}

const mapStateToProps = (state) => {
  return { 
    multiStepData: state.multiStep.data,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiStep)
