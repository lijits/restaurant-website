import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Make sure you import your About component
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-stone-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Added id="about" here */}
      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}