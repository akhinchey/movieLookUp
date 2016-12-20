import React, { Component } from 'react';

class MovieInfo extends Component {
  goBack(){
    this.props.navHandler('Main')
  }

  render() {
    return(
      <div>
        <a href='#' onClick={this.goBack.bind(this)}>go back</a>
        <h2>{this.props.thisMovie.Title}</h2>
        <ul>
          <li><img src={this.props.thisMovie.Poster} alt='poster'/></li>
          <li>Actors: {this.props.thisMovie.Actors}</li>
          <li>Awards: {this.props.thisMovie.Awards}</li>
          <li>COuntry: {this.props.thisMovie.Country}</li>
          <li>{this.props.thisMovie.Director}</li>
          <li>{this.props.thisMovie.Genre}</li>
          <li>{this.props.thisMovie.Language}</li>
          <li><p>{this.props.thisMovie.Plot}</p></li>
          <li>{this.props.thisMovie.Rated}</li>
          <li>{this.props.thisMovie.Released}</li>
          <li>{this.props.thisMovie.Runtime}</li>
          <li>{this.props.thisMovie.Writer}</li>
          <li>{this.props.thisMovie.Year}</li>

        </ul>
      </div>
    )
  }
}

export default MovieInfo;
