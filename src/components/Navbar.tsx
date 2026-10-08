import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { useLogo } from '../context/LogoContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const { logoUrl } = useLogo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SALON_INFO.phone);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fefefe]/95 backdrop-blur-md shadow-xs border-b border-[#432c2d]/10 py-3'
          : 'bg-[#fefefe] py-4 border-b border-[#432c2d]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo in PNG format */}
        <div className="flex items-center min-w-0 md:min-w-[210px] shrink-0">
          <a href="#" className="group flex items-center gap-2.5 sm:gap-3 shrink-0 py-0.5">
            <img
              src={logoUrl}
              alt="L.A. Beauty Bar Ioannina"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] object-contain shrink-0 group-hover:scale-105 transition-transform shadow-2xs bg-[#fefefe]"
            />
            <span className="font-vibes text-2xl sm:text-3xl text-[#432c2d] leading-none whitespace-nowrap pt-1">
              L.A. Beauty Bar
            </span>
          </a>
        </div>

        {/* Desktop Nav Links - Centered with balanced chiseled spacing */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-5 lg:gap-8 xl:gap-9 text-xs lg:text-[13px] font-medium tracking-wide text-[#432c2d]/80">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#432c2d] transition-colors py-1 px-1 cursor-pointer whitespace-nowrap relative group"
          >
            <span>Το Στούντιο</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#432c2d] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo('reviews')}
            className="hover:text-[#432c2d] transition-colors py-1 px-1 cursor-pointer whitespace-nowrap relative group"
          >
            <span>Κριτικές</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#432c2d] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="hover:text-[#432c2d] transition-colors py-1 px-1 cursor-pointer whitespace-nowrap relative group"
          >
            <span>Τοποθεσία & Ωράριο</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#432c2d] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Top Right Corner Phone Copy Button in one line */}
        <div className="flex items-center justify-end min-w-0 md:min-w-[210px] shrink-0">
          <button
            type="button"
            onClick={handleCopyPhone}
            className="whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-[4px] text-xs sm:text-sm font-semibold text-[#fefefe] bg-[#382b2b] hover:bg-[#2c2222] active:scale-95 transition-all shadow-sm cursor-pointer select-none inline-flex items-center justify-center min-h-[36px]"
            title="Κάντε κλικ για αντιγραφή"
          >
            {copied ? 'Αντιγράφηκε' : SALON_INFO.phone}
          </button>
        </div>
      </div>
    </header>
  );
};
