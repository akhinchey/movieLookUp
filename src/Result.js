import React, { Component } from 'react';
import MovieInfo from './MovieInfo'
import $ from 'jquery';

class Result extends Component {

  fetchMovieInfo(event) {
    event.preventDefault();
    console.log('hi');
    this.props.navHandler("MovieInfo");
  }

  render() {
    return(
        <div className="result-card">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={this.props.object.Poster} />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>
                  Title: {this.props.object.Title}
                </p>
                <p>
                  Type: {this.props.object.Type}
                </p>
                <p>
                  Year: {this.props.object.Year}
                </p>
                <a onClick={this.fetchMovieInfo.bind(this)} href="{this.props.object.title}">more info</a>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
      </div>
      )
  }
}

export default Result;
