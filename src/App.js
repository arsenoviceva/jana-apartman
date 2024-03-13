import './App.css';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import HeroSection from './components/hero-section/HeroSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <HeroSection/>
      <Routes>

     
      <Route path="/galerija" element={<Carousel />} />
      </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
