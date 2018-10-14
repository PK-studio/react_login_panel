import React, { Component } from 'react';
import { Form, Col } from 'reactstrap';
import LoginForm from './login.form';
import RegistrationForm from './registration.form'
import "./login.page.css";

class LoginPage extends Component {
  constructor(){
    super();
    this.state = {
      activeNow: 1
    };
    this.activate = this.activate.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  activate(activElem){
    this.setState({activeNow: activElem})
  }

  isActive(domElNum){
    return 'colForm ' + ((this.state.activeNow === domElNum) ? 'active' : '');
  }

  renderForm(){
    switch (this.state.activeNow){
      case 1:
        return <LoginForm/>
      case 2:
        return <RegistrationForm/>
      default:
        return
    }
  }

  render() {
    return (
      <div>
        <Form inline className="formBar">
          <Col onClick={() => this.activate(1)} className={this.isActive(1)} sm={6}>
            <h2>Login </h2>
          </Col>
          <Col onClick={() => this.activate(2)} className={this.isActive(2)} sm={6}>
            <h2>Register </h2>
          </Col>
        </Form>
        {this.renderForm()}
      </div>
    );
  }
}

export default LoginPage;