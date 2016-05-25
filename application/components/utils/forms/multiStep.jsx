import React, { Component, PropTypes } from 'react';

export default class MultiStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreviousBtn: false,
      showNextBtn: true,
      compState: 0,
      navState: this.getNavStates(0, this.props.steps.length)
    };
    this.hidden = {
      display: 'none'
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  getNavStates(indx, length) {
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

  checkNavState(currentStep){
    if(currentStep > 0 && currentStep !== this.props.steps.length - 1){
      this.setState({
        showPreviousBtn: true,
        showNextBtn: true
      })
    }
    else if(currentStep === 0) {
      this.setState({
        showPreviousBtn: false,
        showNextBtn: true
      })
    }
    else {
      this.setState({
        showPreviousBtn: true,
        showNextBtn: false
      })
    }
  }

  setNavState(next) {
    this.setState({navState: this.getNavStates(next, this.props.steps.length)})
    if (next < this.props.steps.length) {
      this.setState({compState: next})
    }
    this.checkNavState(next);
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

  next() {
    this.setNavState(this.state.compState + 1)
  }

  previous() {
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
        {this.props.steps[this.state.compState].component}
        <div className="row" style={this.props.showNavigation ? {} : this.hidden}>
          <button style={this.state.showPreviousBtn ? {} : this.hidden}
                  className="multistep__btn--prev"
                  onClick={this.previous}>Previous</button>

          <button style={this.state.showNextBtn ? {} : this.hidden}
                  className="multistep__btn--next"
                  onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};