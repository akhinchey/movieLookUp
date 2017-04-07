import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import $ from 'jquery'
class Result extends Component {

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
                <Link to={`/movies/${this.props.object.imdbID}`}>
                  more info
                </Link>
              </div>
            </div>
          </div>
      </div>
      )
  }
}

export default Result;
