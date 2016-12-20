import React, { Component } from 'react';

class MovieInfo extends Component {
  goBack(){
    this.props.navHandler('Main')
  }

  render() {
    return(
      <div className='container'>
        <a href='#' onClick={this.goBack.bind(this)}>go back</a>
        <h2>{this.props.thisMovie.Title}</h2>
        <span>{this.props.thisMovie.Rated} | </span>
        <span>{this.props.thisMovie.Runtime} | </span>
        <span>{this.props.thisMovie.Country} | </span>
        <span>{this.props.thisMovie.Genre} | </span>
        <span>{this.props.thisMovie.Year}</span>
        <ul>
          <li className='row'>
            <img className='col m6' src={this.props.thisMovie.Poster} alt='poster'/>
            <ul className='col m6'>
              <li>Actors: {this.props.thisMovie.Actors}</li>
              <li>Awards: {this.props.thisMovie.Awards}</li>
              <li>Director: {this.props.thisMovie.Director}</li>
              <li>Language: {this.props.thisMovie.Language}</li>
              <li>Release date:{this.props.thisMovie.Released}</li>
              <li>Writers: {this.props.thisMovie.Writer}</li>
              <li>
                <h5>Plot:</h5>
                <p>{this.props.thisMovie.Plot}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default MovieInfo;
