import React, { Component } from 'react';

export default class MultiStepButtons extends Component {

  constructor(props) {
    super(props);
    this.previous = this.previous.bind(this);
  }

  previous() {
    this.props.onPreviousClick()
  }

  render() {
    
    var hidden = {
      display: 'none'
    }; 
    var previousButton = ''; 
    var nextButton = ''; 
    if(this.props.showPreviousBtn){
      previousButton = <button
                  className="multistep__btn--prev"
                  type="button"
                  onClick={this.previous} 
                  >
                  {this.props.previousBtnValue}
          </button>
    }
    if(this.props.showNextBtn){
      nextButton = <button
                  className="multistep__btn--next"
                  disabled={this.props.submitting}
                  >
                  {this.props.nextBtnValue}
          </button>
    }
    return (
      <div className="row" style={this.props.showNavigation ? {} : hidden}>
        {previousButton}
        {nextButton}
      </div>
    );
  }
}