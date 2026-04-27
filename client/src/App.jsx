import Navbar from './components/Navbar';
import AboutMe from './sections/AboutMe';
import Home from './sections/Home';
import Services from './sections/Services';
import Skills from './sections/Skills.jsx';

import { PortfolioContext } from './context/PortfolioContext.jsx';
import ContactMe from './sections/ContactMe';
import Footer from './sections/Footer';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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
