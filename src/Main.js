import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import './App.css';

class Main extends Component {

  render() {
    return (
      <div>
        <Nav navHandler={this.props.navHandler} />
        <Search updatePage={this.props.updatePage} updateMovies={this.props.updateMovies} currentSearch={this.props.currentSearch} />
        <div className='errors'>

        </div>
        <Results updatePage={this.props.updatePage} page={this.props.page} navHandler={this.props.navHandler} movieList={this.props.movieList}
        updateThisMovie={this.props.updateThisMovie} currentSearch={this.props.currentSearch} updateMovies={this.props.updateMovies}/>
      </div>
    );
  }
}

export default Main;
