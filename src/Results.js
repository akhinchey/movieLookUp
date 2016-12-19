import React, { Component } from 'react';
import Result from './Result';
import $ from 'jquery';

class Results extends Component {

  render() {
    let movies = this.props.movieList;
    
    return(
      <main className='center-align row'>
      {movies.map( function(obj, i) {
        return <Result navHandler={this.props.navHandler} object={obj} key={i}/>
        }.bind(this))}
      </main>
    )
  }
}

export default Results;
