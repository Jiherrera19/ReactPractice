import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked() {
    this.setState(state => {
      return {
        loggedIn: !state.loggedIn
      };
    });
  }
  render() {
    return (
      <div>
        <h1>You are: {this.state.loggedIn ? "Logged In" : "Logged Out"}</h1>
        <Button onClick={this.buttonClicked}>{this.state.loggedIn ? "Log Out" : "Log In"}</Button>
      </div>
    );
  }
}

export default App;
