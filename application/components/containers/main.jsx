import React, { Component } from 'react';
import { render } from 'react-dom';
import template from 'react-templates!./main.rt';

require('./main.scss');
require('../../../public/assets/sass/__all.scss');

export class Main extends Component {
  render() {
    return template()
  }
}

