import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Wrench, Layers, Boxes, Cpu, Building2, ShieldCheck, ArrowRight } from "lucide-react";
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

const services = [
  { icon: Wrench, title: "Structural Steel Detailing", desc: "Accurate fabrication and erection drawings, material reports, NC files and model exports for seamless procurement, fabrication and installation." },
  { icon: Layers, title: "Connection Design & Stamping", desc: "Code-compliant connection design and PE stamping that reduce shop costs and save time in the field — handled by experienced engineers." },
  { icon: Boxes, title: "Miscellaneous Detailing", desc: "Stairs, handrails, ladders, platforms, gratings, embeds and architectural metals detailed to exacting specifications." },
  { icon: Cpu, title: "BIM Services", desc: "Multi-discipline BIM coordination, clash detection and VDC management to resolve design issues before construction begins." },
  { icon: Building2, title: "Architectural Detailing", desc: "Detailing services for both residential and industrial divisions, focused on quality and constructability." },
  { icon: ShieldCheck, title: "Engineering & Research", desc: "Structural design, expansion, alteration and revamp services for new and existing constructions worldwide." },
];

function Services() {
  return (
    <PageShell>
      <section className="relative overflow-hidden pt-24 pb-8 md:pt-40 md:pb-12">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80)" }} />
        {/* Blue tint — change colour (R,G,B) or opacity (0–1) here */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2, 34, 75, 0.64)' }} />
        <div className="relative mx-auto max-w-7xl px-6 w-full flex flex-col items-start text-left">
          <div className="text-sm uppercase tracking-[0.4em] text-brand-red font-bold mb-2 drop-shadow">Our Capabilities</div>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight drop-shadow-xl">Our Services</h1>
        </div>
      </section>

      <section className="bg-slate-50 overflow-visible relative">
        <ServiceCardStack />
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl uppercase">Ready to start your next project?</h2>
          <p className="mt-5 text-white/85 text-lg">Send us your drawings — a senior engineer will respond within one business day.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-display uppercase tracking-wide hover:bg-brand-red-dark transition-colors">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
