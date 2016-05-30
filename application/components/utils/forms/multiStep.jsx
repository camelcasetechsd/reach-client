import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

export default class MultiStep extends Component {

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

  getNavStylesState(indx, length) {
    let styles = [];
    for (let i=0; i<length; i++) {
      if(i < indx) {
        styles.push('done')
      }
      else if(i === indx) {
        styles.push('active')
      }
      else {
        styles.push('todo')
      }
    }
    return { current: indx, styles: styles }
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
      navState: this.getNavStylesState(currentStep, this.props.steps.length),
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

  handleOnClick(evt) {
    if (evt.target.value === (this.props.steps.length - 1) &&
      this.state.compState === (this.props.steps.length - 1)) {
      this.setNavState(this.props.steps.length)
    }
    else {
      this.setNavState(evt.target.value)
    }
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

  getClassName(className, i){
    return className + "--" + this.state.navState.styles[i];
  }

  renderSteps() {
    return this.props.steps.map((s, i)=> (
      <li className={this.getClassName("progress-bar", i)} key={i} value={i}>
        <a className="progress-bar__step-link" onClick={this.handleOnClick}>
          <span className="progress-bar__step">{i+1}/{this.props.steps.length} :</span>
          <span className="progress-bar__title">{this.props.steps[i].name}</span>
        </a>
      </li>
    ));
  }

  render() {
    return (
      <div className="container" onKeyDown={this.handleKeyDown}>        
        <div className="progress-bar">
          <div className="progress-bar__inner">
            <a className="progress-bar__back-link">back</a>
            <ul className={ 'progress-bar__steps-' + this.props.steps.length}>
              {this.renderSteps()}
            </ul>
          </div>
        </div>
        
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