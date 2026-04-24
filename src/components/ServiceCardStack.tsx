import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Import Service Images
import imgStructural from '@/assets/services/Structural Steel Detailing.png';
import imgMisc from '@/assets/services/MISC Steel Detailing.png';
import imgSpecial from '@/assets/services/Special Metal Detailing.png';
import imgConnection from '@/assets/services/Connection Design & PE Stamping.png';
import imgBim from '@/assets/services/BIM & ABM.png';
import imgTakeoff from '@/assets/services/Material Takeoff & Estimation.png';
import imgRD from '@/assets/services/R & D.png';

interface ServiceProject {
  title: string;
  description: string | string[];
  image: string;
}

// ─── Desktop horizontal accordion card ────────────────────────────────────────
const DesktopServiceCard = ({
  title,
  description,
  image,
  isHovered,
  onHover,
}: ServiceProject & { index: number; isHovered: boolean; onHover: () => void }) => {
  const paragraphs = Array.isArray(description) ? description : [description];
  const [firstParagraph, ...remainingParagraphs] = paragraphs;

  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      initial={false}
      animate={{
        flex: isHovered ? 15 : 1,
        backgroundColor: isHovered ? '#FFFFFF' : '#F1F5F9',
      }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`relative h-full overflow-hidden cursor-pointer border-[1px] border-white/20 -ml-[2px] first:ml-0 rounded-[2.5rem]
        ${isHovered ? 'z-20 shadow-[0_40px_100px_rgba(0,0,0,0.3)]' : 'z-0 shadow-lg hover:z-10'}`}
    >
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-white/80 font-display font-bold uppercase tracking-[0.4em] whitespace-nowrap origin-center -rotate-90 text-[10px] md:text-sm">
                {title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full p-4 md:p-8 flex flex-col pointer-events-none">
        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex flex-col pointer-events-auto"
            >
              <div className="mb-6 md:mb-8 border-b border-navy/10 pb-6 flex items-end justify-between">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1F3A5F] uppercase tracking-tighter leading-none">
                  {title}
                </h2>
                <div className="hidden lg:block text-right">
                  <p className="text-[10px] text-brand-red font-black uppercase tracking-widest leading-tight">
                    Struzon Engineering Division <br />
                    <span className="text-navy/30">LOD 400 - Quality Verified</span>
                  </p>
                </div>
              </div>

              <div className="flex-1 min-h-0 flex flex-col">
                <div className="w-full">
                  <div className="flex flex-col lg:flex-row gap-8 mb-8 items-start">
                    <div className="w-full lg:w-[45%] shrink-0">
                      <div className="relative aspect-video lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                      </div>
                    </div>
                    <div className="flex-1 lg:pt-4">
                      <div className="bg-brand-red/[0.04] border-l-8 border-brand-red p-8 rounded-r-[2.5rem]">
                        <p className="text-navy text-xl lg:text-2xl font-display font-medium leading-relaxed italic">
                          {firstParagraph}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-y-8">
                    {remainingParagraphs.map((p, idx) => (
                      <p key={idx} className="text-navy/70 text-sm lg:text-base leading-relaxed font-sans first:font-bold first:text-navy/90">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-navy/5 flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="px-5 py-1.5 bg-navy text-white text-[9px] uppercase font-bold tracking-widest rounded-full">Automated QC</div>
                  <div className="px-5 py-1.5 bg-brand-red/10 text-brand-red text-[9px] uppercase font-bold tracking-widest rounded-full border border-brand-red/20">3D Coordination</div>
                </div>
                <div className="text-[10px] font-mono text-navy/20 uppercase tracking-widest">Struzon_Spec_Detail_V8</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── Mobile vertical accordion card ───────────────────────────────────────────
const MobileServiceCard = ({
  title,
  description,
  image,
  isOpen,
  onToggle,
}: ServiceProject & { isOpen: boolean; onToggle: () => void }) => {
  const paragraphs = Array.isArray(description) ? description : [description];
  const [firstParagraph, ...remainingParagraphs] = paragraphs;

  return (
    <div className="border border-navy/10 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Header (always visible) */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 text-left"
      >
        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 border-navy/5">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[9px] uppercase tracking-widest text-brand-red font-black mb-0.5">Struzon Engineering</div>
          <h3 className="text-sm font-display font-bold text-navy uppercase leading-tight truncate">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={isOpen ? 'text-brand-red' : 'text-navy/40'} />
        </motion.div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 space-y-4 border-t border-navy/5 pt-4">
              {/* Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Primary description */}
              <div className="border-l-4 border-brand-red pl-4 py-1 bg-brand-red/[0.03] rounded-r-xl">
                <p className="text-navy text-sm font-display font-medium leading-relaxed italic">
                  {firstParagraph}
                </p>
              </div>

              {/* Secondary paragraphs */}
              {remainingParagraphs.map((p, idx) => (
                <p key={idx} className="text-navy/70 text-xs leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Footer badges */}
              <div className="flex gap-3 pt-2 border-t border-navy/5">
                <div className="px-3 py-1 bg-navy text-white text-[8px] uppercase font-bold tracking-wider rounded-full">Automated QC</div>
                <div className="px-3 py-1 bg-brand-red/10 text-brand-red text-[8px] uppercase font-bold tracking-wider rounded-full border border-brand-red/20">3D Coordination</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Service data ──────────────────────────────────────────────────────────────
const serviceData: ServiceProject[] = [
  {
    title: 'Structural Steel Detailing',
    description: [
      'Structural steel detailing forms the backbone of any steel construction project, translating design intent into precise, fabrication-ready drawings. This includes beams, columns, braces, trusses, and all primary load-bearing components. Accuracy at this stage ensures seamless fabrication and smooth on-site erection, reducing costly rework and delays while maintaining structural integrity.',
      'At Struzon, structural detailing is approached with a strong focus on precision, coordination, and constructability.',
      'Every drawing is developed with a clear understanding of engineering intent and fabrication feasibility, ensuring that all components fit together perfectly during assembly. This reduces uncertainties and enhances overall project efficiency.',
    ],
    image: imgStructural,
  },
  {
    title: 'MISC Steel Detailing',
    description: [
      'Miscellaneous steel detailing covers secondary components such as staircases, handrails, ladders, platforms, and other non-structural elements that complete a project. Though often considered minor, these elements require careful coordination to ensure functionality, safety, and aesthetic consistency within the overall structure.',
      'Struzon brings a meticulous approach to miscellaneous detailing, ensuring that each component is clearly defined and seamlessly integrated into the broader project. Attention to detail in these elements helps eliminate installation challenges and ensures compliance with safety standards.',
      'By combining practical knowledge with detailed modeling, Struzon delivers drawings that are easy to interpret and execute. This allows fabricators and contractors to handle even intricate components efficiently, ensuring that no part of the project is overlooked.',
    ],
    image: imgMisc,
  },
  {
    title: 'Special Metal Detailing',
    description: [
      'Special metal detailing involves customized and architecturally driven elements that demand both creativity and technical expertise. These include decorative facades, complex geometries, feature staircases, and unique metal installations that define the visual appeal of a structure.',
      'Struzon specializes in transforming complex design concepts into practical, buildable solutions. Each project is handled with a balance of innovation and engineering discipline, ensuring that aesthetic goals are achieved without compromising structural feasibility.',
      'Through advanced tools and a deep understanding of fabrication processes, Struzon is able to execute highly intricate designs with confidence. This capability allows clients to push creative boundaries while still maintaining efficiency and precision in execution.',
    ],
    image: imgSpecial,
  },
  {
    title: 'Connection Design & PE Stamping',
    description: [
      'Connection design plays a crucial role in ensuring the stability and performance of a steel structure. It defines how different members interact, transfer loads, and maintain overall integrity under various conditions. Each connection must be carefully engineered to meet safety and compliance standards.',
      'At Struzon, connection design is handled with a strong emphasis on accuracy and reliability. From simple shear connections to complex moment connections, each design is developed through detailed analysis and adherence to recognized industry codes.',
      'With the inclusion of Professional Engineer (PE) stamping, Struzon provides an added layer of assurance and credibility. This ensures that all designs meet regulatory requirements, making them suitable for a wide range of projects across different regions.',
    ],
    image: imgConnection,
  },
  {
    title: 'BIM & ABM',
    description: [
      'Building Information Modeling (BIM) and Advanced Bill of Materials (ABM) play a vital role in modern construction by improving coordination and decision-making. BIM creates a detailed 3D environment that allows teams to visualize the entire project and identify potential conflicts before construction begins.',
      'Struzon leverages BIM to enhance collaboration between architects, engineers, and contractors. This proactive approach minimizes errors, reduces rework, and ensures that all disciplines are aligned throughout the project lifecycle.',
      "In addition, Struzon's ABM outputs provide highly accurate material data, enabling better planning and procurement. This not only reduces waste but also helps clients maintain control over project costs and timelines with greater confidence.",
    ],
    image: imgBim,
  },
  {
    title: 'Material Takeoff & Estimation',
    description: [
      'Material takeoff and estimation are critical for effective project planning, offering a detailed breakdown of required materials and associated costs. Accurate estimation ensures better budgeting and prevents unexpected financial challenges during execution.',
      'Struzon delivers comprehensive and precise material takeoffs that support informed decision-making. Each quantity is carefully calculated to reflect actual project needs, reducing the risk of over-ordering or material shortages.',
      'Struzon delivers comprehensive and precise material takeoffs that support informed decision-making. Each quantity is carefully calculated to reflect actual project needs, reducing the risk of over-ordering or material shortages.',
    ],
    image: imgTakeoff,
  },
  {
    title: 'Research and Development',
    description: [
      'Research and Development is essential for staying competitive in an ever-evolving engineering and construction landscape. It involves exploring new technologies, refining workflows, and adopting innovative methods to improve efficiency and quality.',
      'Struzon places a strong emphasis on R&D to continuously enhance its capabilities and service offerings. By staying updated with the latest industry trends and tools, the company ensures that its processes remain relevant and effective.',
      'Through ongoing innovation and process improvement, Struzon is able to deliver smarter, faster, and more efficient solutions. This forward-thinking approach allows clients to benefit from modern practices while maintaining high standards of quality and performance.',
    ],
    image: imgRD,
  },
];

// ─── Main export ───────────────────────────────────────────────────────────────
export default function ServiceCardStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(0); // first one open by default

  return (
    <>
      {/* ── DESKTOP: horizontal accordion (lg and above) ── */}
      <section className="hidden lg:flex w-full h-[100vh] min-h-[700px] overflow-hidden px-12 py-12 bg-slate-100 font-sans">
        <div className="flex w-full h-full gap-2 items-stretch" onMouseLeave={() => setHoveredIndex(null)}>
          {serviceData.map((service, i) => (
            <DesktopServiceCard
              key={i}
              {...service}
              index={i}
              isHovered={hoveredIndex === i}
              onHover={() => setHoveredIndex(i)}
            />
          ))}
        </div>
      </section>

      {/* ── MOBILE / TABLET: vertical accordion (below lg) ── */}
      <section className="lg:hidden w-full bg-slate-50 px-4 py-8 font-sans space-y-3">
        <div className="text-center mb-6">
          <div className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-bold mb-1">Our Capabilities</div>
          <h2 className="text-2xl font-display font-bold text-navy uppercase tracking-tight">Our Services</h2>
        </div>
        {serviceData.map((service, i) => (
          <MobileServiceCard
            key={i}
            {...service}
            isOpen={openMobileIndex === i}
            onToggle={() => setOpenMobileIndex(openMobileIndex === i ? null : i)}
          />
        ))}
      </section>
    </>
  );
}
