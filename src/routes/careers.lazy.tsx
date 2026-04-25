import { createLazyFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Briefcase, Users, Plus, Minus, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Route = createLazyFileRoute("/careers")({
  component: Careers,
});

interface Role {
  title: string;
  vacancies: number | "No Openings";
  hasDetails: boolean;
  skills?: string[];
}

const roles: Role[] = [
  { title: "Project Manager", vacancies: "No Openings", hasDetails: false },
  { 
    title: "Sr. Checker / TL", 
    vacancies: 5, 
    hasDetails: true,
    skills: [
      "4 to 12 years' experience in steel detailing and leading teams.",
      "Project planning, checklist monitoring/control and job progress control.",
      "Team monitoring, manpower handling, decision making and problem solving skills.",
    ]
  },
  { title: "Structural Designer", vacancies: "No Openings", hasDetails: false },
  { 
    title: "Checker", 
    vacancies: 5, 
    hasDetails: true,
    skills: [
      "1-5 years' experience in steel detailing using Tekla / SDS2.",
      "Knowledge of fabrication and erection drawings.",
      "Good communication and willingness to learn.",
    ]
  },
  { title: "QA / QC", vacancies: "No Openings", hasDetails: false },
  { 
    title: "Modeler", 
    vacancies: 3, 
    hasDetails: true,
    skills: [
      "Tekla Modeler with 2-7 years' experience.",
      "Proficient in handling industrial / miscellaneous structures.",
      "Well-versed knowledge in AISC standards.",
    ]
  },
  { title: "Estimator", vacancies: 0, hasDetails: true, skills: ["Structural steel estimation experience required.", "Proficient in Bluebeam/PlanSwift."] },
  { title: "Draftsman", vacancies: 7, hasDetails: true, skills: ["Drafting experience in AutoCAD / Tekla.", "Knowledge of structural steel components."] },
  { title: "Front Office Executive", vacancies: 1, hasDetails: true, skills: ["Excellent communication skills.", "Knowledge of office management software."] },
  { title: "R & D", vacancies: "No Openings", hasDetails: false },
  { title: "Marketing Executive", vacancies: 0, hasDetails: true, skills: ["B2B marketing experience preferred.", "Strong communication and strategy skills."] },
  { title: "HR & Accountant", vacancies: "No Openings", hasDetails: false },
];

function Careers() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <PageShell>
      <PageHero 
        eyebrow="Join Our Team" 
        title="Careers" 
        subtitle="Utilizing young, active and smart innovative minds — explore current openings at Struzon." 
      />
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-black mb-4">Opportunities</div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-navy uppercase tracking-tightest leading-[0.8]">
                Our Current <br />
                <span className="text-brand-red">Openings</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs font-medium border-l-2 border-brand-red pl-6 py-2">
              Join a team of elite engineers and detailers shaping the global infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden flex flex-col items-center text-center p-10 transition-all duration-500 ${
                  role.hasDetails 
                    ? "bg-slate-50 hover:bg-navy border-slate-100" 
                    : "bg-white border-slate-100 grayscale opacity-60"
                } border-2`}
              >
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 ${
                  role.hasDetails ? "bg-white text-brand-red group-hover:scale-110 shadow-sm" : "bg-slate-50 text-slate-300"
                }`}>
                  <Users className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-bold uppercase tracking-tight mb-4 transition-colors duration-500 ${
                  role.hasDetails ? "text-navy group-hover:text-white" : "text-slate-400"
                }`}>
                  {role.title}
                </h3>
                <div className={`text-sm mb-8 font-bold uppercase tracking-wider transition-colors duration-500 ${
                  role.hasDetails ? "text-brand-red group-hover:text-brand-red" : "text-slate-300"
                }`}>
                  {typeof role.vacancies === 'number' ? `Vacancy — ${role.vacancies}` : role.vacancies}
                </div>
                {role.hasDetails && (
                  <button 
                    onClick={() => setSelectedRole(role)}
                    className="mt-auto px-6 py-2 bg-navy text-white text-[10px] uppercase tracking-widest font-bold group-hover:bg-brand-red transition-all duration-300 rounded-full"
                  >
                    View Details
                  </button>
                )}
                {role.hasDetails && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rotate-45 translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:translate-x-10 -translate-y-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-navy py-32">
        <div className="absolute inset-0 bg-brand-red/5 -skew-y-6 translate-y-32" />
        <div className="mx-auto max-w-7xl px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-tightest leading-[0.95] mb-12">
              We listen and work together to create a <span className="text-brand-red">unique experience.</span>
            </h2>
            <div className="h-1 w-24 bg-brand-red mx-auto mb-12" />
            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Our culture is built on collaboration, continuous learning, and a shared passion for engineering excellence. Be part of something exceptional.
            </p>
          </div>
        </div>
      </section>
      <Dialog open={!!selectedRole} onOpenChange={(open) => !open && setSelectedRole(null)}>
        <DialogContent className="sm:max-w-2xl bg-white border-navy/10 p-0 overflow-hidden rounded-none">
          {selectedRole && (
            <div className="flex flex-col">
              <div className="bg-navy p-10 text-white">
                <div className="text-brand-red text-[10px] uppercase tracking-[0.4em] font-black mb-4">Position Details</div>
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tightest leading-[0.8] mb-6">
                  {selectedRole.title}
                </h2>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                  <span className="bg-brand-red px-3 py-1">
                    {typeof selectedRole.vacancies === 'number' ? `Vacancies: ${selectedRole.vacancies}` : selectedRole.vacancies}
                  </span>
                  <span className="text-slate-400">Full-Time</span>
                </div>
              </div>
              <div className="p-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-navy font-display font-bold uppercase tracking-widest text-sm mb-4 pb-2 border-b-2 border-brand-red w-fit">Required Skills</h4>
                    <ul className="space-y-3">
                      {selectedRole.skills?.map((skill, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red flex-shrink-0" />
                          <span className="text-sm font-medium">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-navy font-display font-bold uppercase tracking-widest text-sm mb-4 pb-2 border-b-2 border-brand-red w-fit">Apply for this position</h4>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Application submitted successfully. We will get back to you soon."); setSelectedRole(null); }} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Full Name *</label>
                          <input required className="w-full bg-slate-50 border-0 p-4 text-sm outline-none focus:ring-2 focus:ring-brand-red/20 transition-all" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Address *</label>
                          <input required type="email" className="w-full bg-slate-50 border-0 p-4 text-sm outline-none focus:ring-2 focus:ring-brand-red/20 transition-all" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Upload Resume (PDF/DOC) *</label>
                        <input required type="file" className="w-full bg-slate-50 border-0 p-4 text-xs outline-none focus:ring-2 focus:ring-brand-red/20 transition-all cursor-pointer" />
                      </div>
                      <button className="w-full bg-navy hover:bg-brand-red text-white py-4 font-display font-bold uppercase tracking-[0.2em] transition-all duration-300">Submit Application</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
