import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import Result from './Result';
import './App.css';

class App extends Component {

  constructor(){
    super();
    debugger;
    this.state = { movieList:[] }
  }

  updateMovies(movies) {
    this.setState({
      movieList: movies
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Search updateMovies={this.updateMovies.bind(this)} />
        <Results movieList={this.state.movieList} />
      </div>
    );
  }
}

export default App;
