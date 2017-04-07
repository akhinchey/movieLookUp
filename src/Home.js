import React, { Component } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    const {
      movieList,
      currentSearch,
      thisMovie
    } = this.props;

    return (
      <div>
        <h1 className="welcome">Welcome, you can search for movies based on title, to start simply type in the field below</h1>
        <Link to='/movies'>
          <Search
            updatePage={this.props.updatePage.bind(this)}
            updateMovies={this.props.updateMovies.bind(this)}
            currentSearch={currentSearch}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
