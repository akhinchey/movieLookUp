import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search'
import Results from './Results'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieInfo from './MovieInfo'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      // movie list is list of results after a search
      movieList: [],
      // page number of results
      page: 2,
      // current search phrase
      currentSearch: ""
    }
  }

  updateThisMovie(movie) {
    this.setState({
      thisMovie: movie
    });
  }

  updatePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  updateSearch(query) {
    this.setState({
      currentSearch: query
    });
  }

  updateMovies(movies, search) {
    this.setState({
      movieList: movies,
      currentSearch: search
    });
  }

  render() {
    const {
      page,
      movieList,
      currentSearch
    } = this.state;

    return (
      <Router>
        <div>
          <Nav/>
          <Route exact={true} path="/movieLookUp" render={() => {
            return(
              <div>
                <Search
                  updatePage={this.updatePage.bind(this)}
                  updateMovies={this.updateMovies.bind(this)}
                  currentSearch={currentSearch}
                  updateSearch={this.updateSearch.bind(this)}
                />
                <Results
                  page={page}
                  updatePage={this.updatePage.bind(this)}
                  updateMovies={this.updateMovies.bind(this)}
                  currentSearch={currentSearch}
                  movieList={movieList}
                  updateThisMovie={this.updateThisMovie.bind(this)}
                />
              </div>
            )}
          }
          >
          </Route>
          <Route path="/movieLookUp/movies/:movieId" render={(movieId)=> {
            return <MovieInfo movieId={movieId}/>
          }}/>
        </div>
      </Router>
    )
  }
}

export default App;
