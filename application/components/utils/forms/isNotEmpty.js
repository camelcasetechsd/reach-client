import validator from 'validator';

export default function(value) { 
  var isNotEmpty = true;
  if(typeof value == "undefined" || validator.isNull(validator.trim(value)) === true) {
      isNotEmpty = false;
  }
  return isNotEmpty;
}