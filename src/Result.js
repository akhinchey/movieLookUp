import React, { Component } from 'react';
import $ from 'jquery'
class Result extends Component {

  fetchMovieInfo(event) {
    event.preventDefault();
    var url = 'https://www.omdbapi.com/?i=' + this.props.object.imdbID + '&plot=full';

    $.ajax({
      url: url,
      method: 'get'
    }).done( function(response) {
      this.props.updateThisMovie(response);
      this.props.navHandler("MovieInfo");
    }.bind(this));
  }

  render() {
    let posterUrl = this.props.object.Poster;
    if(posterUrl === 'N/A'){
      posterUrl = 'http://sd.keepcalm-o-matic.co.uk/i/keep-calm-poster-not-found.png'
    }
    return(
        <div className="result-card">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={posterUrl} alt='movie poster' />
              </div>
              <div className="card-content">
                <span className="card-title">{this.props.object.Title}</span>
                <p>
                  Type: {this.props.object.Type}
                </p>
                <p>
                  Year: {this.props.object.Year}
                </p>
              </div>
              <div className="card-action">
                <a onClick={this.fetchMovieInfo.bind(this)} href="{this.props.object.title}">more info</a>
              </div>
            </div>
          </div>
      </div>
      )
  }
}

export default Result;
