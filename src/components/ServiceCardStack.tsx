import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';

import imgStructural from "@/assets/services/Structural Steel Detailing.png";
import imgMisc from "@/assets/services/MISC Steel Detailing.png";
import imgSpecial from "@/assets/services/Special Metal Detailing.png";
import imgConnection from "@/assets/services/Connection Design & PE Stamping.png";
import imgBim from "@/assets/services/BIM & ABM.png";
import imgTakeoff from "@/assets/services/Material Takeoff & Estimation.png";
import imgRD from "@/assets/services/R & D.png";

interface ServiceData {
  title: string;
  subLabel?: string;
  description: string[];
  image: string;
  tags: string[];
}

const services: ServiceData[] = [
  {
    title: 'STRUCTURAL STEEL DETAILING',
    subLabel: 'STRUZON ENGINEERING DIVISION',
    description: [
      'Structural steel detailing forms the backbone of any steel construction project, translating design intent into precise, fabrication-ready drawings. Accuracy at this stage ensures seamless fabrication and smooth on-site erection, reducing costly rework and delays while maintaining structural integrity.',
      'At Struzon, structural detailing is approached with a strong focus on precision, coordination, and constructability. Every drawing is developed with a clear understanding of engineering intent and fabrication feasibility, ensures project efficiency.'
    ],
    image: imgStructural,
    tags: ['AUTOMATED QC', '3D DETAILING']
  },
  {
    title: 'MISC STEEL DETAILING',
    subLabel: 'STRUZON ENGINEERING DIVISION',
    description: [
      'Miscellaneous steel detailing covers secondary components such as staircases, handrails, ladders, platforms, and other non-structural elements that complete a project. Though often considered minor, these elements require careful coordination to ensure functionality, safety, and aesthetic consistency within the overall structure.',
      'Struzon brings a meticulous approach to miscellaneous detailing, ensuring that each component is clearly defined and seamlessly integrated into the broader project. Attention to detail in these elements helps eliminate installation challenges and ensures compliance with safety standards.'
    ],
    image: imgMisc,
    tags: ['AUTOMATED QC', '3D COORDINATION']
  },
  {
    title: 'SPECIAL METAL DETAILING',
    subLabel: 'STRUZON ARCHITECTURAL DIVISION',
    description: [
      'Special metal detailing involves customized and architecturally driven elements that demand both creativity and technical expertise. From unique metal installations to complex facades, these elements define the visual appeal of a structure.',
      'Struzon specializes in transforming complex architectural concepts into practical, buildable solutions. Each project is handled with a balance of innovation and engineering discipline, ensuring aesthetic goals are met without compromising structural requirements.'
    ],
    image: imgSpecial,
    tags: ['CUSTOM FABRICATION', 'ARCHITECTURAL DESIGN']
  },
  {
    title: 'CONNECTION DESIGN & PE STAMPING',
    subLabel: 'STRUZON ENGINEERING DIVISION',
    description: [
      'Connection design plays a crucial role in ensuring the stability and performance of a steel structure. It defines how different members interact, transfer loads, and maintain overall integrity under various conditions.',
      'At Struzon, connection design is handled with a strong emphasis on accuracy and reliability. With the inclusion of Professional Engineer (PE) stamping, Struzon provides an added layer of assurance and credibility for every fabricator and contractor.'
    ],
    image: imgConnection,
    tags: ['PE STAMPING', 'LOAD ANALYSIS']
  },
  {
    title: 'BIM & ABM',
    subLabel: 'STRUZON DIGITAL DIVISION',
    description: [
      'Building Information Modeling (BIM) and Advanced Bill of Materials (ABM) play a vital role in modern construction by improving coordination and decision-making. BIM creates a detailed 3D environment for visualization.',
      'Struzon leverages BIM to enhance collaboration between architects, engineers, and contractors. This proactive approach minimizes errors and ensures disciplines are aligned throughout the project lifecycle, leading to smarter construction.'
    ],
    image: imgBim,
    tags: ['VDC MANAGEMENT', 'CLASH DETECTION']
  },
  {
    title: 'MATERIAL TAKEOFF & ESTIMATION',
    subLabel: 'STRUZON ESTIMATION DIVISION',
    description: [
      'Material takeoff and estimation are critical for effective project planning, offering a detailed breakdown of required materials and costs. Accurate estimation ensures better budgeting and prevents financial challenges.',
      'Struzon delivers comprehensive and precise material takeoffs that support informed decision-making. Each quantity is carefully calculated to reflect actual project needs, reducing the risk of over-ordering and waste.'
    ],
    image: imgTakeoff,
    tags: ['COST ESTIMATION', 'MATERIAL PLANNING']
  },
  {
    title: 'RESEARCH AND DEVELOPMENT (R&D)',
    subLabel: 'STRUZON INNOVATION DIVISION',
    description: [
      'Research and Development is essential for staying competitive in an ever-evolving engineering and construction landscape. Adoption of innovative methods improves efficiency and quality across the board.',
      'Struzon places a strong emphasis on R&D to continuously enhance its capabilities and service offerings. By staying updated with industry trends and software advancements, the company ensures processes remain relevant and effective.'
    ],
    image: imgRD,
    tags: ['INNOVATION', 'TECH ADOPTION']
  }
];

export default function ServiceCardStack() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-[#f0f4f8] py-20 px-4 md:px-10">
      <div className="mx-auto max-w-[1800px]">
        {/* Horizontal Accordion Container */}
        <div className="hidden lg:flex flex-row h-[850px] gap-4">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                layout
                initial={false}
                animate={{ 
                  flex: isActive ? 18 : 1,
                  backgroundColor: isActive ? '#ffffff' : '#2b415f'
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`relative cursor-pointer rounded-[3.5rem] overflow-hidden shadow-2xl group`}
              >
                {/* Background Tint for Slices */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-opacity opacity-40 duration-500" 
                      style={{ backgroundImage: `url(${service.image})` }} 
                    />
                  )}
                </AnimatePresence>

                {/* Vertical Label */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span 
                        className="text-white/90 font-display font-black text-xs tracking-[0.4em] uppercase rotate-180"
                        style={{ writingMode: 'vertical-rl' }}
                      >
                        {service.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active Card Content */}
                <motion.div 
                  className={`h-full w-full flex flex-col p-12 xl:p-20 overflow-hidden transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                   {/* 1. Header Bar */}
                   <div className="flex justify-between items-center mb-6 shrink-0">
                      <div className="flex items-center gap-4">
                         <div className="h-[2px] w-12 bg-brand-red" />
                         <div className="text-[11px] font-black text-brand-red uppercase tracking-[0.2em]">{service.subLabel}</div>
                      </div>
                      <div className="text-right">
                         <div className="text-[9px] font-bold text-navy/30 uppercase tracking-widest">LOD 400 • QUALITY VERIFIED</div>
                      </div>
                   </div>

                   {/* 2. Main Large Title */}
                   <div className="mb-10 shrink-0">
                      <h2 className="text-4xl xl:text-6xl font-display font-black text-navy leading-[0.9] tracking-tighter uppercase max-w-4xl">
                         {service.title}
                      </h2>
                   </div>

                   {/* 3. Balanced Grid (Image & Text) */}
                   <div className="flex flex-row gap-16 items-start flex-1 min-h-0">
                      {/* Image Frame */}
                      <div className="w-[48%] h-full relative rounded-[3rem] overflow-hidden shadow-2xl shrink-0 group/img">
                         <img 
                           src={service.image} 
                           alt={service.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                         />
                         <div className="absolute inset-0 bg-navy/5" />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 flex flex-col h-full">
                         <div className="flex-1 space-y-8 pr-6 overflow-y-auto custom-scrollbar">
                            <div className="border-l-[6px] border-brand-red pl-10">
                               <p className="text-navy text-lg xl:text-2xl font-display font-bold leading-tight italic">
                                  "{service.description[0].substring(0, 200)}..."
                               </p>
                            </div>
                            <p className="text-navy/60 text-base xl:text-lg leading-relaxed font-medium">
                               {service.description[1]}
                            </p>
                         </div>
                         
                         {/* Integrated Buttons Tier */}
                         <div className="flex flex-wrap items-center gap-6 mt-10 shrink-0">
                            {service.tags.map((tag, tIndex) => (
                              <button 
                                key={tIndex} 
                                className={`px-10 py-4 rounded-xl text-xs font-display font-black uppercase tracking-widest transition-all
                                  ${tIndex === 0 ? 'bg-navy text-white shadow-xl hover:-translate-y-1' : 'bg-brand-red text-white shadow-xl hover:-translate-y-1'}`}
                              >
                                {tag}
                              </button>
                            ))}
                            <button className="flex items-center gap-2 text-navy/50 font-black text-xs uppercase tracking-widest hover:text-navy transition-colors ml-4">
                               Learn More <ArrowUpRight size={16} />
                            </button>
                         </div>
                      </div>
                   </div>

                   {/* 4. Bottom Footer Decoration */}
                   <div className="mt-12 pt-10 border-t border-navy/10 flex justify-between items-center opacity-30 shrink-0">
                      <div className="text-[9px] font-black uppercase tracking-[0.5em] text-navy">STRUZON_{service.title.split(' ')[0]}_DESIGN_VR_24</div>
                      <div className="flex items-center gap-12">
                         <ChevronLeft size={28} className="cursor-pointer hover:text-brand-red" />
                         <div className="w-12 h-[1px] bg-navy/40" />
                         <ChevronRight size={28} className="cursor-pointer hover:text-brand-red" />
                      </div>
                   </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View — Premium Card List */}
        <div className="lg:hidden flex flex-col gap-12 py-10">
           {services.map((service, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(31,58,95,0.08)] border border-navy/5 overflow-hidden flex flex-col"
             >
                {/* Image Section */}
                <div className="relative h-72 w-full overflow-hidden">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-navy/10" />
                   <div className="absolute top-6 left-6 flex items-center gap-3">
                      <div className="h-[2px] w-8 bg-brand-red shadow-[0_0_10px_rgba(200,32,46,0.5)]" />
                      <div className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-md">{service.subLabel}</div>
                   </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 flex flex-col">
                   <h3 className="text-3xl font-display font-black text-navy uppercase leading-tight mb-6 tracking-tighter">
                      {service.title}
                   </h3>
                   
                   <div className="border-l-4 border-brand-red pl-6 mb-8">
                      <p className="text-navy/80 text-lg font-bold leading-snug italic tracking-tight">
                         "{service.description[0].substring(0, 150)}..."
                      </p>
                   </div>
                   
                   <p className="text-navy/60 text-sm leading-relaxed font-medium mb-10">
                      {service.description[1]}
                   </p>

                   <div className="flex flex-wrap gap-3 mt-auto">
                      {service.tags.map((tag, tIndex) => (
                        <div 
                           key={tIndex} 
                           className="bg-slate-50 border border-navy/5 text-navy px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest"
                        >
                           {tag}
                        </div>
                      ))}
                   </div>

                   <button className="mt-10 flex items-center justify-center gap-3 w-full bg-navy text-white py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-red transition-colors shadow-lg shadow-navy/20">
                      Learn More <ArrowUpRight size={16} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
