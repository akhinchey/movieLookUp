import React, { Component } from 'react';
import Result from './Result';
import $ from 'jquery';

class Results extends Component {

  render() {
    let movies = this.props.movieList;
    // debugger;
    return(
      <main className='center-align row'>
      {movies.map( function(obj, i) {
        return <Result object={obj} key={i}/>
        })}
      </main>
    )
  }
}

export default Results;