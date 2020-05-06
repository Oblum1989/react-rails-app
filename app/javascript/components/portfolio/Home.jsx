import React from 'react';
import ResponsiveContainer from './ResponsiveContainer'
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => (
  <>
    <ResponsiveContainer>
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </ResponsiveContainer>
  </>
);

export default Home;
