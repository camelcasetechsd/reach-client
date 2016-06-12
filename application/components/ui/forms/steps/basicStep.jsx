import React, { Component } from 'react'
import MultiStepButtons from './../multiStep/multiStepButtons.jsx'
import { connect } from 'react-redux'

export class BasicStep extends Component {

    onSubmit(fields) {
        this.props.onNextClick(fields);
    }

    componentWillMount() {
        // loading component at first or due to pressing previous
        this.state = this.props.data;
    }

    componentWillReceiveProps() {
        // here data props is rehydrated from local storage to populate form
        // auto rehydration re-render this component two times,
        // one when parent multi-step re-render where stored data is not seen here !
        // second time when re-rendering this component and then stored data appear
        // basically, based on observation the stored data need the component to be re-rendered two times to appear
        this.state = this.props.data;
    }

    renderButtons() {
        return(
                <MultiStepButtons {...this.props}/>
            );
    }
}

export const mapStateToProps = (state) => {
  return { 
    data: state.multiStep.data,
  };
}