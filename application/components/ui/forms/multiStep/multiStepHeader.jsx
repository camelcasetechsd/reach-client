import React, { Component } from 'react';

export default class MultiStepHeader extends Component {

  constructor(props) {
    super(props);
    this.getClassName = this.getClassName.bind(this);
  }

  getClassName(className, currentStep){
    let currentActiveStep = this.props.currentStep;
    let classNameExtension;
    if(currentStep < currentActiveStep) {
      classNameExtension = 'done';
    }
    else if(currentStep === currentActiveStep) {
      classNameExtension = 'active';
    }
    else {
      classNameExtension = 'todo';
    }
    return className + "--" + classNameExtension;
  }

  renderSteps() {
    return this.props.steps.map((s, i)=> (
      <li className={this.getClassName("progress-bar", i)} key={i} value={i} onClick={(i < this.props.currentStep) ? this.props.handleOnClick.bind(null,i) : ''}>
        <a className="progress-bar__step-link" >
          <span className="progress-bar__step">{i+1}/{this.props.steps.length} :</span>
          <span className="progress-bar__title">{this.props.steps[i].name}</span>
        </a>
      </li>
    ));
  }

  render() {
    return (
      <div className="progress-bar">
          <div className="progress-bar__inner">
            <a className="progress-bar__back-link">back</a>
            <ul className={ 'progress-bar__steps-' + this.props.steps.length}>
              {this.renderSteps()}
            </ul>
          </div>
        </div>
    );
  }
}