import React, { Component } from 'react';
import $ from 'jquery';


class Search extends Component {

  fetchMovies(event) {
    event.preventDefault();
    var url = 'http://www.omdbapi.com/?s=' + this.refs.query.value.split(" ").join("+");
    $.ajax({
      url: url,
      method: 'get'
    }).done( response => {
      // console.log(response)
      if (response.Response === "True") {
        this.props.updateMovies(response.Search);
        $('.errors').empty();
      } else {
        this.props.updateMovies([]);
        $('.errors').text(response.Error);
      }
    });
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