import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { useLogo } from '../context/LogoContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { logoUrl } = useLogo();

  return (
    <footer className="bg-[#382b2b] text-[#fefefe] pt-16 pb-12 border-t border-[#382b2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-[#fefefe]/15">
          {/* Brand column with PNG logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={logoUrl}
                alt="L.A. Beauty Bar Ioannina"
                className="w-13 h-13 rounded-[4px] object-contain bg-[#fefefe] shadow-xs shrink-0"
              />
              <div>
                <span className="font-vibes text-2xl sm:text-3xl text-[#fefefe] block leading-none mb-1">
                  {SALON_INFO.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#fefefe]/70">
                  {SALON_INFO.city}
                </span>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#fefefe]">
              Επικοινωνία & Διεύθυνση
            </h4>
            <div className="space-y-2 text-xs text-[#fefefe]/80">
              <div>
                {SALON_INFO.address}, Τ.Κ. {SALON_INFO.postalCode}, {SALON_INFO.area}
              </div>
              <div>
                <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  Τηλέφωνο: {SALON_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fefefe]/60">
          <div>
            © {currentYear} {SALON_INFO.name}.  All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
