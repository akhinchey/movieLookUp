import React, { Component } from 'react';

class Nav extends Component {

  goBack(event){
    event.preventDefault();
    this.props.navHandler('Main')
  }

  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><img src='/logo.png' id='nav-logo' alt='logo'/></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li onClick={this.goBack.bind(this)}><a href="">back</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
