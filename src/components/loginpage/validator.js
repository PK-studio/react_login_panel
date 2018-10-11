import validator from 'validator';

const fakeUserData = {
  users: [
  {
    email:"pk@gmail.com", 
    password: "0",
    name: 'Patryk'
  },
  {
    email:"vb@gmail.com", 
    password: "0",
    name: 'Patryk 1'
  }  
]}

export default function validateLogin(data){
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

  let exist = email => {
    return fakeUserData.users.some(element => element.email === email)
  }

  let match = (email, password) => {
    return fakeUserData.users.find(element =>{
      if(element.email === email && element.password === password){
        return element;
      }
      else{
        errors.password ='* provided password is incorrect'
        return null
      }
    })
  }

  if(!validator.isEmail(data.identifier)){
    errors.identifier ='* provide correct email adress'
  }
  else if(!exist(data.identifier)){
    errors.identifier ='* provided email adress in not registered'
  }

  if(!validator.isAlphanumeric(data.password)){
    errors.password ='* provide correct password'
  }
  else{
    user = match(data.identifier,data.password)
  }

  return {
    errors,
    isValid: isEmpty(errors),
    user
  }
}