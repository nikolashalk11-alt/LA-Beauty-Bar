import React, { useEffect, useState } from 'react';
import { useLogo } from '../context/LogoContext';

export const Preloader: React.FC = () => {
  // THE LOGO IS LINKED HERE:
  // logoUrl is provided by LogoContext (defaults to '/logo.png')
  const { logoUrl } = useLogo();
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Keep the preloader visible for an elegant entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    // Unmount after smooth fade out transition
    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fefefe] transition-opacity duration-700 ease-out select-none ${
        isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isLoading}
    >
      <div className="flex flex-col items-center text-center px-4">
        {/* Logo Container */}
        <div className="relative mb-4 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[4px] bg-[#fefefe] shadow-md border border-[#432c2d]/10 flex items-center justify-center p-2.5 overflow-hidden">
            {/* 
              THE LOGO IMAGE TAG:
              src={logoUrl} points directly to '/logo.png' (or any custom logo updated via LogoContext)
            */}
            <img
              src={logoUrl}
              alt="L.A. Beauty Bar"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Brand Name */}
        <span className="font-vibes text-3xl sm:text-4xl text-[#432c2d] mb-1 leading-tight tracking-wide">
          L.A. Beauty Bar
        </span>
        <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#432c2d]/60 font-sans mb-6">
          Ioannina · Nail Aesthetics
        </span>

        {/* Minimalist Progress Line */}
        <div className="w-28 sm:w-36 h-[2px] bg-[#432c2d]/10 overflow-hidden rounded-[2px] relative">
          <div className="h-full bg-[#432c2d] w-1/2 rounded-[2px] animate-preloader-bar" />
        </div>
      </div>
    </div>
  );
};
