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
  { 
    c: "USA", 
    flag: "🇺🇸",
    name: "STRUZON TECHNOLOGIES INC.",
    address: "98, Cuttermill Road, Suite 466 S, Great Neck, NY 11021",
    phones: ["+1 (646) 992-3825", "+1 (404) 902-6781"] 
  },
  { 
    c: "INDIA", 
    flag: "🇮🇳",
    name: "STRUZON TECHNOLOGIES PVT LTD.",
    address: "2/370/A3, Muthuram Garden, Krishna Gounder Nagar, Irugur Road, Chinniampalayam, Coimbatore- 641062.",
    phones: ["0422 2307777", "0422 2367777", "+91 6385828777"] 
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero 
        eyebrow="Let's Talk" 
        title="Let's get in touch." 
        subtitle="Every enquiry is an opportunity to create value, and at Struzon, we approach it with the attention it deserves." 
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-brand-red font-semibold mb-6">Reach Our Team</div>
            <div className="prose prose-slate max-w-none text-navy/80 space-y-6 text-lg leading-relaxed mb-12">
              <p>Every enquiry is an opportunity to create value, and at Struzon, we approach it with the attention it deserves. Our team carefully evaluates each requirement to provide well-structured, competitive quotations that align with your project goals. We strongly believe that <span className="text-brand-red font-bold">"a competitive quote will make our customer competitive among others."</span></p>
              <p>Whether you are planning a new project, require detailing support, or are exploring our range of services, we are here to assist you at every step. Simply share your requirements through the contact form, and our team will respond with clarity, precision, and promptness.</p>
              <p>For immediate assistance, feel free to connect with us directly. At Struzon, we are always ready to support your needs and build lasting partnerships through reliable service and professional excellence.</p>
            </div>

            <div className="space-y-10">
              {offices.map((o) => (
                <div key={o.c} className="border-l-4 border-brand-red pl-6 py-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{o.flag}</span>
                    <div className="text-xl uppercase font-display font-black text-navy tracking-tight">{o.c}</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-bold text-navy uppercase mb-1">{o.name}</div>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                        <span className="text-base leading-snug">{o.address}</span>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {o.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-3 text-base text-navy font-semibold hover:text-brand-red transition-colors group">
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-brand-red/10">
                            <Phone className="h-4 w-4 text-brand-red" />
                          </div>
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-navy/10">
                <a href="mailto:info@struzon.com" className="flex items-center gap-4 group w-fit">
                  <div className="h-12 w-12 rounded-full bg-navy flex items-center justify-center group-hover:bg-brand-red transition-all shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email Address</div>
                    <div className="text-xl font-display font-bold text-navy group-hover:text-brand-red transition-colors">info@struzon.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 md:p-12 border-t-8 border-brand-red shadow-2xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 -m-4 rounded-full blur-3xl" />
            <h2 className="text-3xl font-display font-black uppercase text-navy border-b-2 border-brand-red pb-4 mb-8">Project Enquiry</h2>
            {sent ? (
              <div className="mt-8 border-2 border-brand-red bg-white p-8 text-center rounded-xl shadow-inner">
                <div className="text-3xl font-display font-black uppercase text-brand-red mb-2">Message Received</div>
                <p className="text-navy font-medium">A senior engineer will respond with clarity and precision within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { n: "name", l: "Name", t: "text" },
                    { n: "email", l: "Email", t: "email" },
                    { n: "company", l: "Company", t: "text" },
                    { n: "phone", l: "Phone Number", t: "tel" },
                  ].map((f) => (
                    <div key={f.n}>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-navy font-black mb-2 block">{f.l} *</label>
                      <input required type={f.t} name={f.n} className="w-full border-b-2 border-navy/10 bg-transparent px-0 py-3 outline-none transition-all focus:border-brand-red focus:bg-white/50" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-navy font-black mb-2 block">Tell us about your project *</label>
                  <textarea required rows={5} className="w-full resize-none border-b-2 border-navy/10 bg-transparent px-0 py-3 outline-none transition-all focus:border-brand-red focus:bg-white/50" />
                </div>
                <button type="submit" className="w-full bg-brand-red py-5 px-8 font-display uppercase tracking-widest text-white font-black text-sm hover:bg-brand-red-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0">
                  Submit Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
