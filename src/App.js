import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import Result from './Result';
import Main from './Main';
import MovieInfo from './MovieInfo'
import './App.css';

class App extends Component {

  constructor(){
    super();
    // debugger;
    this.state = {
      movieList: [],
      renderComponent: "Main"
    }
  }

  updateMovies(movies) {
    this.setState({
      movieList: movies
    });
  }

  navHandler(component){
    this.setState({
      renderComponent: component
    });
  }

  render() {
    let comp = this.state.renderComponent;

    if(comp === 'Main'){
      return (<Main updateMovies={this.updateMovies.bind(this)} navHandler={this.navHandler.bind(this)}  movieList={this.state.movieList}/>);
    } else {
      return (<MovieInfo />);
    }
  }
}

export default App;
