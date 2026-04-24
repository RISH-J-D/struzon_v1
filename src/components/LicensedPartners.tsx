import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgTekla from '@/assets/icons/tekla.png';
import imgSDS2 from '@/assets/icons/sds2.png';
import imgDraftSight from '@/assets/icons/draftsight-logo.png';
import imgBluebeam from '@/assets/icons/revu.png';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: 'Tekla Structures', img: imgTekla },
  { name: 'SDS2 Modeling', img: imgSDS2 },
  { name: 'DraftSight', img: imgDraftSight },
  { name: 'Bluebeam Revu', img: imgBluebeam },
];

export default function LicensedPartners() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.partner-logo', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mt-12 pt-12 border-t border-navy/5 px-4">
      <div className="text-[10px] uppercase tracking-[0.4em] text-navy/40 font-black mb-12 text-center">Licensed Partners</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-20">
        {partners.map((p) => (
          <div key={p.name} className="partner-logo group flex flex-col items-center gap-3">
            <div className="relative w-16 sm:w-20 md:w-24 aspect-video flex items-center justify-center">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-contain transition-all duration-500 drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-110"
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-navy/40 group-hover:text-navy transition-colors duration-500 text-center">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
