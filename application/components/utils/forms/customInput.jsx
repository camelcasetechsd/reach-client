import React, { Component } from 'react';

export default class CustomInput extends Component {

  render() {
    return (
      <input 
              {...this.props}
              autoFocus/>
    )
  }
}