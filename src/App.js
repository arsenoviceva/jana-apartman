import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import HeroSection from "./components/hero-section/HeroSection";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from '../src/components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Carousel />
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
