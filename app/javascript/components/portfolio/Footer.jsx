import React from 'react';

const Footer = () => (
  <nav id="tf-footer">
    <div className="container">
      <div className="pull-left">
        <p>2019 © Oscar Blum. All Rights Reserved.</p>
      </div>
      <div className="pull-right">
        <ul className="social-media list-inline">
          <li><a href="/"><span className="fa fa-facebook"></span></a></li>
          <li><a href="/"><span className="fa fa-twitter"></span></a></li>
          <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
          <li><a href="/"><span className="fa fa-github"></span></a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Footer;