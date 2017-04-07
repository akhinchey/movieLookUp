import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Results from './Results'
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
          <Route path="/" render={() => {
            return(
              <Home
                updatePage={this.updatePage.bind(this)}
                updateMovies={this.updateMovies.bind(this)}
                currentSearch={currentSearch}
              />
            )}}
          />
          <Route path="/movies" render={() => {
            return(
              <Results
                updatePage={this.updatePage.bind(this)}
                updateMovies={this.updateMovies.bind(this)}
                currentSearch={currentSearch}
              />
            )}
          }
          />
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
