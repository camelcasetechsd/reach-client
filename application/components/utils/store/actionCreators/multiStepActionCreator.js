export const UPDATE_MULTISTEP_DATA = 'UPDATE_MULTISTEP_DATA';

export function updateMultiStepData(oldData, newData) {
  var data = Object.assign({},oldData,newData);
  return {
    type: UPDATE_MULTISTEP_DATA,
    data
  };
}