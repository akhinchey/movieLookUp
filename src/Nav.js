import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  goBack(event){
    event.preventDefault();
    this.props.navHandler('Main');
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to='/'>
            <div className="brand-logo"><img src='logo.png' id='nav-logo' alt='logo'/></div>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Link to="/">
              search
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
