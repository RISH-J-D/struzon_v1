import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Layers, Maximize2, Zap, Ruler, Compass, X } from "lucide-react";

export const Route = createLazyFileRoute("/projects")({
  component: ProjectsPage,
});

const projectList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1200&q=90",
    title: "Industrial Process Plant",
    tag: "Industrial",
    details: "Comprehensive steel detailing for a multi-stage process plant. Our models ensured perfect integration of structural frames with complex piping subsystems.",
    location: "USA",
    engineer: "Struzon Team"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90",
    title: "Commercial High-Rise",
    tag: "Commercial",
    details: "High-level structural steel detailing for a 40-story office tower. Focus on seismic-resistant moment connections and fabrication efficiency.",
    location: "Canada",
    engineer: "Struzon Team"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=90",
    title: "Institutional Performance Hall",
    tag: "Institutional",
    details: "Architecturally exposed structural steel detailing for complex curved roof trusses and wide-span auditorium frameworks.",
    location: "USA",
    engineer: "Struzon Team"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=1200&q=90",
    title: "Global Logistics Hub",
    tag: "Industrial",
    details: "Fast-track detailing for a massive distribution center. Optimization of repetitive shop drawings saved 15% in fabrication time.",
    location: "Germany",
    engineer: "Struzon Team"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=90",
    title: "Urban Pedestrian Bridge",
    tag: "Infrastructure",
    details: "3D detailing of a signature pedestrian bridge featuring complex geometric steel connections and AESS finishes.",
    location: "UK",
    engineer: "Struzon Team"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=90",
    title: "Mixed-Use Development",
    tag: "Residential",
    details: "Structural steel detailing for vertical residential structures with integrated retail podium segments and cantilevered sections.",
    location: "Canada",
    engineer: "Struzon Team"
  }
];

function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Our Global Portfolio"
        title="Structural Excellence"
        subtitle="Detailed with accuracy, engineered for reality. Explore our latest projects in an interactive schematic view."
      />

      <section
        className="relative py-16 md:py-32 bg-white overflow-hidden min-h-screen flex flex-col items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="blueprint-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase text-brand-red tracking-widest">Interactive Schematic</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">Engineering Gallery</h2>
          </div>
          <div className="flex gap-4 text-[9px] md:text-[10px] font-bold text-navy/40 uppercase tracking-widest border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 w-full md:w-auto">
            <span>Ref: SEC-301</span>
            <span>•</span>
            <span>Model: 3D-LOD400</span>
          </div>
        </div>

        <motion.div
          style={!isMobile ? {
            perspective: "2000px",
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          } : {}}
          className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projectList.map((project, idx) => (
            <motion.div
              layoutId={`project-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(project.id)}
              onMouseEnter={() => !isMobile && setSelectedId(project.id)}
              onMouseLeave={() => !isMobile && setSelectedId(null)}
              className="relative aspect-[16/10] bg-slate-50 border border-slate-200 shadow-sm group cursor-pointer overflow-hidden transform-gpu transition-all duration-500 hover:shadow-2xl translate-z-0"
            >
              <div className="absolute inset-0 z-0 p-3 md:p-4">
                <div className="relative w-full h-full overflow-hidden border border-slate-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <div className="px-2 py-1 bg-navy text-white text-[8px] font-black uppercase tracking-tighter">
                  OBJ_{project.id.toString().padStart(3, '0')}
                </div>
                <div className="px-2 py-1 bg-brand-red text-white text-[8px] font-black uppercase tracking-tighter">
                  {project.tag}
                </div>
              </div>

              <AnimatePresence>
                {selectedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
                    className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:w-3/4 bg-white/95 backdrop-blur-md z-30 p-6 md:p-8 flex flex-col justify-between border-t-2 md:border-t-0 md:border-l-2 border-brand-red shadow-2xl h-auto md:h-full"
                  >
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap size={14} className="text-brand-red" />
                          <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.2em]">Detailed Analysis</span>
                        </div>
                        {isMobile && (
                          <button onClick={(e) => { e.stopPropagation(); setSelectedId(null); }} className="p-2 text-navy">
                            <X size={20} />
                          </button>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-navy uppercase leading-tight">{project.title}</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">{project.details}</p>
                    </div>

                    <div className="space-y-4 md:space-y-6 mt-6">
                      <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-slate-100">
                        <div>
                          <span className="block text-[8px] md:text-[9px] uppercase font-bold text-slate-400 mb-1">Location</span>
                          <span className="text-[10px] md:text-xs font-bold text-navy">{project.location}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] md:text-[9px] uppercase font-bold text-slate-400 mb-1">Lead</span>
                          <span className="text-[10px] md:text-xs font-bold text-navy">{project.engineer}</span>
                        </div>
                      </div>
                      <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-navy text-white px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-red transition-all">
                        Request Case Study <ExternalLink size={12} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 md:mt-24 text-center opacity-20 relative z-10 px-4">
          <div className="text-[12vw] md:text-[10vw] font-display font-black uppercase text-navy leading-none">Perspective</div>
          <p className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.5em] md:tracking-[1em] text-navy mt-4">Struzon Technical Archive</p>
        </div>
      </section>

      <section className="bg-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl text-white font-display font-bold uppercase tracking-tight">Ready to Detail Your Vision?</h2>
          <p className="mt-4 text-sm md:text-base text-white/60 px-4">Partner with our engineers for high-precision 3D structural detailing and engineering services.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-brand-red px-8 md:px-10 py-3 md:py-4 font-display uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-brand-red-dark transition-all shadow-xl">
            Start a Project <Layers className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
