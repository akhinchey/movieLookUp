import React, { Component } from 'react';

class Nav extends Component {

  goHomeYoureDrunk(){

  }

  render(){
    return(
      <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><img src='/logo.png' id='nav-logo' alt='logo'/></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">home</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
    )
  }
}

export default Nav;
