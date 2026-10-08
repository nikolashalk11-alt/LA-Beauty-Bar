import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 lg:py-24 bg-[#fefefe] border-t border-[#432c2d]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 text-center sm:text-left">
          {/* Kept red because it has the font from "Our Studio Philosophy" */}
          <span className="font-script text-2xl text-[#c22026]">Client Love</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#432c2d] mt-1 mb-2">
            Αξιολογήσεις Πελατών
          </h2>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#432c2d] text-sm">
            <div className="flex items-center text-[#432c2d]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#432c2d] text-[#432c2d]" />
              ))}
            </div>
            <span className="font-bold text-[#432c2d]">4.6 / 5.0</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-[4px] p-6 bg-[#fefefe] border border-[#432c2d]/10 flex flex-col justify-between hover:border-[#432c2d]/25 transition-all shadow-2xs hover:shadow-xs min-h-[140px]"
            >
              <div className="flex items-center mb-3">
                <div className="flex items-center text-[#432c2d]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#432c2d] text-[#432c2d]" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#432c2d]/85 leading-relaxed italic flex-1">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
