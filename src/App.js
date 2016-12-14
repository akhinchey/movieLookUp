import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
