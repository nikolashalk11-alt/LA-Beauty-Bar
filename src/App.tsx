/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LogoProvider } from './context/LogoContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LogoProvider>
      {/* Editorial Preloader with Logo */}
      <Preloader />

      <div className="min-h-screen flex flex-col bg-[#fefefe] text-[#432c2d] antialiased selection:bg-[#432c2d] selection:text-[#fefefe]">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 bg-[#fefefe]">
          <Hero />
          <AboutSection />
          <ReviewsSection />
          <ContactLocationSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LogoProvider>
  );
}
