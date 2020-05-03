import React from 'react'; 
import Navbar from './Navbar';

const Home = () => (
  <div id="tf-home">
    <div className="overlay">
      <div id="sticky-anchor"></div>
      <Navbar />
      <div className="container">
        <div className="content">
          <h1 className="display-1">OSCAR BLUM CARRERO</h1>
          <h3 className="display-4">SYSTEM ENGINEER AND RUBY ON RAILS FULL-STACK DEVELOPER</h3>
          <a href="#tf-contact" className="btn btn-primary my-btn">Contact</a>
          <a href="#tf-portfolio" className="btn btn-primary my-btn2">Portfolio</a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;