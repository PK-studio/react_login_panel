import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import RegistrationValidation from './registration.validation';

class RegistrationForm extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password0: '',
      password1: '',
      errors: {},
      newUser: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(){
    let {errors, isValid, newUserData} = RegistrationValidation(this.state)
    if(isValid){
      this.setState({newUser: newUserData})
    }else{
      console.log(errors)
      this.setState({errors: errors})
    }
  }

  render() {
    const {errors, password0, password1, email } = this.state
    return ( 
      <div>
      <Form>

        <FormGroup row>
          <Label 
            sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input 
              name='email'
              type="email"
              value = {email} 
              placeholder="email address"
              onChange = {this.onChange}
            />
            <p className="warning">{errors.email}</p>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label 
            sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              name='password0' 
              type="password" 
              value = {password0}
              placeholder="password"
              onChange = {this.onChange}
            />
            <p className="warning">{errors.password[0]}</p>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label 
            sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              name='password1' 
              type="password" 
              value = {password1}
              placeholder="repeat password"
              onChange = {this.onChange}
            />
            <p className="warning">{errors.password[1]}</p>
          </Col>
        </FormGroup>
        
        <div className='submitBtn'>
          <Button color="success" onClick={this.onSubmit}>Login</Button>
        </div>

      </Form>
    </div>
     );
  }
}
 
export default RegistrationForm;