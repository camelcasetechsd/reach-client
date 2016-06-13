import React, { Component } from 'react';

export default class CustomSelect extends Component {

  render() {
    const { children, value, onBlur, ...props } = this.props

    return (
      <select
        {...props}
        value={value}
        onBlur={() => onBlur(value)}
      >
      {children}
      </select>
    )
  }
}