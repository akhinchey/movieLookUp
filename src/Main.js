import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import Result from './Result';
import './App.css';

class Main extends Component {



  render() {
    return (
      <div>
        <Nav navHandler={this.props.navHandler}/>
        <Search updateMovies={this.props.updateMovies} />
        <div className='errors'>

        </div>
        <Results navHandler={this.props.navHandler} movieList={this.props.movieList} />
      </div>
    );
  }
}

export default Main;
