import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, Wrench, Building2, Layers, Boxes, Cpu, ShieldCheck, Users, Clock, Award } from "lucide-react";
import heroStructure from "@/assets/hero-structure.png";
import globalVideo from "@/assets/vecteezy_global-news-broadcast-animation-background-with-world-map_71306472.mp4";
import iconTekla from "@/assets/icons/tekla.png";
import iconSds2 from "@/assets/icons/sds2.png";
import iconAutocad from "@/assets/icons/autocad.png";
import iconRevu from "@/assets/icons/revu.png";
import iconAdobe from "@/assets/icons/adobe.png";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Struzon Technologies Inc. — Structural Steel Detailing & BIM" },
      { name: "description", content: "Struzon is a trusted structural steel detailing, connection design, and BIM services partner with offices in USA, UK, India and Canada." },
      { property: "og:title", content: "Struzon Technologies Inc." },
      { property: "og:description", content: "Structural steel detailing, engineering and BIM services worldwide." },
    ],
  }),
  component: Home,
}));

const services = [
  { icon: Wrench, title: "Structural Steel Detailing", desc: "Accurate fabrication and erection drawings, material reports and model exports for seamless procurement and installation." },
  { icon: Layers, title: "Connection Design & Stamping", desc: "Efficient and code-compliant connection design and PE stamping to reduce shop costs and save time in the field." },
  { icon: Boxes, title: "Miscellaneous Detailing", desc: "Stairs, handrails, ladders, platforms, gratings and architectural metal — detailed to exacting specifications." },
  { icon: Cpu, title: "BIM Services", desc: "Multi-discipline BIM coordination and VDC management to resolve clashes before construction begins." },
  { icon: Building2, title: "Architectural Detailing", desc: "Detailing services for both residential and industrial divisions with a focus on quality and constructability." },
  { icon: ShieldCheck, title: "Engineering & Research", desc: "Structural design, expansion, alteration and revamp services for new and existing constructions." },
];

const projectImgs = [
  "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
];

const offices = [
  { c: "INDIA", flag: "🇮🇳", tz: "Asia/Kolkata" },
  { c: "USA", flag: "🇺🇸", tz: "America/New_York" },
  { c: "UK & EUROPE", flag: "🇬🇧", tz: "Europe/London" },
  { c: "CANADA", flag: "🇨🇦", tz: "America/Toronto" },
];

function DigitalClock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setTime(formatter.format(now));
      } catch (e) {
        console.error(e);
      }
    };
    update();
    const timer = setInterval(update, 10000);
    return () => clearInterval(timer);
  }, [timezone]);

  return <div className="font-display font-bold text-white text-2xl md:text-3xl tracking-wider drop-shadow-sm">{time}</div>;
}

const highlights = [
  { icon: Layers, t: "High-Precision Detailing", d: "Accurate shop drawings, GA drawings, and fabrication details prepared to exact project specifications." },
  { icon: Users, t: "Experienced Detailing Team", d: "Skilled professionals with strong expertise in structural steel detailing and industry standards." },
  { icon: Cpu, t: "Advanced Software Expertise", d: "Proficient in leading detailing software to ensure speed, precision, and seamless coordination." },
  { icon: Building2, t: "Customized Project Solutions", d: "Tailored detailing services for commercial, industrial, and infrastructure projects." },
  { icon: Clock, t: "Fast Turnaround Time", d: "Timely delivery of drawings and revisions to keep your project schedule on track." },
  { icon: ShieldCheck, t: "Compliance with Standards", d: "Drawings prepared in accordance with international and client-specific standards." },
  { icon: Award, t: "Seamless Coordination Support", d: "Effective collaboration with architects, engineers, and fabricators for clash-free execution." },
];

// ─── Licensed Partners — GSAP ScrollTrigger animated grid ────────────────────
const partners = [
  { id: "tekla", src: iconTekla, label: "Tekla Structures" },
  { id: "sds2", src: iconSds2, label: "SDS2 Modeling" },
  { id: "autocad", src: iconAutocad, label: "Autodesk AutoCAD" },
  { id: "revu", src: iconRevu, label: "Bluebeam Revu" },
  { id: "adobe", src: iconAdobe, label: "Adobe" },
];

function LicensedPartners() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      // Exact animation requested — gsap.from with scrollTrigger on the .grid class
      // toggleActions: "play none none reset" → replays each time you scroll to section
      gsap.from(".grid-item", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: { amount: 0.6, from: "center" },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".grid",
          start: "top 80%",
          toggleActions: "play none none reset",   // toggles: plays in, resets when scrolled away
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mb-16 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-bold mb-2">Licensed Partners</div>
      <div ref={gridRef} className="mt-8 pb-12 border-b border-navy/10">
        {/* "grid" class = scrollTrigger anchor for GSAP */}
        <div className="grid grid-cols-2 gap-x-12 md:gap-x-48 gap-y-12 md:gap-y-16 max-w-4xl mx-auto items-center">
          {partners.map((p, idx) => (
            <div
              key={p.id}
              className={`grid-item flex flex-col items-center gap-3 group cursor-default ${idx === 2 ? "col-span-2" : ""}`}
            >
              <img
                src={p.src}
                alt={p.label}
                className="h-24 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
              />
              <span className="text-[10px] uppercase tracking-widest font-bold text-navy/40 group-hover:text-navy/70 transition-colors">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-white text-navy min-h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-[center_bottom]"
          style={{ backgroundImage: `url(${heroStructure})` }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2, 13, 43, 0.7)' }} />
        <div className="relative mx-auto max-w-7xl px-6 w-full pt-32 pb-24 md:pt-48 md:pb-36 h-full flex flex-col justify-end">
          <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-extrabold drop-shadow">Stands For Trust</div>
          <h1 className="mt-4 text-white text-2xl sm:text-3xl md:text-6xl uppercase max-w-4xl leading-tight font-display font-black drop-shadow-xl">
            Structural Steel Detailing & Engineering Service Partner
          </h1>
          <p className="mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/90 font-semibold leading-relaxed drop-shadow">
            A trusted partner to the construction industry — pioneers of structural detailing, engineering,
            design and research, delivering complex, time-sensitive projects worldwide.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-brand-red px-8 py-4 rounded-full font-display uppercase tracking-widest text-white text-xs font-bold hover:bg-brand-red-dark transition-all"
            >
              Get a Quote →
            </Link>
            <Link
              to="/services"
              className="border-2 border-white px-8 py-4 rounded-full font-display uppercase tracking-widest text-white text-xs font-bold hover:bg-white hover:text-navy transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0 w-0 border-l-[28px] border-r-[28px] border-t-[22px] border-l-transparent border-r-transparent border-t-background" />
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "Where + What", p: "With offices across the globe, Struzon offers complete structural steel, connection design and BIM detailing services." },
            { h: "Mission", p: "To add value to your project team — helping you meet fast construction schedules while delivering quality structural detailing." },
            { h: "How + Who", p: "We leverage industry-leading software, construction expertise and automated workflows to deliver superior results." },
            { h: "Why", p: "We hold integrity, honesty and loyalty to the highest level. We minimize risk and add value to every project." },
          ].map((b) => (
            <div key={b.h} className="border-l-4 border-brand-red pl-5">
              <h2 className="text-2xl uppercase">{b.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Whom We Are + Licensed Partners ── */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">

          {/* Licensed Partners — GSAP ScrollTrigger stagger-from-center animation */}
          <LicensedPartners />

          {/* Whom We Are body text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy uppercase tracking-tighter leading-none mb-8 md:mb-12">
            Whom We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-navy/80 text-base md:text-lg leading-relaxed font-medium">
            <p>Struzon, a trusted structural steel detailing/engineering service partner to the construction industry, and we are an organization that wears numerous caps. From being market pioneers of structural detailing, engineering, design, and research to doing well in architectural results in both residential and industrial divisions, we are enlisting our company in different arenas.</p>
            <p>Our work integrates with steel detailing, connection design/stamping for structural, miscellaneous detailing, and BIM (Building Information Modeling) services. We help with the structure, expansion, alteration, and revamp of new and existing constructions.</p>
            <p>Our team of fully qualified engineers has a wealth of experience in all aspects of structural design, detailing, and steelwork fabrication requirements. With an ongoing commitment to invest in our staff and the use of the latest technology, we are well positioned to detail every project to the most exacting specifications.</p>
            <p>With our strong international presence in key sectors, Struzon drives the evolution of digital information modeling, providing our customers with a competitive advantage. Our brand is recognized as a global leader within the structural steel detailing industry, providing unprecedented worldwide solutions using sustainable collaboration and software interoperability.</p>
            <p>A diverse company with an outstanding reputation for detailing complex, time-sensitive projects while delivering superior quality and a cost-effective solution. We deliver projects in strict accordance with the clients' instructions, providing the highest level of quality and accuracy in a timely manner.</p>
            <p>We have been increasing current standards in the matter of transmission of impeccable building structures. Our simple, on-pocket, and very solid administrations have figured out how to win numerous hearts as we limit hazard and increase the value of the project.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-semibold mb-2">Our Advantage</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy uppercase tracking-tight">Why Choose Struzon</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.t} className="flex flex-col items-start gap-5 bg-background p-8 border-t-4 border-brand-red shadow-sm hover:shadow-md transition-all group">
                <div className="flex h-12 w-12 items-center justify-center bg-navy text-white group-hover:bg-brand-red transition-colors">
                  <h.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-navy font-display font-bold uppercase text-lg leading-tight mb-3">{h.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-navy">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          style={{ willChange: "transform" }}
        >
          <source src={globalVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/30 mix-blend-screen" />
        <div className="absolute inset-0 bg-navy/40" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-[0.4em] text-brand-red font-bold mb-3 drop-shadow-md">Our Global Presence</div>
            <h2 className="text-white text-4xl md:text-5xl font-display font-bold tracking-tight uppercase drop-shadow-lg">Offices Around The World</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o) => (
              <div
                key={o.c}
                className="relative group overflow-hidden bg-navy/60 p-6 md:p-10 text-center border border-white/10 hover:bg-navy/80 transition-all duration-300 rounded-2xl"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block drop-shadow-2xl">{o.flag}</div>
                <h3 className="text-white text-base md:text-xl font-display font-bold tracking-widest mb-4 md:mb-6 opacity-95">{o.c}</h3>
                <div className="mt-auto pt-4 md:pt-6 border-t border-white/5">
                  <DigitalClock timezone={o.tz} />
                  <div className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em] mt-2 font-bold italic">Local Time</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-semibold">Projects</div>
              <h2 className="mt-2 text-3xl md:text-4xl uppercase">Selected Work</h2>
              <p className="mt-2 text-muted-foreground max-w-xl">A glimpse of projects delivered across the globe.</p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-brand-red font-display uppercase text-sm tracking-wide hover:gap-3 transition-all">
              Explore All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectImgs.map((img, i) => (
              <Link key={i} to="/projects" className="group block overflow-hidden bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={`Project ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 border-t-2 border-brand-red">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Case Study</div>
                  <h3 className="mt-1 text-lg uppercase group-hover:text-brand-red transition-colors">Project No. {i + 1}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy text-white py-20">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80)" }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-semibold">Contact</div>
          <h2 className="text-white mt-3 text-3xl md:text-5xl uppercase">Seeking a better detailing solution?</h2>
          <p className="mt-5 text-lg text-white/85">
            Contact the structural and miscellaneous steel detailing experts at Struzon to explore how we can help you deliver your next project on schedule, with quality and efficiency.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-brand-red px-8 py-4 rounded-full font-display uppercase tracking-wide hover:bg-brand-red-dark transition-colors">
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
