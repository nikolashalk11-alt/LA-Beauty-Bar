import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20 bg-[#fefefe]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#432c2d] leading-[1.15] mb-6 max-w-3xl">
          Εκλεπτυσμένη φροντίδα & άψογη αισθητική νυχιών.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#432c2d]/80 leading-relaxed max-w-2xl font-sans">
          Στο <strong className="font-vibes text-2xl sm:text-3xl text-[#432c2d] font-normal inline-block px-1">L.A. Beauty Bar</strong> προσφέρουμε εξειδικευμένο Russian & Combi μανικιούρ, φυσική ενίσχυση, σύγχρονο nail art και αναζωογονητικό spa πεντικιούρ με απόλυτο σεβασμό στην υγεία των νυχιών σας.
        </p>
      </div>
    </section>
  );
};
