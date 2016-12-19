import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {

  render() {
    let movies = this.props.movieList;

    return(
      <main className='center-align row'>
      {movies.map( function(obj, i) {
        return <Result navHandler={this.props.navHandler} updateThisMovie={this.props.updateThisMovie} object={obj} key={i}/>
        }.bind(this))}
      </main>
    )
  }
}

export default Results;
