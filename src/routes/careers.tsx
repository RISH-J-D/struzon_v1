import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Briefcase } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Struzon Technologies Inc." },
      { name: "description", content: "Join Struzon — open positions for steel detailers, modelers, checkers and engineers." },
      { property: "og:title", content: "Careers at Struzon" },
      { property: "og:description", content: "Build a career in structural steel detailing and BIM with Struzon." },
    ],
  }),
  component: Careers,
});

const roles = [
  {
    title: "Sr. Checker / Team Leader",
    vacancies: 5,
    skills: [
      "4 to 12 years' experience in steel detailing and leading teams.",
      "Project planning, checklist monitoring/control and job progress control.",
      "Team monitoring, manpower handling, decision making and problem solving skills.",
    ],
  },
  {
    title: "Modeler",
    vacancies: 5,
    skills: [
      "Tekla Modeler with 2-7 years' experience.",
      "Proficient in handling industrial / miscellaneous structures with individual ability and leadership quality.",
      "Well-versed knowledge in AISC standards.",
    ],
  },
  {
    title: "Detailer",
    vacancies: 8,
    skills: [
      "1-5 years' experience in steel detailing using Tekla / SDS2.",
      "Knowledge of fabrication and erection drawings.",
      "Good communication and willingness to learn.",
    ],
  },
  {
    title: "Connection Design Engineer",
    vacancies: 3,
    skills: [
      "Bachelor's / Master's degree in Structural Engineering.",
      "3+ years' experience in connection design per AISC / CISC standards.",
      "Working knowledge of RAM Connection / IDEA StatiCa preferred.",
    ],
  },
];

function Careers() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHero eyebrow="Join Our Team" title="Careers" subtitle="Utilizing young, active and smart innovative minds — explore current openings at Struzon." />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl uppercase">Current Openings</h2>
            <p className="mt-3 text-muted-foreground">Click a role to see requirements and apply.</p>
          </div>

          <div className="space-y-3">
            {roles.map((r, i) => (
              <div key={r.title} className="border border-border bg-muted">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-background transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-brand-red text-white">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg uppercase">{r.title}</h3>
                      <div className="text-xs text-muted-foreground">No. of Vacancies — {r.vacancies}</div>
                    </div>
                  </div>
                  <span className="text-brand-red text-2xl">{active === i ? "−" : "+"}</span>
                </button>
                {active === i && (
                  <div className="border-t border-border p-6 bg-background">
                    <div className="text-sm font-semibold text-navy uppercase tracking-wide">Required Skills</div>
                    <ul className="mt-3 space-y-2 list-disc list-inside text-muted-foreground">
                      {r.skills.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                    <div className="mt-6">
                      <div className="text-sm font-semibold text-navy uppercase tracking-wide mb-3">To apply, fill the form below</div>
                      <form onSubmit={(e) => { e.preventDefault(); alert("Application submitted"); }} className="grid gap-4 sm:grid-cols-2">
                        <input required placeholder="Your Name *" className="border border-border bg-background px-4 py-3 outline-none focus:border-brand-red" />
                        <input required type="email" placeholder="Your Email *" className="border border-border bg-background px-4 py-3 outline-none focus:border-brand-red" />
                        <input required type="file" className="sm:col-span-2 border border-border bg-background px-4 py-3 outline-none focus:border-brand-red" />
                        <button className="sm:col-span-2 bg-brand-red text-white py-3 font-display uppercase tracking-wide hover:bg-brand-red-dark transition-colors">Apply Now</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
