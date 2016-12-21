import React, { Component } from 'react';
import Result from './Result';
import $ from 'jquery';

class Results extends Component {

  somefunction(){
      //make ajax
      var searchText = this.props.currentSearch;
      var url = 'https://www.omdbapi.com/?s=' + searchText.split(" ").join("+") + '&page=' + this.props.page.toString();

      $.ajax({
        url: url,
        method: 'get'
      }).done( function(response) {
        if (response.Response === "True") {
          let movies = this.props.movieList.concat(response.Search);
          this.props.updateMovies(movies, searchText);
          console.log(this.props.page);
          this.props.updatePage(this.props.page + 1)
          $('.errors').empty();
        } else {
          this.props.updateMovies([]);
          $('.errors').text(response.Error);
        }
      }.bind(this));
      //concat movies
      // update movies
      // increment page
  }

  render() {
    let movies = this.props.movieList;

    return(
      <main className='center-align row'>
        {movies.map( function(obj, i) {
          return <Result navHandler={this.props.navHandler} updateThisMovie={this.props.updateThisMovie} object={obj} key={i}/>
        }.bind(this))
        }
      <input type='button' onClick={this.somefunction.bind(this)} value="load more"/>
      </main>
    )
  }
}

export default Results;
