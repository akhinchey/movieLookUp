import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieInfo extends Component {
  constructor(){
    super();
    this.state = {
      thisMovie: {}
    }
  }

  componentDidMount(){
    this.fetchMovieInfo()
  }

  fetchMovieInfo() {
    var url = 'https://www.omdbapi.com/?i=' + this.props.movieId.match.params.movieId + '&plot=full';

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        thisMovie: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const {
      Title,
      Rated,
      Runtime,
      Country,
      Genre,
      Year,
      Actors,
      Awards,
      Poster,
      Director,
      Language,
      Released,
      Writer,
      Plot
    } = this.state.thisMovie

    return(
      <div>
        <div className='container'>
          <Link to='/movieLookUp' className="back-link">
            <i className="material-icons" style={{transform: 'rotate(180deg)'}}>trending_flat</i> <p>back to search results</p>
          </Link>
          <h2>{Title}</h2>
          <span>{Rated}</span><span>|</span>
          <span>{Runtime}</span><span>|</span>
          <span>{Country}</span><span>|</span>
          <span>{Genre}</span><span>|</span>
          <span>{Year}</span>
          <ul>
            <li className='row valign-wrapper'>
              <div className='col m4 s12'>
                <img className='col m10 s12' src={Poster} alt='poster'/>
              </div>
              <ul className='col m8 s12 info valign'>
                <li><strong>Actors:</strong> {Actors}</li>
                <li><strong>Awards:</strong> {Awards}</li>
                <li><strong>Director:</strong> {Director}</li>
                <li><strong>Language:</strong> {Language}</li>
                <li><strong>Release date:</strong>{Released}</li>
                <li><strong>Writers:</strong> {Writer}</li>
              </ul>
            </li>
            <h3>Plot:</h3>
            <p className="plot">{Plot}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default MovieInfo;
