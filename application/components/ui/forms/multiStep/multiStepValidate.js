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
// each step hold it's validation rules
// method should be called 'validate' to work
export function validate(values, props) { 
  const {currentStep, steps} = props;
  return steps[currentStep].component.WrappedComponent.prototype.validate(values);
}