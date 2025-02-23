import React, { useContext } from 'react';
import classNames from 'classnames';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Services from './sections/Services';
import Skills from './sections/Skills.jsx';

import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import { PortfolioContext } from './context/PortfolioContext.jsx';

function App() {
  const { theme } = useContext(PortfolioContext);

  return (
    <div className={classNames('App', { [theme]: true })}>
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
