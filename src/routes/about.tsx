import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { ShieldCheck, Zap, Heart, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// ASSETS
import imgP1 from "@/assets/project-1.jpg";
import imgP2 from "@/assets/project-2.jpg";
import imgP3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Struzon Technologies Inc." },
      { name: "description", content: "Struzon is a trusted structural steel detailing partner — founded by experienced engineers, serving global construction." },
      { property: "og:title", content: "About Struzon" },
      { property: "og:description", content: "Pioneers of structural detailing and BIM, serving the construction industry worldwide." },
    ],
  }),
  component: About,
});

const timelineData = [
  { year: "2017", title: "Founded in 2017", desc: "Started with a team of 4 seasoned steel detailing engineers with a vision to script the success story of steel structures in North America", color: "#1e1b4b" }, // dark navy/purple
  { year: "2018", title: "Adapt to survive", desc: "4 members evolved into 4 teams", color: "#1e3a8a" }, // navy
  { year: "2019", title: "Embrace evolution", desc: "More workstations. More projects. More value for our partners", color: "#1d4ed8" }, // blue
  { year: "2020", title: "Change is inevitable", desc: "Survived Pandemic, services and quality unaffected", color: "#3b82f6" }, // light blue
  { year: "2021", title: "Enable Excellence", desc: "Excellence emerged to balance the tight schedules", color: "#60a5fa" }, // lighter blue
  { year: "2022", title: "Bold Outcomes", desc: "Clients increased, quality uncompromised", color: "#94a3b8" }, // silver/gray
  { year: "2023", title: "Expertise with Integrity", desc: "Added SDS2 to tailor steel construction requirements", color: "#312e81" }, // indigo
  { year: "2024", title: "Growth by Quality", desc: "Production Capacity 4000T per month 100+ Engineers", color: "#1e40af" }, // bright navy
  { year: "2025", title: "Same Service, Own Premises", desc: "Production Capacity 5000T to 8000T per month 150+ Engineers", color: "#2563eb" }, // royal blue
  { year: "2026", title: "Transforming Visions into Reality", desc: "", color: "#1e1b4b" }, // dark navy
];

function SuccessTimeline() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-20 font-display">
      {/* Central Arrow/Spine Architecture — Shifted on mobile */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-8 z-10 flex flex-col items-center">
        {/* Infinite Pulse Glow Spine */}
        <motion.div
          animate={{ top: ["100%", "-20%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-40 bg-white/30 blur-2xl z-40"
        />

        {/* 2026 Top Pill */}
        <motion.div
          animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.4)", "0 0 0px rgba(255,255,255,0)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-28 h-8 bg-[#1e1b4b] rounded-lg flex items-center justify-center text-white font-black text-lg shadow-2xl z-50 mb-1"
        >
          2026
        </motion.div>

        {/* Vertical Arrow Segments */}
        <div className="flex flex-col flex-1 w-full mt-[2px]">
          {[...timelineData].reverse().slice(1).map((item, i) => (
            <div key={item.year} className="relative flex-1 min-h-[120px] w-full flex flex-col items-center">
              <div
                className="w-full flex-1"
                style={{
                  background: i % 2 === 0 ? `linear-gradient(to bottom, #1e1b4b, ${item.color})` : `linear-gradient(to bottom, ${timelineData[timelineData.length - 1 - i]?.color || '#1e1b4b'}, ${item.color})`,
                  clipPath: 'polygon(0% 0%, 50% 15%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
                  marginTop: '-12px'
                }}
              />
            </div>
          ))}
          <div
            className="w-8 h-20 mt-[-12px]"
            style={{
              background: timelineData[0].color,
              clipPath: 'polygon(0% 0%, 50% 15%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)'
            }}
          />
        </div>
      </div>

      {/* Branched Content Layers */}
      <div className="relative z-20 flex flex-col-reverse w-full">
        {timelineData.map((item, i) => {
          if (i === 9) return null; // 2026 handled by top pill
          const isLeft = i % 2 !== 0;

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`flex items-center w-full min-h-[120px] ${isLeft ? 'flex-row-reverse' : 'flex-row'} pl-12 md:pl-0`}
            >
              <div className={`w-full md:w-1/2 flex items-center ${isLeft ? 'justify-start' : 'justify-end md:justify-end'}`}>
                {/* Highlight Loop Container */}
                <motion.div
                  animate={{
                    scale: [1, 1.03, 1],
                    filter: ["brightness(1)", "brightness(1.25)", "brightness(1)"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 6,
                    delay: i * 0.6 // Sequence the highlight through the items
                  }}
                  className={`flex items-center px-1 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div
                    className="w-4 h-6 -mx-0.5"
                    style={{
                      backgroundColor: item.color,
                      opacity: 0.8,
                      clipPath: isLeft ? 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' : 'polygon(100% 0, 0 20%, 0 80%, 100% 100%)'
                    }}
                  />
                  <div
                    className="px-4 py-1.5 shadow-xl z-30"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-white font-black text-xl tracking-tighter">{item.year}</span>
                  </div>

                  <div className={`px-2 max-w-[140px] md:max-w-[180px] ${isLeft ? 'text-right' : 'text-left'}`}>
                    <h4 className="font-black text-navy uppercase text-[10px] md:text-xs leading-tight mb-1">{item.title}</h4>
                    {item.desc && (
                      <p className="text-[8px] font-bold text-brand-red opacity-80 leading-none truncate md:whitespace-normal">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="We Build What You Envision"
        subtitle="A global leader in structural steel detailing, connection design, and engineering excellence."
      />

      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-12">
              <div className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-black mb-4">Who We Are</div>
              <h2 className="text-4xl md:text-7xl font-display font-black text-navy uppercase tracking-tightest leading-[0.8] mb-16">
                Specialized Engineering <br />
                <span className="text-brand-red">Excellence</span>
              </h2>

              <div className="grid lg:grid-cols-12 gap-x-16 gap-y-20 items-start">
                <div className="lg:col-span-7">
                  <div className="grid md:grid-cols-2 gap-10 text-muted-foreground text-lg leading-relaxed font-medium mb-16">
                    <div className="space-y-6">
                      <p>
                        We are a team of highly qualified engineers and detailers specializing in Structural Steel Detailing, Connection Design, Piping Detailing, and Miscellaneous Steel Detailing, including stairs, ladders, and handrails. We also deliver expertise in specialty metal works such as aluminum and stainless steel, positioning us as a prominent service provider for clients across the US, Canada, and India.
                      </p>
                      <p>
                        We are driven by a commitment to excellence, consistently meeting and exceeding customer expectations. Our focus on delivering high-quality project outcomes, combined with fast turnaround times and exceptional accuracy, has made Struzon a trusted choice for fabricators and industry professionals.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <p>
                        Our strength lies in our ability to identify the core of any project challenge and provide practical, reliable solutions. We are committed to being a dependable partner in the construction industry by delivering accurate, timely, and cost-effective structural services. Simply put, we bring your steel structures to life—guided by our belief: <span className="text-navy font-black">“We build what you envision.”</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 border-t-4 border-brand-red shadow-xl rounded-sm">
                      <ShieldCheck className="h-8 w-8 text-brand-red mb-6" />
                      <h3 className="text-lg font-display font-black uppercase text-navy mb-4">Balanced Growth</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Ethical foundation, positive thinking, and social responsibility guide our consistent precision.
                      </p>
                    </div>
                    <div className="bg-white p-6 border-t-4 border-navy shadow-xl rounded-sm">
                      <Target className="h-8 w-8 text-navy mb-6" />
                      <h3 className="text-lg font-display font-black uppercase text-navy mb-4">Standardized Practice</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Excellence through disciplined approach of thorough checking and counter-checking.
                      </p>
                    </div>
                    <div className="bg-white p-6 border-t-4 border-brand-red shadow-xl rounded-sm">
                      <TrendingUp className="h-8 w-8 text-brand-red mb-6" />
                      <h3 className="text-lg font-display font-black uppercase text-navy mb-4">Global Standards</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Well-versed in international standards including OSHA, AISC, CISC, and Eurocodes.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 p-10 bg-navy text-white rounded-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 z-10">
                      <h3 className="text-xl font-display font-black uppercase mb-3 tracking-wider">Peace of Mind Partnership</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        We eliminate communication barriers with round-the-clock support, ensuring seamless collaboration regardless of time zones.
                      </p>
                    </div>
                    <Zap className="h-12 w-12 text-brand-red relative z-10" />
                  </div>
                </div>

                <div className="lg:col-span-5 h-full relative">
                  <div className="sticky top-32">
                    <div className="absolute top-0 left-0 p-4 -translate-y-full opacity-60">
                      <p className="text-navy font-black text-xs leading-none uppercase tracking-widest">
                        Visions into Reality
                      </p>
                    </div>
                    <SuccessTimeline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-navy uppercase tracking-tighter">Visualizing Success</h2>
            <div className="mt-6 h-2 w-32 bg-brand-red mx-auto shadow-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:h-[500px]">
            <div className="relative group overflow-hidden bg-background shadow-2xl h-64 md:h-full">
              <img src={imgP1} alt="Engineering" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="relative group overflow-hidden bg-background shadow-2xl h-64 md:h-full">
              <img src={imgP2} alt="Steel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="relative group overflow-hidden bg-background shadow-2xl h-64 md:h-full">
              <img src={imgP3} alt="BIM" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
