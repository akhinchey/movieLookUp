import React, { Component } from 'react';
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import './App.css';

class Main extends Component {

  render() {
    const {
      navHandler,
      updatePage,
      updateMovies,
      currentSearch
    } = this.props //deconstructing variables es6

    return (
      <div>
        <Nav navHandler={navHandler} />
        <Search
          updatePage={updatePage}
          updateMovies={updateMovies}
          currentSearch={currentSearch}
        />
        <div className='errors'>

        </div>
        <Results {...this.props} />
      </div>
    );
  }
}

export default Main;
