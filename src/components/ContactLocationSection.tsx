import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactLocationSection: React.FC = () => {
  const todayGreekDayIndex = new Date().getDay(); // 0 is Sun, 1 is Mon, etc.
  const todayIndex = todayGreekDayIndex === 0 ? 6 : todayGreekDayIndex - 1;

  return (
    <section id="location" className="py-16 md:py-20 lg:py-24 bg-[#fefefe] border-t border-[#432c2d]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          {/* Kept red because it has the font from "Our Studio Philosophy" */}
          <span className="font-script text-2xl text-[#c22026]">Visit Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#432c2d] mt-1 mb-3">
            Τοποθεσία & Ωράριο Λειτουργίας
          </h2>
          <p className="text-[#432c2d]/75 text-sm sm:text-base">
            Σας περιμένουμε στην Ανατολή Ιωαννίνων, σε έναν φωτεινό και άνετο χώρο με εύκολη πρόσβαση και δωρεάν στάθμευση.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Operating Hours */}
          <div className="bg-[#fefefe] rounded-[4px] p-6 sm:p-8 border border-[#432c2d]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#432c2d]">
                <Clock className="w-4 h-4" />
                <h3 className="font-serif font-bold text-base">
                  Ωράριο Λειτουργίας
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {SALON_INFO.hours.map((item, idx) => {
                  const isSunday = item.day === 'Κυριακή';
                  const isToday = idx === todayIndex && !isSunday;

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-[4px] transition-colors border ${
                        isSunday
                          ? 'text-[#432c2d]/60 border-transparent'
                          : isToday
                          ? 'border-[#432c2d] text-[#432c2d] font-bold bg-transparent'
                          : 'text-[#432c2d]/80 border-transparent'
                      }`}
                    >
                      <span>{item.day}</span>
                      {item.hours === 'Κλειστά' ? (
                        <span className="text-[#432c2d]/60 font-semibold">
                          Κλειστά
                        </span>
                      ) : (
                        <span className="text-[#432c2d] font-semibold">
                          {item.hours}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#432c2d]/10 text-[11px] text-[#432c2d]/60 text-center">
              * Συνιστάται προγραμματισμός ραντεβού πριν από την επίσκεψή σας.
            </div>
          </div>

          {/* Studio Details */}
          <div className="bg-[#fefefe] rounded-[4px] p-6 sm:p-8 border border-[#432c2d]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#432c2d]">
                  <MapPin className="w-4 h-4" />
                  <h3 className="font-serif font-bold text-base">
                    Διεύθυνση Στούντιο
                  </h3>
                </div>
                <p className="text-sm text-[#432c2d]/80">
                  {SALON_INFO.address}, Τ.Κ. {SALON_INFO.postalCode}
                </p>
                <p className="text-xs text-[#432c2d]/60 font-medium mt-0.5">
                  {SALON_INFO.area}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#432c2d]/10">
              <div className="flex items-center gap-2 mb-1.5 text-[#432c2d]">
                <Phone className="w-4 h-4" />
                <h3 className="font-serif font-bold text-base">
                  Τηλέφωνο Επικοινωνίας
                </h3>
              </div>
              <p className="text-xs text-[#432c2d]/80 mb-2">
                Καλέστε μας για ραντεβού ή οποιαδήποτε απορία:
              </p>
              <a
                href={`tel:${SALON_INFO.phoneClean}`}
                className="inline-block text-lg sm:text-xl font-serif font-bold text-[#432c2d] hover:underline"
              >
                {SALON_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
