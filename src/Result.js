import React, { Component } from 'react';

class Result extends Component {

  fetchMovieInfo(event) {
    event.preventDefault();
    console.log('hi');
    this.props.updateThisMovie({
        title: 'this and that',
        year: '198this'
    })
    this.props.navHandler("MovieInfo");
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
