import React, { Component } from 'react';
import $ from 'jquery';

var page = 1;

class Search extends Component {

  fetchMovies(event) {
    event.preventDefault();
    var url = 'https://www.omdbapi.com/?s=' + this.refs.query.value.split(" ").join("+") + '&page=' + page;
    console.log(url);
    $.ajax({
      url: url,
      method: 'get'
    }).done( function(response) {
      console.log(response)
      if (response.Response === "True") {
        this.props.updateMovies(response.Search);
        $('.errors').empty();
      } else {
        this.props.updateMovies([]);
        $('.errors').text(response.Error);
      }
    }.bind(this));
  }


  render(){
    return(
      <div className="row">
        <form onChange={this.fetchMovies.bind(this)} className="col s12 m4">
          <input ref="query" type="text" />
          <br />
          <input type="submit" />
        </form>
      </div>
      )
  }
}

export default Search;
