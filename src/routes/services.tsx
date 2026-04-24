import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";
import ServiceCardStack from "@/components/ServiceCardStack";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Struzon Technologies Inc." },
      { name: "description", content: "Structural steel detailing, connection design & stamping, miscellaneous detailing and BIM services." },
      { property: "og:title", content: "Struzon Services" },
      { property: "og:description", content: "Steel detailing, connection design, BIM and engineering services." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell>
      {/* Hero Section with requested tint color */}
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-48 md:pb-24 lg:pt-56">
        <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-[30s]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(43, 65, 95, 0.64)' }} />
        <div className="relative mx-auto max-w-7xl px-6 w-full flex flex-col items-center text-center">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-brand-red font-black mb-4 drop-shadow">Struzon Solutions</div>
          <h1 className="text-white text-[clamp(2.5rem,10vw,8rem)] font-display font-black uppercase tracking-tightest leading-[0.9] drop-shadow-2xl">
            Our <span className="text-brand-red">Services</span>
          </h1>
        </div>
      </section>

      {/* Main Content Area - contains the horizontal accordion */}
      <section className="bg-slate-100 min-h-screen">
        <ServiceCardStack />
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1600&q=80')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-4xl px-8 text-center z-10">
          <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-brand-red font-black mb-6">Contact Us</div>
          <h2 className="text-white text-[clamp(1.5rem,6vw,4rem)] font-display font-black uppercase tracking-tighter leading-[1.1] mb-8 italic">Ready to start your next project?</h2>
          <p className="mt-5 text-white/70 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">Send us your drawings — a senior engineer will respond within one business day with a comprehensive quote.</p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red px-10 py-5 rounded-full font-display font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl active:scale-95 text-xs">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white bg-white/5 backdrop-blur-sm px-10 py-5 rounded-full font-display font-black uppercase tracking-widest text-white hover:bg-white hover:text-navy transition-all active:scale-95 text-xs">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default Services;
