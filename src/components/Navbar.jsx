import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="text-2xl font-bold text-amber-600 cursor-pointer text-left"
        >
          Restaurant Logo
        </button>

        {/* Desktop Navigation Links (Hidden on mobile, visible on medium screens and up) */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <button onClick={() => scrollToSection('hero')} className="hover:text-amber-600 transition cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-amber-600 transition cursor-pointer">
            About Us
          </button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-amber-600 transition cursor-pointer">
            Menu
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-amber-600 transition cursor-pointer">
            Contact & Hours
          </button>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full transition cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger / Close Toggle Button (Visible only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Close "X" icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger lines icon
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu (Appears only when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col space-y-4 text-gray-700 font-medium shadow-lg">
          <button onClick={() => scrollToSection('hero')} className="text-left hover:text-amber-600 transition py-1">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-left hover:text-amber-600 transition py-1">
            About Us
          </button>
          <button onClick={() => scrollToSection('menu')} className="text-left hover:text-amber-600 transition py-1">
            Menu
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left hover:text-amber-600 transition py-1">
            Contact & Hours
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full transition text-center w-full mt-2"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}