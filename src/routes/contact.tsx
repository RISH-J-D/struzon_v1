import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Struzon Technologies Inc." },
      { name: "description", content: "Get in touch with Struzon for structural steel detailing and BIM project enquiries. Offices in USA, UK, India, and Canada." },
      { property: "og:title", content: "Contact Struzon" },
      { property: "og:description", content: "Give us a call or fill in the form — we'll contact you." },
    ],
  }),
  component: Contact,
});

const offices = [
  { c: "USA", flag: "🇺🇸", phones: ["+1 (646) 992-3825", "+1 (404) 902-6781"] },
  { c: "INDIA", flag: "🇮🇳", phones: ["0422-4530403"] },
  { c: "UK & EUROPE", flag: "🇬🇧", phones: ["+44 20 7946 0014"] },
  { c: "CANADA", flag: "🇨🇦", phones: ["+1 (555) 902-6781"] },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero eyebrow="Let's Talk" title="Contact Us" subtitle="Give us a call or fill in the form below and we'll contact you." />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-semibold">Get In Touch</div>
            <h2 className="mt-3 text-3xl md:text-4xl uppercase">Reach our team</h2>
            <p className="mt-4 text-muted-foreground">For more sample drawings or to reach our Director of Business Development.</p>

            <div className="mt-8 space-y-5">
              <a href="mailto:anand@struzon.example" className="flex items-start gap-4 group">
                <Mail className="mt-1 h-5 w-5 text-brand-red" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Sample Drawings</div>
                  <div className="text-lg text-navy group-hover:text-brand-red transition-colors">anand@struzon.example</div>
                </div>
              </a>
              <a href="mailto:info@struzon.example" className="flex items-start gap-4 group">
                <Mail className="mt-1 h-5 w-5 text-brand-red" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">General</div>
                  <div className="text-lg text-navy group-hover:text-brand-red transition-colors">info@struzon.example</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-brand-red" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Headquarters</div>
                  <div className="text-lg text-navy">Coimbatore, India</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">Global Offices</div>
              <div className="mt-5 grid gap-px bg-border sm:grid-cols-2">
                {offices.map((o) => (
                  <div key={o.c} className="bg-muted p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{o.flag}</span>
                      <div className="text-lg uppercase font-display font-bold text-navy">{o.c}</div>
                    </div>
                    <div className="mt-3 space-y-1">
                      {o.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-navy hover:text-brand-red">
                          <Phone className="h-3.5 w-3.5" /> {p}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 md:p-10 border-t-4 border-brand-red">
            <h2 className="text-3xl uppercase">Project Enquiry</h2>
            {sent ? (
              <div className="mt-8 border border-brand-red/40 bg-brand-red/10 p-6">
                <div className="text-2xl uppercase text-brand-red">Message Received</div>
                <p className="mt-2 text-muted-foreground">A senior engineer will respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-5">
                {[
                  { n: "name", l: "Name", t: "text" },
                  { n: "email", l: "Email", t: "email" },
                  { n: "company", l: "Company", t: "text" },
                  { n: "phone", l: "Phone — Format: (000) 000-0000", t: "tel" },
                ].map((f) => (
                  <div key={f.n}>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{f.l} *</label>
                    <input required type={f.t} name={f.n} className="mt-2 w-full border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-brand-red" />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Message *</label>
                  <textarea required rows={5} className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 outline-none focus:border-brand-red" />
                </div>
                <button type="submit" className="w-full bg-brand-red py-4 font-display uppercase tracking-wide text-white hover:bg-brand-red-dark transition-colors">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
