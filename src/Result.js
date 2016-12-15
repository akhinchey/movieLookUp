import React, { Component } from 'react';
import $ from 'jquery';

class Result extends Component {

  fetchMovieInfo(event) {
    event.preventDefault();
    debugger;
  }

  render() {
    return(
        // <div className='result'>
        //   <p>
        //     <img src={this.props.object.Poster} />
        //   </p>
        //   <p>
        //     Title: {this.props.object.Title}
        //   </p>
        //   <p>
        //     Type: {this.props.object.Type}
        //   </p>
        //   <p>
        //     Year: {this.props.object.Year}
        //   </p>
        //   <p>
        //     <a onClick={this.fetchMovieInfo.bind(this)}>details</a>
        //   </p>
        // </div>
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