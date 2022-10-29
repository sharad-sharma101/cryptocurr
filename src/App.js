import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Featured from './components/Featured';
import Footer from './components/Footer';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Featured/>
    <Signup/>
    <Footer/>
    </>
  );
}

export default App;
