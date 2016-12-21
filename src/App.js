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
      thisMovie: {},
      currentSearch: "",
      page: 2
    }
  }

  updateThisMovie(movie) {
    this.setState({
      thisMovie: movie
    });
  }

  updatePage(newPage){
    this.setState({
      page: newPage
    });
  }

  updateMovies(movies, search) {
    this.setState({
      movieList: movies,
      currentSearch: search
    });
  }

  navHandler(component){
    this.setState({
      renderComponent: component
    });
  }

  render() {
    const {
      renderComponent,
      page,
      movieList,
      currentSearch,
      thisMovie
    } = this.state

    if(renderComponent === 'Main'){
      return (
        <Main
          page={page}
          updatePage={this.updatePage.bind(this)}
          updateMovies={this.updateMovies.bind(this)}
          navHandler={this.navHandler.bind(this)}
          movieList={movieList}
          currentSearch={currentSearch}
          updateThisMovie={this.updateThisMovie.bind(this)}
        />
      );
    } else {
      return (
        <MovieInfo
          thisMovie={thisMovie}
          navHandler={this.navHandler.bind(this)}
        />
      )
    }
  }
}

export default App;
