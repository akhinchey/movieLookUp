import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Search from './Search'
import Results from './Results'
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
      // particular movie to display info
      thisMovie: {},
      // current search phrase
      currentSearch: ""
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

  render() {
    const {
      page,
      movieList,
      currentSearch,
      thisMovie
    } = this.state;

    return (
      // <Router>
      //   <Main
      //     page={page}
          // updatePage={this.updatePage.bind(this)}
          // updateMovies={this.updateMovies.bind(this)}
      //     navHandler={this.navHandler.bind(this)}
      //     movieList={movieList}
      //     currentSearch={currentSearch}
      //     updateThisMovie={this.updateThisMovie.bind(this)}
      //     />
      // </Router>
      <Router>
        <div>
          <Nav/>
          <Route path="/" exact={true} render={() => {
            return(
              <Home
                updatePage={this.updatePage.bind(this)}
                updateMovies={this.updateMovies.bind(this)}
                currentSearch={currentSearch}
              />
            )}}
          />
          <Route exact={true} path="/movies" render={() => {
            return(
              <div>
                <Search
                  updatePage={this.updatePage.bind(this)}
                  updateMovies={this.updateMovies.bind(this)}
                  currentSearch={currentSearch}
                />
                <Results
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
          <Route path="/movies/:movieId" render={(movieId)=> {
            return <MovieInfo movieId={movieId}/>
          }}/>
        </div>
      </Router>
    )
    // if(renderComponent === 'Main'){
    //   return (
    //     <Router>
    //       <Main

    //         />
    //     </Router>
    //   );
    // } else {
    //   return (
    //     <Router>
    //       <MovieInfo
    //         thisMovie={thisMovie}
    //         navHandler={this.navHandler.bind(this)}
    //       />
    //   </Router>
    //   )
    // }
  }
}

export default App;
