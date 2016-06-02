import {
  UPDATE_MULTISTEP_DATA
} from '../actionCreators/multiStepActionCreator.js';


  const INITIAL_STATE = { 
    data: {}, 
  };

export function multiStep(state = INITIAL_STATE, action) {
  console.log('multiStep reducer called with action ', action.type);

  switch(action.type) {

    case UPDATE_MULTISTEP_DATA:
      // merge data with other steps' ones
      var data = Object.assign({},state.data, action.data);
      // merge merged data into state without editing state itself
      return Object.assign({},state, {data: data});
    
    default:
      return state;
  }
}