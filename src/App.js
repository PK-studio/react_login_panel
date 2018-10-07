import React, { Component } from 'react';
import LoginPage from './components/loginpage/login.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="app">
        <LoginPage/>
      </div>
    );
  }
}

export default App;
