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

function isEmpty(obj){
  let val = true;
  for (let key in obj){
    if(obj.hasOwnProperty(key)){
      val = false;
    }
  }
  return val;
}



function validateRegistration(data){
  const errorList = [
    "* provide correct email adress",
    '* provide password',
    "* passwords do not match"
  ]
  let errors = {};

  let checkEmail = () => {
    if(!validator.isEmail(data.email)){
      errors.email = errorList[0]
    }
  }

  let checkPasswords = (...passwords) => {
    console.log(passwords[0], passwords[1])
    passwords.forEach((pass, index) => {
      if(pass ===''){
        errors['password'+index] = errorList[1]
      }else if(passwords[0] != passwords[1]){
        errors['password1'] = errorList[2]
      }
    })
  }

  checkEmail()
  checkPasswords(data.password0, data.password1)

  return {
    errors,
    isValid: isEmpty(errors)
  }
}



function validateLogin(data){
  let errors = {};
  let user = {};

  let existInDataBase = email => {
    return fakeUserData.users.some(element => element.email === email)
  }

  let matchWithDataBase = (email, password) => {
    return fakeUserData.users.find(element =>{
      if(element.email === email && 
        element.password === password){
        return element;
      }
      else{
        errors.password =`* provided password and email doesn't match`
        return null
      }
    })
  }

  let checkEmail = () => {
    if(!validator.isEmail(data.identifier)){
      errors.identifier ='* provide correct email adress'
    }
    else if(!existInDataBase(data.identifier)){
      errors.identifier ='* provided email adress in not registered'
    }
  }

  let checkPassword = () => {
    if(data.password ===''){
      errors.password ='* provide password'
    }
    else if(!validator.isAlphanumeric(data.password)){
      errors.password ='* provide correct password'
    }
  }

  let findUser = () => {
    if(isEmpty(errors)){
      user = matchWithDataBase(data.identifier,data.password)
    }
  }

  checkEmail()
  checkPassword()
  findUser()

  return {
    errors,
    isValid: isEmpty(errors),
    userData: user
  }
}

export {validateRegistration, validateLogin}