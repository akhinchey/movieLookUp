import React, { Component } from 'react';
import Nav from './Nav';

class MovieInfo extends Component {
  render() {
    return(
      <div>
        <Nav navHandler={this.props.navHandler}/>
        <div className='container'>
          <h2>{this.props.thisMovie.Title}</h2>
          <span>{this.props.thisMovie.Rated}</span><span>|</span>
          <span>{this.props.thisMovie.Runtime}</span><span>|</span>
          <span>{this.props.thisMovie.Country}</span><span>|</span>
          <span>{this.props.thisMovie.Genre}</span><span>|</span>
          <span>{this.props.thisMovie.Year}</span>
          <ul>
            <li className='row valign-wrapper'>
              <div className='col m4 s12'>
                <img className='col m10 s12' src={this.props.thisMovie.Poster} alt='poster'/>
              </div>
              <ul className='col m8 s12 info valign'>
                <li><strong>Actors:</strong> {this.props.thisMovie.Actors}</li>
                <li><strong>Awards:</strong> {this.props.thisMovie.Awards}</li>
                <li><strong>Director:</strong> {this.props.thisMovie.Director}</li>
                <li><strong>Language:</strong> {this.props.thisMovie.Language}</li>
                <li><strong>Release date:</strong>{this.props.thisMovie.Released}</li>
                <li><strong>Writers:</strong> {this.props.thisMovie.Writer}</li>
              </ul>
            </li>
            <h3>Plot:</h3>
            <p className="plot">{this.props.thisMovie.Plot}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default MovieInfo;
