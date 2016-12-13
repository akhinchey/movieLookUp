import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
