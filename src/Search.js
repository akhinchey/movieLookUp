import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      inputClass: '',
      labelClass: ''
    }
  }

  componentDidMount(){
    this.managePosition();
  }

  managePosition(){
    if(this.props.currentSearch === "") {
      this.setState({
        inputClass: "",
        labelClass: ""
      })
    }else {
      this.setState({
        inputClass: "search-active",
        labelClass: "active"
      })
    }
  }

  fetchMovies() {
    this.setState({
      inputClass: "search-active"
    })

    this.props.updatePage(2);
    var searchText = this.refs.query.value

    this.props.updateSearch(searchText);

    if(searchText.length > 1){

      var url = 'https://www.omdbapi.com/?s=' + searchText.split(" ").join("+");

      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.updateMovies(responseJson.Search, searchText);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  render(){
    return(
      <div className="row" key="search">
        <form className={`col m6 offset-m3 m6 offset-m3 s10 offset-s1 search-form ${this.state.inputClass}`}>
          <div className="input-field col s10 offset-s1">
            <i className="material-icons prefix">search</i>
            <input ref="query" id='search-input' type="text" className='validate' value={this.props.currentSearch} onChange={this.fetchMovies.bind(this)}/>
            <label htmlFor="search-input" className={`form-label ${this.state.labelClass}`}>Search movies by title</label>
            <i className="material-icons prefix clear-search" onClick={() => {this.props.updateMovies([],"")}}>clear</i>
          </div>
        </form>
      </div>
      )
  }
}

export default Search;
