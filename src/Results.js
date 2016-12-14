import React, { Component } from 'react';
import Result from './Result';
import $ from 'jquery';

class Results extends Component {

  render() {
    let movies = this.props.movieList;
    // debugger;
    return(
      <div>
      {movies.map( function(obj, i) {
        return <Result object={obj} key={i}/>
        })}
      </div>
    )
  }
}

export default Results;