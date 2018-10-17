import validator from 'validator';

export default function RegisstrationValidation(data){
  let errors = {};
  let user = {};

  let isEmpty = (obj) => {
    let val = true;
    for (let key in obj){
      if(obj.hasOwnProperty(key)){
        val = false;
      }
    }
    return val;
  }

  let checkEmail = () => {
    if(!validator.isEmail(data.email)){
      errors.email ='* provide correct email adress'
    }
  }

  let checkPasswords = (...passwords) => {
    if(passwords[0] == passwords[1]){
      errors.password ='* passwords do not match'
    }
    passwords.forEach((pass, index) => {
      if(pass ===''){
        errors.password[index] ='* provide password'
      }
    })
  }

  checkEmail()
  checkPasswords(data.password1, data.password2)

  return {
    errors,
    isValid: isEmpty(errors),
    newUserData: user
  }
}