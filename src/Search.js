import React, { Component } from 'react';
import $ from 'jquery';


class Search extends Component {

  fetchMovies(event) {
    event.preventDefault();
    var url = 'http://www.omdbapi.com/?s=' + this.refs.query.value;
    $.ajax({
      url: url,
      method: 'get'
    }).done( function(response) {
    // debugger;
      this.props.updateMovies(response.Search);
    }.bind(this))
  }


  render(){
    return(
      <div className="row">
        <form onSubmit={this.fetchMovies.bind(this)} className="col s12 m4">
          <input ref="query" type="text" />
          <br />
          <input type="submit" />
        </form>
      </div>
      )
  }
}

export default Search;