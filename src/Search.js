import React, { Component } from 'react';


class Search extends Component {
  render(){
    return(
      <div className="row">
        <form className="col s12 m4">
          <input type="text" />
          <br />
          <input type="submit" />
        </form>
      </div>
      )
  }
}

export default Search;