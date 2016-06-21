export const UPDATE_MULTISTEP_DATA = 'UPDATE_MULTISTEP_DATA';
export const GET_MULTISTEP_DATA = 'GET_MULTISTEP_DATA';
import {ResponseHelper} from './../../../utils/request/ResponseHelper.js';
import {RequestHelper} from './../../../utils/request/RequestHelper.js';
import 'whatwg-fetch';

export function updateMultiStepDataUI(data) {
  return {
    type: UPDATE_MULTISTEP_DATA,
    data
  };
}
// the async action creator uses the name of the old action creator, so 
// it will get called by the existing code when a form is submitted
export function updateMultiStepData(data) {
  // we return a thunk function, not an action object!
  // the thunk function needs to dispatch some actions to change 
  // the Store status, so it receives the "dispatch" function as its
  // >first parameter

  return function(dispatch) {
    // here starts the code that actually gets executed when the 
    //  updateMultiStepData action creator is dispatched

    // now that the Store has been notified of the new todo item, we 
    // should also notify our server - we'll use here ES6 fetch 
    // function to post the data
    fetch('apiRouter.php?type=echo', {
      method: 'POST',
      body: RequestHelper.serialize(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      cache: "no-cache",
    })
    .then(ResponseHelper.checkStatus)
    .then(function(response) {
      response.json().then(function(receivedData){
        // persist submitted data in redux state

        // first of all, let's do the optimistic UI update - we need to 
	    // dispatch the old synchronous action object, using the renamed 
	    // action creator
	    dispatch(updateMultiStepDataUI(receivedData));
      }.bind(this));

    }.bind(this)).catch(function(error) {
      console.error(this.props.url, status, error.toString());
    }.bind(this));
  // what you return here gets returned by the dispatch function that 
  // used this action creator
  return null; 
  }
}

export function getMultiStepData(data) {
  return {
    type: GET_MULTISTEP_DATA
  };
}