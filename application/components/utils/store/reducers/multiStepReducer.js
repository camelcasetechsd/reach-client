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
      var data = action.data;
      return {
        ...state,
        data
      };
    
    default:
      return state;
  }
}