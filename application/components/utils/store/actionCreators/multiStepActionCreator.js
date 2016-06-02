export const UPDATE_MULTISTEP_DATA = 'UPDATE_MULTISTEP_DATA';

export function updateMultiStepData(data) {
  return {
    type: UPDATE_MULTISTEP_DATA,
    data
  };
}