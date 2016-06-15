import React, { Component } from 'react';

export default class CustomInput extends Component {

  render() {
    return (
      <input 
            {...this.props}
            /* 
            adding autofocus would force browser to set focus on field 
            ,which would trigger it's validation after being filled from local storage
            ,removing error messages since fields are now filled with valid data
            */  
            autoFocus/>
    )
  }
}