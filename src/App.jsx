import reactLogo from './assets/react.svg'
import React from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero';
import Quote from './components/Quote';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <div className="nav-bar">
        <img src="/logo.svg" alt="" />
        <a href="">Plus</a>
        <a href="">Team</a>
        <a href="">Newsletter</a>
    </div>
    <div className = 'main'>
    <Hero />
    <Quote/>
    <Features />
    <Reviews/>
    <Explore />
    <Footer />

    </div>
      
    </>
  )
}

export default App
