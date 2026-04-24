import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, BadgeCheck, Zap, Globe, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import AdvantageCarousel from "@/components/AdvantageCarousel";
import LicensedPartners from "@/components/LicensedPartners";
import CyberMap from "@/components/CyberMap";

// ASSETS
import imgHero from "@/assets/hero-structure.png";
import vdoHome from "@/assets/home-vdo.mp4";
import imgP1 from "@/assets/project-1.jpg";
import imgP2 from "@/assets/project-2.jpg";
import imgP3 from "@/assets/project-3.jpg";
import imgP4 from "@/assets/project-4.jpg";
import imgP5 from "@/assets/hero-steel.jpg";
import imgP6 from "@/assets/blueprint.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Struzon Technologies Inc. — Structural Steel Detailing & Engineering" },
      { name: "description", content: "World-class structural steel detailing, connection design, and BIM services for global fabricators and engineers." },
    ],
  }),
  component: Home,
});

const highlightsGallery = [
  { text: "Precision Detailing", desc: "Engineered accuracy for complex structures.", image: imgP1 },
  { text: "BIM Coordination", desc: "Seamless collaboration across all major disciplines.", image: imgP2 },
  { text: "Rapid Turnaround", desc: "Meeting aggressive construction schedules worldwide.", image: imgP3 },
  { text: "Global Standards", desc: "Certified workflows for AISC, BS, IS, and Eurocodes.", image: imgP4 },
  { text: "Quality Assurance", desc: "Multi-stage automated and manual QC paradigms.", image: imgP5 },
  { text: "Innovation First", desc: "Pioneering the next era of steel fabrication data.", image: imgP6 }
];

const projectImgs = [
  imgP1,
  imgP2,
  imgP3,
];

function Home() {
  return (
    <PageShell>
      {/* HERO SECTION — Adaptive Grid with Zero Collision */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy pt-20">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.2]"
          style={{ backgroundImage: `url(${imgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 w-full py-24 md:py-32 lg:py-40 z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-20"
            >
              <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-brand-red font-black mb-4 drop-shadow">Struzon Technologies Inc.</div>
              <h1 className="text-white text-[clamp(2.5rem,7vw,5.5rem)] font-display font-black shadow-white uppercase tracking-tightest leading-[0.9] mb-6">
                Structural <br className="hidden sm:block" />
                Steel <br className="hidden sm:block" />
                Detailing & <br className="hidden sm:block" />
                Engineering <br className="hidden sm:block" />
                <span className="text-brand-red">Service <br className="hidden sm:block" /> Partner</span>
              </h1>

              <p className="mt-6 text-white/80 text-base md:text-lg max-w-xl leading-relaxed font-medium mb-10 mx-auto lg:mx-0">
                A trusted partner to the construction industry — pioneers of structural detailing, engineering, design and research, delivering complex, time-sensitive projects worldwide.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 font-display font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl active:scale-95 text-sm">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 font-display font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all active:scale-95 text-sm">
                  Our Services
                </Link>
              </div>
            </motion.div>

            {/* Video Content Area — Integrated into Grid to prevent overlap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative w-full aspect-video z-20 rounded-2xl md:rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-[0_0_80px_rgba(31,58,95,0.4)] bg-navy"
            >
              <video
                src={vdoHome}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/10 pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 rounded-2xl md:rounded-[2.5rem] pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Diagonal Section Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0 w-0 border-l-[28px] border-r-[28px] border-t-[22px] border-l-transparent border-r-transparent border-t-background z-20" />
      </section>

      {/* Stats/Info Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-8 grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {[
            { h: "Where + What", p: "With offices across the globe, Struzon offers complete structural steel, connection design and BIM detailing services." },
            { h: "Mission", p: "To add value to your project team — helping you meet fast construction schedules while delivering quality structural detailing." },
            { h: "How + Who", p: "We leverage industry-leading software, construction expertise and automated workflows to deliver superior results." },
            { h: "Why", p: "We hold integrity, honesty and loyalty to the highest level. We minimize risk and add value to every project." },
          ].map((b) => (
            <div key={b.h} className="border-l-4 border-brand-red pl-5 hover:bg-slate-50 transition-colors p-4 rounded-r-lg group">
              <h2 className="text-2xl uppercase group-hover:text-brand-red font-black transition-colors">{b.h}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed font-medium">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are SECTION */}
      <section className="py-12 md:py-16 bg-white overflow-hidden text-spacing-tight">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-black mb-4">Struzon Technologies Inc.</div>
          <h2 className="text-3xl md:text-6xl font-display font-black text-navy uppercase tracking-tightest leading-none mb-12">
            Who <span className="text-brand-red">We Are</span>
          </h2>

          <div className="space-y-12">
            {/* Massive Lead Text */}
            <p className="text-navy text-2xl md:text-5xl font-display font-black uppercase leading-[1.1] italic max-w-5xl">
              Struzon, a trusted structural steel detailing/engineering service partner to the construction industry — market pioneers of engineering, design, and research.
            </p>

            {/* Supporting Detail Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 text-navy/70 text-sm md:text-base leading-relaxed font-medium">
              <p>Our work integrates with steel detailing, connection design/stamping for structural, miscellaneous detailing, and BIM (Building Information Modeling) services. We help with the structure, expansion, alteration, and revamp of new and existing constructions.</p>
              <p>Our team of fully qualified engineers has a wealth of experience in all aspects of structural design, detailing, and steelwork fabrication requirements. With an ongoing commitment to invest in our staff, we are well positioned to detail every project.</p>
              <p>With our strong international presence in key sectors, Struzon drives the evolution of digital information modeling. Our brand is recognized as a global leader within the structural steel detailing industry.</p>
              <p>A diverse company with an outstanding reputation for detailing complex, time-sensitive projects while delivering superior quality and a cost-effective solution.</p>
              <p>We have been increasing current standards in the matter of transmission of impeccable building structures. Our simple, and very solid administrations have figured out how to win numerous hearts.</p>
            </div>
          </div>

          <LicensedPartners />
        </div>
      </section>

      {/* Advantage Carousel Section */}
      <section className="py-16 bg-muted overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-black mb-3">Precision First</div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-navy uppercase tracking-tighter">Why Choose <span className="text-brand-red">Struzon</span></h2>
          </div>
          <div className="relative w-full">
            <AdvantageCarousel items={highlightsGallery} />
          </div>
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      <CyberMap />

      {/* Portfolio Section */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-black">Portfolio</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-black uppercase text-navy tracking-tight">Selected Work</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-display uppercase text-xs tracking-widest hover:bg-brand-red transition-all">
              Explore All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectImgs.map((img, i) => (
              <Link key={i} to="/projects" className="group block overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow rounded-sm transition-all hover:-translate-y-2 duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={`Project ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="text-[10px] uppercase tracking-widest text-brand-red font-black mb-2">Structural Case Study</div>
                  <h3 className="text-xl font-display font-black uppercase text-navy group-hover:text-brand-red transition-colors">Global Project #00{i + 1}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-navy text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale" style={{ backgroundImage: `url(${imgP4})` }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-black mb-6">Ready to Build?</div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-display font-black uppercase leading-[1.1] md:leading-[0.9] tracking-tighter mb-8">Seeking a better <br /> detailing solution?</h2>
          <p className="mt-4 text-sm md:text-lg text-white/70 max-w-xl mx-auto font-medium">
            Contact the experts at Struzon to explore how we can help you deliver your next project on schedule, with quality and absolute efficiency.
          </p>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-2 bg-brand-red px-10 lg:px-12 py-5 lg:py-6 rounded-full text-white font-display font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl active:scale-95 text-xs sm:text-sm lg:text-base">
            Let's Talk <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export default Home;
