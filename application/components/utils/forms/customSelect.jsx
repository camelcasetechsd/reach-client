import React, { Component } from 'react';

export default class CustomSelect extends Component {

  render() {
    const { children, ...props } = this.props

    return (
      <select
        {...props}
        autoFocus
      >
      {children}
      </select>
    )
  }
}