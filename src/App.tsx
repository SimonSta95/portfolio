import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar/>
      <Box id="hero">
        <Hero />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;