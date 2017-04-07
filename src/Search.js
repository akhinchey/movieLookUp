import React, { Component } from 'react';
import $ from 'jquery';

class Search extends Component {

  componentDidMount(){
    if (this.props.currentSearch.length > 1 ) {
      $("#search-input").val(this.props.currentSearch);
      $('.form-label').addClass("active");
      $('.search-form').css('margin-top', '30px');
    }
  }

  fetchMovies(event) {
    event.preventDefault();
    this.props.updatePage(2);
    var searchText = this.refs.query.value

    if(searchText.length > 1){

      let formBoxTop = $('.search-form').offset().top;

      if( formBoxTop > 145){
        $('.search-form').css('margin-top', '30px');
      }

      var url = 'https://www.omdbapi.com/?s=' + searchText.split(" ").join("+");

      $.ajax({
        url: url,
        method: 'get'
      }).done( function(response) {
        if (response.Response === "True") {
          this.props.updateMovies(response.Search, searchText);
          $('.errors').empty();
        } else {
          this.props.updateMovies([]);
          $('.errors').text(response.Error);
        }
      }.bind(this));
    }
  }


  render(){
    return(
      <div className="row">
        <form onChange={this.fetchMovies.bind(this)} className="col s12 m6 offset-m3 search-form">
          <div className="input-field col s10 offset-s1">
            <i className="material-icons prefix">search</i>
            <input ref="query" id='search-input' type="text" className='validate'/>
            <label htmlFor="search-input" className='form-label'>Search movies by title</label>
          </div>
        </form>
      </div>
      )
  }
}

export default Search;
