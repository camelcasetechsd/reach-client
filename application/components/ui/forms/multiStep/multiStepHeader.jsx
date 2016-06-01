import React, { Component } from 'react';

export default class MultiStepHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {navState: this.getNavStylesState(props.currentStep, props.steps.length)};
    this.getClassName = this.getClassName.bind(this);
  }

  getNavStylesState(currentStep, length) {
    let styles = [];
    for (let i=0; i<length; i++) {
      if(i < currentStep) {
        styles.push('done')
      }
      else if(i === currentStep) {
        styles.push('active')
      }
      else {
        styles.push('todo')
      }
    }
    return { current: currentStep, styles: styles }
  }

  getClassName(className, i){
    return className + "--" + this.state.navState.styles[i];
  }

  renderSteps() {
    return this.props.steps.map((s, i)=> (
      <li className={this.getClassName("progress-bar", i)} key={i} value={i} onClick={this.props.handleOnClick.bind(null,i)}>
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