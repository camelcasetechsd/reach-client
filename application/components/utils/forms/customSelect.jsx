import React, { Component } from 'react';

export default class CustomSelect extends Component {
  render() {
    const { children, value, onBlur, ...props } = this.props

    return (
      <select
        {...props}
        onBlur={() => onBlur(value)}
      >
      {children}
      </select>
    )
  }
}