import React, { Component } from 'react';
import Main from './Main';
import MovieInfo from './MovieInfo'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      movieList: [],
      renderComponent: "Main",
      thisMovie: {}
    }
  }

  updateThisMovie(movie) {
    this.setState({
      thisMovie: movie
    });
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
      return (<Main updateMovies={this.updateMovies.bind(this)} navHandler={this.navHandler.bind(this)}  movieList={this.state.movieList}
      updateThisMovie={this.updateThisMovie.bind(this)}/>);
    } else {
      return (<MovieInfo thisMovie={this.state.thisMovie} navHandler={this.navHandler.bind(this)}/>)
    }
  }
}

export default App;
