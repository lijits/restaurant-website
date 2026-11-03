
import React from 'react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-stone-900 text-white">
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-32 md:py-48 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Exquisite Flavors, Unforgettable Moments
        </h1>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mb-8">
          Welcome to Savoria — where fresh ingredients meet culinary passion in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg text-center cursor-pointer"
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-stone-100 text-stone-900 font-semibold px-8 py-3 rounded-full transition shadow-lg text-center cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}