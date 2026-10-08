import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-[#fefefe] overflow-hidden border-t border-[#432c2d]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-[4px] overflow-hidden shadow-md aspect-3/4 bg-stone-100">
                  <img
                    src="/nails.png"
                    alt="L.A. Beauty Bar - Emerald Cat-Eye Manicure"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs sm:text-sm text-[#432c2d]/85 leading-relaxed font-sans pt-1">
                  Στούντιο περιποίησης νυχιών στην Ανατολή Ιωαννίνων. Εξειδίκευση σε Russian/Combi μανικιούρ, επιμήκυνση με gel και σύγχρονη αισθητική.
                </p>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-[4px] bg-[#382b2b] text-[#fefefe] shadow-xs">
                  <div className="font-serif font-bold text-2xl text-[#fefefe] mb-1">
                    5+ Έτη
                  </div>
                  <div className="text-xs text-[#fefefe]/80 font-medium">
                    Εξειδίκευσης σε Combi Nail Techniques
                  </div>
                </div>
                <div className="rounded-[4px] overflow-hidden shadow-md aspect-3/4 bg-stone-100">
                  <img
                    src="/nails3.jpg?v=3"
                    alt="Manicure detail L.A. Beauty Bar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-script text-2xl text-[#c22026]">Our Studio Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#432c2d] mt-2 mb-5 leading-tight">
              Εκεί όπου η αισθητική συναντά την απόλυτη υγιεινή.
            </h2>
            <p className="text-[#432c2d]/80 text-sm sm:text-base leading-relaxed font-sans">
              Στο L.A. Beauty Bar πιστεύουμε ότι η πραγματική κομψότητα ξεκινά από τη σωστή φροντίδα και την υγεία των φυσικών σας νυχιών. Με κορυφαία υλικά, απόλυτη αποστείρωση και προσοχή σε κάθε λεπτομέρεια, δημιουργούμε ένα αποτέλεσμα που διαρκεί.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
