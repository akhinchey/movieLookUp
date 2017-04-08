import React, { Component } from 'react';
import Result from './Result';
// import ReactDOM from 'react-dom';

class Results extends Component {
  // handleScroll(ev) {
  //     console.log("Scrolling!");
  // }
  // componentDidMount() {
  //     const list = ReactDOM.findDOMNode(this.refs.list);
  //     list.addEventListener('scroll', this.handleScroll.bind(this));
  // }
  // componentWillUnmount() {
  //     const list = ReactDOM.findDOMNode(this.refs.list);
  //     list.removeEventListener('scroll', this.handleScroll.bind(this));
  // }

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
      <div className='center-align row' ref="list">
        {movies.map( function(obj, i) {
          return <Result updateThisMovie={this.props.updateThisMovie} object={obj} key={i}/>
        }.bind(this))
      }
      <input onClick={this.fetchMoreMovies.bind(this)} type="button" value="load more"/>
    </div>
    )
  }
}

export default Results;
