import isNotEmpty from './../../../utils/forms/isNotEmpty.js';
import validator from 'validator';
import {ResponseHelper} from './../../../utils/request/ResponseHelper.js';
import {RequestHelper} from './../../../utils/request/RequestHelper.js';
import 'whatwg-fetch';

//Server side validation
// method should be called 'asyncValidate' to work
export function asyncValidate(values, dispatch, props) {
  return new Promise((resolve, reject) => {
    fetch('apiRouter.php?type=validate', {
      method: 'POST',
      body: RequestHelper.serialize(Object.assign({},values, {currentStep: props.currentStep})),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      cache: "no-cache",
    })
    .then(ResponseHelper.checkStatus)
    .then(function(response) {
      response.json().then(function(data){
        if (data.length !== 0) {
          reject(data)
        } else {
          resolve()
        }
      }.bind(this));

    }.bind(this)).catch(function(error) {
      console.error(this.props.url, status, error.toString());
    }.bind(this));
  })
}

//Client side validation
// method should be called 'validate' to work
export function validate(values, props) { 
  const errors = {};
  const {currentStep} = props;
  if(currentStep === 0){
    if(isNotEmpty(values.title) === false) {
      errors.title = 'Enter a Title';
    }
    if(isNotEmpty(values.firstName) === false) {
      errors.firstName = 'Enter first name';
    }
    else if(validator.isAlpha(values.firstName)  === false){
      errors.firstName = 'Use letters only';
    }
    if(isNotEmpty(values.lastName) === false) {
      errors.lastName = 'Enter last name';
    }
    else if(validator.isAlpha(values.lastName)  === false){
      errors.lastName = 'Use letters only';
    } 
    if(isNotEmpty(values.email) === false) {
      errors.email = 'Enter email';
    }
    else if(validator.isEmail(values.email)  === false){
      errors.email = 'Use valid email';
    }
    else if(values.email !== values.emailConfirm){
      errors.emailConfirm = 'Emails don\'t match';
    }
    if(isNotEmpty(values.password) === false) {
      errors.password = 'Enter password';
    }
    else if(validator.matches(values.password, /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?!.*\s)(?=.*[A-Z])(?=.*[a-z]).*$/) === false){
      errors.password = 'Password should contain at least 8 characters as a mix of UPPERCASE, lowercase, numbers and special characters';
    }
    else if(values.password !== values.passwordConfirm){
      errors.passwordConfirm = 'Passwords don\'t match';
    }
  }
  else if(currentStep === 1){
    if(isNotEmpty(values.postcode) === false) {
      errors.postcode = 'Enter post code';
    }
    else if(validator.isAlphanumeric(values.postcode)  === false){
      errors.postcode = 'Use letters and numbers only';
    }
    if(isNotEmpty(values.contactNumber) === false) {
      errors.contactNumber = 'Enter contact number';
    }
    else if(validator.isNumeric(values.contactNumber)  === false){
      errors.contactNumber = 'Use valid contact number';
    }
  }
  else if(currentStep === 2){
    if(values.checked === false) {
      errors.checked = 'Confirm reading and agreeing!';
    }
  }
  return errors;
}