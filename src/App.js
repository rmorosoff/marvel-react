import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Character from './containers/Character'

class App extends Component {
  render() {
    return (
      <div>
        Rudy was here
        <Character />
      </div>
    );
  }
}

export default App;
