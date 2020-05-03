import React from 'react';

const Navbar = () => (
  <nav id="tf-menu" className="navbar navbar-default">
    <div className="container">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand logo" href="index.html">OBlum</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#tf-home">Home</a></li>
          <li><a href="#tf-about">Profile</a></li>
          <li><a href="#tf-skills">Skills</a></li>
          <li><a href="#tf-education">Education</a></li>
          <li><a href="#tf-portfolio">Portfolio</a></li>
          <li><a href="#tf-contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;