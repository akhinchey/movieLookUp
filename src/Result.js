import React, { Component } from 'react';
import $ from 'jquery';

class Result extends Component {

  render() {
    return(
        <div>
          <p>
            Poster: {this.props.object.Poster}
          </p>
          <p>
            Title: {this.props.object.Title}
          </p>
          <p>
            Type: {this.props.object.Type}
          </p>
          <p>
            Year: {this.props.object.Year}
          </p>
        </div>
      )
  }
}

export default Result;