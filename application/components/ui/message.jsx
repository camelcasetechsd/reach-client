import React, { Component } from 'react';

export class Message extends Component {
  render() {
    return (
      <h3>Message {this.props.params.id}</h3>
    )
  }
}