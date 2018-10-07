import React, { Component } from 'react';
import { Form, Col } from 'reactstrap';
import LoginForm from "./login.form";
import "./login.page.css";

class LoginPage extends Component {
  constructor(){
    super();
    this.state = {
      activeNow: 1,
      colorTitle1: 'black',
      colorTitle2: 'grey'
    };
    this.activate = this.activate.bind(this);
  }

  activate(activElem){
    this.setState({
      activeNow: activElem,
      colorTitle1: activElem ==1 ? 'black' : 'grey',
      colorTitle2: activElem ==2 ? 'black' : 'grey'
    })
  }

  renderForm(){
    if(this.state.activeNow == 1){
      return <LoginForm/>
    }
    else{
      return <h4>Here will be registration form</h4>
    }
  }

  render() {
    return (
      <div>
        <Form inline className="formBar">
          <Col onClick={() => this.activate(1)} className="text-center" sm={6}>
            <h2 style={{color: this.state.colorTitle1}}>Login </h2>
          </Col>
          <Col onClick={() => this.activate(2)} className="text-center" sm={6}>
            <h2 style={{color: this.state.colorTitle2}}>Register </h2>
          </Col>
        </Form>
        {this.renderForm()}
      </div>
    );
  }
}

export default LoginPage;