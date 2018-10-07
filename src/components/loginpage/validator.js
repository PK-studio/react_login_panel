import validator from 'validator';

export default function validateLogin(data){
  let errors = {};
  let isValid = false;

  if(!validator.isEmail(data.identifier)){
    errors.identifier ='* provide correct email adress'
  }

  if(!validator.isAlphanumeric(data.password)){
    errors.password ='* provide correct password'
  }

  let isEmpty = (obj) => {
    let val = true;
    for (let key in obj){
      if(obj.hasOwnProperty(key)){
        val = false;
      }
    }
    return val;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}