import React, { Component } from 'react';
import { render } from 'react-dom';
import template from 'react-templates!./footer.rt';

require('./footer.scss');

export class Footer extends Component {
  render() {
      return template()
  }
}

render((
  React.createElement(Footer)
), document.getElementById('footer'));