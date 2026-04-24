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
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80)" }} />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(43, 65, 95, 0.64)' }} />
        <div className="relative mx-auto max-w-7xl px-6 w-full flex flex-col items-center text-center">
          <div className="text-xs uppercase tracking-[0.5em] text-brand-red font-black mb-4 drop-shadow">Struzon Solutions</div>
          <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-display font-black uppercase tracking-tightest leading-none drop-shadow-2xl">
            Our <span className="text-brand-red">Services</span>
          </h1>
        </div>
      </section>

      {/* Main Content Area - contains the horizontal accordion */}
      <section className="bg-slate-100 min-h-screen">
        <ServiceCardStack />
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1600&q=80')] bg-cover bg-center opacity-5" />
        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-bold mb-6">Contact Us</div>
          <h2 className="text-white text-3xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-8">Ready to start your next project?</h2>
          <p className="mt-5 text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">Send us your drawings — a senior engineer will respond within one business day with a comprehensive quote.</p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red px-10 py-5 rounded-sm font-display font-black uppercase tracking-widest hover:bg-brand-red-dark transition-all shadow-xl hover:shadow-brand-red/20 active:scale-95">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-5 rounded-sm font-display font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default Services;
