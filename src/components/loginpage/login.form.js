import React, { Component } from 'react';
import validateLogin from './validation'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.form.css';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      user: null
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(){
    let {errors, isValid, userData} = validateLogin(this.state);
    if (isValid){
      console.log('isValid... user name is ' + userData.name)
      this.setState({user: userData})
    }else{
      this.setState({errors: errors})
    }
  }

  render() {
    const {errors, password, identifier } = this.state
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
                name='identifier'
                type="email"
                value = {identifier} 
                placeholder="email address"
                onChange = {this.onChange}
              />
              <p className="warning">{errors.identifier}</p>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label 
              sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                name='password' 
                type="password" 
                value = {password}
                placeholder="password"
                onChange = {this.onChange}
              />
              <p className="warning">{errors.password}</p>
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

export default LoginForm;