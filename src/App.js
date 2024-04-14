import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Destination from './components/Destination';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Carousels from './components/Carousels';

function App() {
  return (
    <div>
     <Navbar />
    <Hero />
    <Destination />
    <Search />
    <Gallery />
    <Carousels />
    <Footer />
    </div>
  );
}

export default App;
