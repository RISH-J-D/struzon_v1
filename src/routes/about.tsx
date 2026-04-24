import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CheckCircle2, ShieldCheck, Zap, Heart, Target, TrendingUp, Users } from "lucide-react";

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

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="We Build What You Envision"
        subtitle="A global leader in structural steel detailing, connection design, and engineering excellence."
      />

      {/* Section 1: Who We Are */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12">
              <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-semibold mb-4">Who We Are</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy uppercase tracking-tight mb-8">Specialized Engineering Excellence</h2>

              <div className="grid md:grid-cols-2 gap-10 text-muted-foreground text-lg leading-relaxed">
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
                    Our strength lies in our ability to identify the core of any project challenge and provide practical, reliable solutions. We are committed to being a dependable partner in the construction industry by delivering accurate, timely, and cost-effective structural services, always aligned with fabrication practices and erection safety standards. Simply put, we bring your steel structures to life—guided by our belief: <span className="text-navy font-bold">“We build what you envision.”</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Principles & Standards */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border-t-4 border-brand-red shadow-sm">
              <ShieldCheck className="h-10 w-10 text-brand-red mb-6" />
              <h3 className="text-xl font-display font-bold uppercase text-navy mb-4">Balanced Growth</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At Struzon, we believe in balanced growth built on a strong foundation of ethics, positive thinking, and social responsibility. Every team member undergoes a rigorous training process to ensure precision, efficiency, and consistency.
              </p>
            </div>
            <div className="bg-background p-8 border-t-4 border-navy shadow-sm">
              <Target className="h-10 w-10 text-navy mb-6" />
              <h3 className="text-xl font-display font-bold uppercase text-navy mb-4">Standardized Practice</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We achieve excellence through standardized practices and a disciplined approach of thorough checking and counter-checking of all dimensions, sizes, and design concepts.
              </p>
            </div>
            <div className="bg-background p-8 border-t-4 border-brand-red shadow-sm">
              <GlobeIcon className="h-10 w-10 text-brand-red mb-6" />
              <h3 className="text-xl font-display font-bold uppercase text-navy mb-4">Global Standards</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team is well-versed in international construction standards including OSHA, AISC, CISC, BS, IS, and Eurocodes, ensuring compliance and quality at every stage.
              </p>
            </div>
          </div>

          <div className="mt-12 p-10 bg-navy text-white rounded-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold uppercase mb-4">Peace of Mind Partnership</h3>
                <p className="text-white/80 leading-relaxed">
                  Partnering with us means peace of mind. We eliminate communication barriers with round-the-clock support, ensuring seamless collaboration regardless of time zones. By leveraging the expertise of our team, we consistently deliver high-quality drawings and exceptional customer service.
                </p>
              </div>
              <Zap className="h-16 w-16 text-brand-red hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl uppercase font-display font-bold text-navy">Visualizing Success</h2>
            <p className="mt-4 text-muted-foreground max-w-4xl mx-auto">
              We script success with every structure we detail, combining precision, quality, and timely delivery.
              As a trusted one-stop partner, we deliver comprehensive architectural and structural steel
              detailing solutions for the construction industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 h-[400px] md:h-[600px]">
            <div className="md:col-span-2 lg:col-span-3 row-span-2 relative group overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80" alt="Engineering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="hidden md:block md:col-span-2 lg:col-span-3 h-full relative group overflow-hidden bg-muted">
              <img src="https://enginerio.com/wp-content/uploads/2023/07/bigstock-Metal-Structure-Of-The-Dome-D-468344399.jpg" alt="Steel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="hidden lg:block lg:col-span-1 h-full relative group overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="BIM" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="hidden lg:block lg:col-span-2 h-full relative group overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Site" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="hidden md:block md:col-span-2 lg:col-span-6 h-48 lg:h-auto relative group overflow-hidden bg-muted">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Perfection & Principles */}
      <section className="py-20 bg-muted overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -mr-32 -mt-32" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl uppercase font-display font-bold text-navy">Perfection</h2>
            <div className="mt-4 h-1 w-24 bg-brand-red mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex gap-6">
                <Heart className="h-8 w-8 text-brand-red flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-bold uppercase text-navy mb-2">Core Principles</h3>
                  <p className="text-muted-foreground leading-relaxed italic">
                    “Make a customer, not just a sale” and “Quality matters more than quantity.” These values guide every decision we make and every project we deliver.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <TrendingUp className="h-8 w-8 text-navy flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-bold uppercase text-navy mb-2">Future Focused</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are future-focused, driven by the perfect blend of youthful energy and seasoned expertise. We believe that fresh perspectives spark innovation, while experience ensures precision and reliability.
                  </p>
                </div>
              </div>

              <div className="p-8 border border-navy/10 bg-background/50 backdrop-blur-sm">
                <h3 className="text-lg font-display font-bold uppercase text-navy mb-4">Why Clients Choose Us</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  While our rates may not be the lowest, our clients value the consistency, precision, and confidence we bring—especially for complex and demanding projects.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Choosing the right service partner is critical—and that’s why our clients continue to choose us. It would be a privilege to add your organization to our growing network of trusted partners.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-background p-8 shadow-sm">
                <h3 className="text-xl font-display font-bold uppercase text-navy mb-4">Interpreting Your Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Equipped with advanced software expertise, a highly skilled and motivated team, and robust infrastructure, we consistently deliver best-in-class quality services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that every project carries a unique design language defined by architects and engineers. Our expertise lies in interpreting these nuances with accuracy, enabling us to enhance efficiency and maximize productivity.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-8 py-4">
                <p className="text-navy font-display font-bold text-xl uppercase leading-snug">
                  We are the sum of our collective passion, vision, and expertise—striving to balance innovation, creativity, and technical excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
