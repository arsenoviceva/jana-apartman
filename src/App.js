import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from '../src/components/footer/Footer';
 import Gallery from "./components/gallery/Gallery";



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
