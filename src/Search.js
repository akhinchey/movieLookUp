import React, { Component } from 'react';
import $ from 'jquery';


class Search extends Component {

  fetchMovies(event) {
    event.preventDefault();

    $.ajax({
      url: 'http://www.omdbapi.com/?t=ghost+in+the+shell&y=&plot=short&r=json',
      method: 'get'
    })
  }


  render(){
    return(
      <div className="row">
        <form onSubmit={this.fetchMovies.bind(this)} className="col s12 m4">
          <input type="text" />
          <br />
          <input type="submit" />
        </form>
      </div>
      )
  }
}

export default Search;