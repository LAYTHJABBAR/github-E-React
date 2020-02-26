import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary" >
        <h1>
          <i className="fab fa-github" /> {this.props.title}
        </h1>
        <h5>
          <i><a href='/'>Home</a> </i>
          <i><a href='/about'>About</a></i>
        </h5>
      </nav>
    );
  }
}

export default NavBar;
