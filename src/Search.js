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
        <form onChange={this.fetchMovies.bind(this)} className="col s12 m4 offset-m4 search-form">
          <div className="input-field col s10 offset-s1">
            <i className="material-icons prefix">search</i>
            <input ref="query" id='search-input' type="text" className='validate'/>
            <label htmlFor="search-input">Search movies by title</label>
          </div>
        </form>
      </div>
      )
  }
}

export default Search;
