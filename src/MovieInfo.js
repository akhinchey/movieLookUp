import React, { Component } from 'react';

class MovieInfo extends Component {
  goBack(){
    this.props.navHandler('Main')
  }

  render() {
    return(
      <div>
        <a href='#' onClick={this.goBack.bind(this)}>go back</a>
        <ul>
          <li>{this.props.thisMovie.title}</li>
          <li>{this.props.thisMovie.year}</li>
        </ul>
      </div>
    )
  }
}

export default MovieInfo;
