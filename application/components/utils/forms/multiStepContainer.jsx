import React from 'react';

import Multistep from './multiStep.jsx'
import { steps } from './../../ui/forms/registration.jsx'

export class MultiStepContainer extends React.Component {
  render() {
    return (
        <Multistep currentStep={this.props.route.currentStep} steps={steps}/>
    )
  }
}