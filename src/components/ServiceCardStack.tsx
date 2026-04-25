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
      'Structural steel detailing forms the backbone of any steel construction project, translating design intent into precise, fabrication-ready drawings. This includes beams, columns, braces, trusses, and all primary load-bearing components. Accuracy at this stage ensures seamless fabrication and smooth on-site erection, reducing costly rework and delays while maintaining structural integrity.',
      'At Struzon, structural detailing is approached with a strong focus on precision, coordination, and constructability. Every drawing is developed with a clear understanding of engineering intent and fabrication feasibility, ensuring that all components fit together perfectly during assembly. This reduces uncertainties and enhances overall project efficiency.',
      'With extensive experience across diverse projects, Struzon ensures that each detailing package is aligned with global standards and project-specific requirements. The result is a streamlined workflow from design to erection, enabling clients to execute projects confidently and without disruption.'
    ],
    image: imgStructural,
    tags: ['AUTOMATED QC', '3D DETAILING']
  },
  {
    title: 'MISC STEEL DETAILING',
    subLabel: 'STRUZON ENGINEERING DIVISION',
    description: [
      'Miscellaneous steel detailing covers secondary components such as staircases, handrails, ladders, platforms, and other non-structural elements that complete a project. Though often considered minor, these elements require careful coordination to ensure functionality, safety, and aesthetic consistency within the overall structure.',
      'Struzon brings a meticulous approach to miscellaneous detailing, ensuring that each component is clearly defined and seamlessly integrated into the broader project. Attention to detail in these elements helps eliminate installation challenges and ensures compliance with safety standards.',
      'By combining practical knowledge with detailed modeling, Struzon delivers drawings that are easy to interpret and execute. This allows fabricators and contractors to handle even intricate components efficiently, ensuring that no part of the project is overlooked.'
    ],
    image: imgMisc,
    tags: ['AUTOMATED QC', '3D COORDINATION']
  },
  {
    title: 'SPECIAL METAL DETAILING',
    subLabel: 'STRUZON ARCHITECTURAL DIVISION',
    description: [
      'Special metal detailing involves customized and architecturally driven elements that demand both creativity and technical expertise. These include decorative facades, complex geometries, feature staircases, and unique metal installations that define the visual appeal of a structure.',
      'Struzon specializes in transforming complex design concepts into practical, buildable solutions. Each project is handled with a balance of innovation and engineering discipline, ensuring that aesthetic goals are achieved without compromising structural feasibility.',
      'Through advanced tools and a deep understanding of fabrication processes, Struzon is able to execute highly intricate designs with confidence. This capability allows clients to push creative boundaries while still maintaining efficiency and precision in execution.'
    ],
    image: imgSpecial,
    tags: ['CUSTOM FABRICATION', 'ARCHITECTURAL DESIGN']
  },
  {
    title: 'CONNECTION DESIGN & PE STAMPING',
    subLabel: 'STRUZON ENGINEERING DIVISION',
    description: [
      'Connection design plays a crucial role in ensuring the stability and performance of a steel structure. It defines how different members interact, transfer loads, and maintain overall integrity under various conditions. Each connection must be carefully engineered to meet safety and compliance standards.',
      'At Struzon, connection design is handled with a strong emphasis on accuracy and reliability. From simple shear connections to complex moment connections, each design is developed through detailed analysis and adherence to recognized industry codes.',
      'With the inclusion of Professional Engineer (PE) stamping, Struzon provides an added layer of assurance and credibility. This ensures that all designs meet regulatory requirements, making them suitable for a wide range of projects across different regions.'
    ],
    image: imgConnection,
    tags: ['PE STAMPING', 'LOAD ANALYSIS']
  },
  {
    title: 'BIM & ABM',
    subLabel: 'STRUZON DIGITAL DIVISION',
    description: [
      'Building Information Modeling (BIM) and Advanced Bill of Materials (ABM) play a vital role in modern construction by improving coordination and decision-making. BIM creates a detailed 3D environment that allows teams to visualize the entire project and identify potential conflicts before construction begins.',
      'Struzon leverages BIM to enhance collaboration between architects, engineers, and contractors. This proactive approach minimizes errors, reduces rework, and ensures that all disciplines are aligned throughout the project lifecycle.',
      'In addition, Struzon’s ABM outputs provide highly accurate material data, enabling better planning and procurement. This not only reduces waste but also helps clients maintain control over project costs and timelines with greater confidence.'
    ],
    image: imgBim,
    tags: ['VDC MANAGEMENT', 'CLASH DETECTION']
  },
  {
    title: 'MATERIAL TAKEOFF & ESTIMATION',
    subLabel: 'STRUZON ESTIMATION DIVISION',
    description: [
      'Material takeoff and estimation are critical for effective project planning, offering a detailed breakdown of required materials and associated costs. Accurate estimation ensures better budgeting and prevents unexpected financial challenges during execution.',
      'Struzon delivers comprehensive and precise material takeoffs that support informed decision-making. Each quantity is carefully calculated to reflect actual project needs, reducing the risk of over-ordering or material shortages.',
      'With a structured and detail-oriented approach, Struzon helps clients optimize resource allocation and improve overall project efficiency. This ensures smoother execution and contributes to maintaining profitability across projects.'
    ],
    image: imgTakeoff,
    tags: ['COST ESTIMATION', 'MATERIAL PLANNING']
  },
  {
    title: 'RESEARCH AND DEVELOPMENT(R&D)',
    subLabel: 'STRUZON INNOVATION DIVISION',
    description: [
      'Research and Development is essential for staying competitive in an ever-evolving engineering and construction landscape. It involves exploring new technologies, refining workflows, and adopting innovative methods to improve efficiency and quality.',
      'Struzon places a strong emphasis on R&D to continuously enhance its capabilities and service offerings. By staying updated with the latest industry trends and tools, the company ensures that its processes remain relevant and effective.',
      'Through ongoing innovation and process improvement, Struzon is able to deliver smarter, faster, and more efficient solutions. This forward-thinking approach allows clients to benefit from modern practices while maintaining high standards of quality and performance.'
    ],
    image: imgRD,
    tags: ['INNOVATION', 'TECH ADOPTION']
  }
];

export default function ServiceCardStack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f0f4f8] py-12 md:py-24 px-4 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1700px] w-full">
        {/* Horizontal Accordion Container */}
        <div
          className="hidden lg:flex flex-row h-[clamp(750px,85vh,1000px)] gap-4"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isAnyActive = activeIndex !== null;

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
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {/* Vertical Glass Stripe — Flush Edge-to-Edge with Red Fade */}
                      <div className="h-full w-[55px] md:w-[65px] backdrop-blur-2xl bg-white/[0.05] flex items-center justify-center group-hover:bg-brand-red/[0.12] transition-all duration-700 shadow-[0_0_40px_rgba(199,31,36,0.3)] relative overflow-hidden">
                        {/* More Intense Red Fade Edges */}
                        <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-r from-brand-red/50 to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-[4px] bg-gradient-to-l from-brand-red/50 to-transparent" />

                        <span
                          className="text-white font-display font-black text-[13px] xl:text-[15px] tracking-[0.1em] uppercase whitespace-nowrap text-center group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                          style={{
                            writingMode: 'vertical-rl',
                            wordSpacing: '0.4em'
                          }}
                        >
                          {service.title.split(/(\(.*\))/).map((part, i) => {
                            const isParen = part.trim().startsWith('(');
                            return (
                              <span
                                key={i}
                                style={{
                                  textOrientation: isParen ? 'sideways' : 'upright',
                                  wordSpacing: isParen ? 'normal' : 'inherit',
                                  display: 'inline-block',
                                  ...(isParen ? { transform: 'rotate(-90deg)', margin: '1rem 0' } : {})
                                }}
                              >
                                {part}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active Card Content */}
                <motion.div
                  className={`h-full w-full flex flex-col p-8 xl:p-10 overflow-hidden transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  {/* 1. Header Bar */}
                  <div className="flex justify-between items-center mb-3 shrink-0">
                    <div className="flex items-center gap-4">
                      <div className="h-[2px] w-12 bg-brand-red" />
                      <div className="text-xs font-black text-brand-red uppercase tracking-[0.3em]">{service.subLabel}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] font-bold text-navy/30 uppercase tracking-widest">LOD 400 • QUALITY VERIFIED</div>
                    </div>
                  </div>

                  {/* 2. Main Large Title */}
                  <div className="mb-4 shrink-0">
                    <h2 className="text-3xl xl:text-5xl font-display font-black text-navy leading-[0.9] tracking-tighter uppercase max-w-4xl">
                      {service.title}
                    </h2>
                  </div>

                  {/* 3. Balanced Grid (Image & Text) */}
                  <div className="flex flex-row gap-8 xl:gap-14 items-start flex-1 min-h-0">
                    {/* Image Frame */}
                    <div className="w-[42%] h-full relative rounded-3xl overflow-hidden shadow-2xl shrink-0 group/img">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-navy/5" />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col h-full">
                      {/* Description Area with Scroll Support */}
                      <div className="flex-1 space-y-6 pr-6 overflow-y-auto custom-scrollbar pt-1">
                        <div className="border-l-[6px] border-brand-red pl-8">
                          <p className="text-navy text-lg xl:text-xl font-display font-medium leading-[1.2] italic">
                            "{service.description[0]}"
                          </p>
                        </div>
                        <div className="space-y-4 text-navy/70 text-[13px] xl:text-base leading-relaxed font-medium">
                          <p>{service.description[1]}</p>
                          <p>{service.description[2]}</p>
                        </div>
                      </div>

                      {/* Integrated Buttons Tier */}
                      <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-navy/5 shrink-0">
                        {service.tags.map((tag, tIndex) => (
                          <button
                            key={tIndex}
                            className={`px-8 py-3.5 rounded-xl text-[9px] font-display font-black uppercase tracking-widest transition-all
                                  ${tIndex === 0 ? 'bg-navy text-white shadow-xl hover:-translate-y-1' : 'bg-brand-red text-white shadow-xl hover:-translate-y-1'}`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer removed per user request */}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet View — Premium Vertical Accordion */}
        <div className="lg:hidden flex flex-col gap-6 py-10">
          {services.map((service, i) => {
            const isMobileActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(isMobileActive ? null : i)}
                className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-500 ${isMobileActive ? 'bg-white shadow-2xl border-brand-red/20' : 'bg-navy shadow-lg'}`}
              >
                {/* Background Image — Visible when collapsed */}
                {!isMobileActive && (
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-30"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                )}

                {/* Header — Always Visible */}
                <div className={`relative p-8 flex items-center justify-between cursor-pointer z-10 ${isMobileActive ? 'text-navy' : 'text-white'}`}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <div className="h-[1.5px] w-6 bg-brand-red" />
                      <div className={`text-[9px] font-black uppercase tracking-widest ${isMobileActive ? 'text-navy/40' : 'text-white/60'}`}>{service.subLabel}</div>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-display font-black uppercase leading-tight tracking-tighter ${isMobileActive ? 'text-navy' : 'text-white'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-500 ${isMobileActive ? 'bg-brand-red text-white rotate-180' : 'bg-white/10 text-white'}`}>
                    <ChevronRight size={20} className={isMobileActive ? 'rotate-90' : ''} />
                  </div>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isMobileActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 flex flex-col">
                        {/* Image Section */}
                        <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl mb-8">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-navy/5" />
                        </div>

                        {/* Text Content */}
                        <div className="border-l-4 border-brand-red pl-6 mb-6">
                          <p className="text-navy text-base font-bold leading-snug italic tracking-tight">
                            "{service.description[0]}"
                          </p>
                        </div>

                        <div className="space-y-4 text-navy/60 text-xs sm:text-sm leading-relaxed font-medium mb-8">
                          <p>{service.description[1]}</p>
                          <p>{service.description[2]}</p>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-8">
                          {service.tags.map((tag, tIndex) => (
                            <div
                              key={tIndex}
                              className="bg-slate-50 border border-navy/5 text-navy px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>

                        <button className="flex items-center justify-center gap-3 w-full bg-navy text-white py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-red transition-colors shadow-lg shadow-navy/20">
                          Get a Detailed Quote <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
