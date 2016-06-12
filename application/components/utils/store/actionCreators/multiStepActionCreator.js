export const UPDATE_MULTISTEP_DATA = 'UPDATE_MULTISTEP_DATA';
export const GET_MULTISTEP_DATA = 'GET_MULTISTEP_DATA';

export function updateMultiStepData(data) {
  return {
    type: UPDATE_MULTISTEP_DATA,
    data
  };
}

export function getMultiStepData(data) {
  return {
    type: GET_MULTISTEP_DATA
  };
}