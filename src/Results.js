import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
  handleScroll(ev) {
    if((window.scrollY + window.innerHeight)/document.body.clientHeight >= 1){
      this.fetchMoreMovies();
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  fetchMoreMovies(){
      var searchText = this.props.currentSearch;
      var url = 'https://www.omdbapi.com/?s=' + searchText.split(" ").join("+") + '&page=' + this.props.page.toString();

      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let movies = this.props.movieList.concat(responseJson.Search);
        this.props.updateMovies(movies, searchText);
        this.props.updatePage(this.props.page + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let movies = this.props.movieList;
    return(
      <div className='center-align row' onScroll={this.handleScroll.bind(this)}>
        {movies.map( function(obj, i) {
          return <Result updateThisMovie={this.props.updateThisMovie} object={obj} key={i}/>
        }.bind(this))
      }
    </div>
    )
  }
}

export default Results;
