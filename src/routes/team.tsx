import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

// ASSETS
import imgPlaceholder from "@/assets/hero-steel.jpg";
import imgWorkplace from "@/assets/blueprint.jpg";
import imgRajadurai from "@/assets/rajadurai.png";
import imgBalasaravana from "@/assets/balasaravanan.png";
import imgSaravanan from "@/assets/saravanan.png";
import imgAnand from "@/assets/anand.png";
import imgAlan from "@/assets/alan.png";

export const Route = createFileRoute("/team")({
  component: TeamPage,
});

const teamMembers = [
  {
    name: "Rajadurai",
    role: "CEO",
    email: "rajadurai@struzon.com",
    linkedin: "https://www.linkedin.com/in/rajadurai-nallasamy-253543133/",
    image: imgRajadurai,
    bio: [
      "A visionary by nature and passionate about structures, Rajadurai has 15+ years experience in construction industries with a specialization in steel detailing.",
      "His undergraduate degree in engineering is from Anna University and he also has a Master’s degree in Business Management. He is NPCIL-trained in weld techniques and is NDT qualified, which plays a vital and dynamic role in his career, along with his profound knowledge on the steel fabrication and erection process.",
      "His organizational focus is about developing and expanding Struzon’s strong presence in the international business field.",
      "Rajadurai is a passionate leader, bringing a wealth of engineering, business, and management expertise to the Struzon team by successfully delivering projects on-time & on-budget across a wide range of sectors, and constantly earning the respect of our major clients."
    ],
  },
  {
    name: "Balasaravana",
    role: "President",
    email: "balasaravana@struzon.com",
    linkedin: "https://www.linkedin.com/in/balasaravana-kumar-t-826248172/",
    image: imgBalasaravana,
    bio: [
      "Balasaravana is a recognized expert with more than 15+ years of experience centered around Steel Detailing, Engineering, Business Management, Technology, and Digital Project Delivery, along with being a Mechanical Engineer with an honors B.E. from Anna University.",
      "His vast experience, ability to meet and exceed his steadily increasing responsibilities, and client-centric viewpoint have made him the right person to lead engineering at Struzon and achieve our goals of technical excellence across multiple engineering skills and disciplines.",
      "He has a solid understanding of the entire steel detailing field, including administration, business strategy, and project management, which enables him to communicate effectively with clients across all aspects of the projects and offer the most cost-effective solutions tailored to the client’s specific requirements."
    ],
  },
  {
    name: "Saravanan",
    role: "COO",
    email: "saravanan@struzon.com",
    linkedin: "https://www.linkedin.com/in/saravanan-soundara-rajan-206a7a67/",
    image: imgSaravanan,
    bio: [
      "An entrepreneur and emerging business leader with 15+ years of progressive experience in the structural steel detailing industry, Saravanan is the visionary behind the company’s strategies and operations.",
      "Saravanan is excellent at analyzing team strengths and leveraging individual employee traits to reach business goals efficiently.",
      "His dedication to helping employees improve their skills and techniques is the secret that allows him to engage employees in order to reach company objectives and ensure client satisfaction.",
      "His engineering background was strengthened with a Bachelor’s Degree from IGNOU and strongly developed by the PSG Tech Institution. Additionally, he has gained NDT skills, QA/QC, and extensive fabrication knowledge from his work in the Oil and Gas Machinery Manufacturing Sectors."
    ],
  },
  {
    name: "Anand",
    role: "Vice President-Business Development",
    email: "anand@struzon.com",
    linkedin: "https://www.linkedin.com/in/anand-m-s-671390154/",
    image: imgAnand,
    bio: [
      "Bringing over 16 years of diverse experience from the construction and IT fields, along with excellent socialization skills and charisma, Anand specializes in establishing a personal connection with clients.",
      "He completed his CS graduation in 2004 at Bharathiyar University and then enhanced his career by joining hands with Struzon.",
      "Anand’s functional objectives are to achieve the optimum utilization of the engineering team’s production capacity, as well as grow the company's global client base. Anand is a people-oriented person who shares an excellent chemistry with all.",
      "His core focus is on sustainable business practices, and he has been very successful in establishing long-term relationships with key account clients."
    ],
  },
  {
    name: "Alan (P.E)",
    role: "Vice President - USA Operations",
    email: "alan@struzon.com",
    linkedin: "https://www.linkedin.com/in/alan-bagatourian-pe-29391059/",
    image: imgAlan,
    bio: [
      "A California-Licensed Professional Civil Engineer with over 10 years of experience in the field, including owning his Structural Engineering company and co-owning a Commercial Steel Fabrication and Erection company, Alan is the perfect fit to run the US operations of Struzon.",
      "As the VP of US operations, Alan is the initial point of contact with US Clients, discussing client's ideas and visions; consolidating them into practical solutions; and bringing them to reality.",
      "Along with his expertise in Civil Engineering, gained his Bachelor’s in Civil Engineering (Cal-Poly Pomona); his Master’s in Structural Engineering (USC); and his California Professional Civil Engineer License (State of CA), Alan also brings his multiple years of practical experience in the shop, field, and running his businesses to facilitate efficient and cost-effective solutions that work in the real world.",
      "His diverse areas of professional expertise and ability to bring people to work together to reach a common goal efficiently and successfully are his strongest assets to both Sturzon and the clients."
    ],
  },
];

function TeamPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [notchPosition, setNotchPosition] = useState(0);

  useEffect(() => {
    if (activeIndex !== null && cardRefs.current[activeIndex]) {
      const card = cardRefs.current[activeIndex];
      if (card) {
        const rect = card.getBoundingClientRect();
        const parentRect = card.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setNotchPosition(rect.left - parentRect.left + rect.width / 2);
        }
      }
    }
  }, [activeIndex]);

  const handleInteraction = (idx: number | null) => {
    setActiveIndex(idx);
    // On mobile, scroll to the content if opening
    if (idx !== null && window.innerWidth < 1024) {
      setTimeout(() => {
        cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const BioContent = ({ member, onClose }: { member: typeof teamMembers[0], onClose?: () => void }) => (
    <div className="p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-1 w-8 md:w-12 bg-brand-red" />
          <h4 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight">
            {member.name} — {member.role}
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            {member.bio.slice(0, Math.ceil(member.bio.length / 2)).map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/80 font-sans">
                {para}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {member.bio.slice(Math.ceil(member.bio.length / 2)).map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/80 font-sans md:border-l md:border-white/10 md:pl-6">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Dismiss button for mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="mt-8 w-full py-3 border border-white/20 text-[10px] uppercase font-bold tracking-widest md:hidden"
          >
            Close Details
          </button>
        )}
      </div>
    </div>
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Our Management"
        title="The Visionaries"
        subtitle="Meet the leadership team driving Struzon's global presence and engineering excellence."
      />

      <section className="py-16 md:py-32 bg-white flex flex-col items-center overflow-hidden">
        <div
          className="mx-auto max-w-7xl px-6 w-full relative"
          onMouseLeave={() => window.innerWidth >= 1024 && setActiveIndex(null)}
        >
          {/* Grid of Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-start relative z-10">
            {teamMembers.map((member, idx) => (
              <div key={member.name} className="contents">
                <div
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  onMouseEnter={() => window.innerWidth >= 1024 && handleInteraction(idx)}
                  onClick={() => window.innerWidth < 1024 && handleInteraction(activeIndex === idx ? null : idx)}
                  className={`flex flex-col bg-white border border-border/50 shadow-sm transition-all duration-300 overflow-hidden group cursor-pointer h-full ${activeIndex === idx ? 'shadow-xl border-brand-red/30 -translate-y-1' : 'hover:shadow-lg hover:-translate-y-1'}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Active Indicator for Mobile */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-brand-red transition-transform duration-300 ${activeIndex === idx ? 'scale-x-100' : 'scale-x-0'}`} />
                  </div>
                  <div className="p-5 bg-white text-center flex flex-col items-center">
                    <h3 className={`font-display text-[clamp(1.1rem,2vw,1.35rem)] font-bold text-navy leading-tight transition-colors ${activeIndex === idx ? 'text-brand-red' : 'group-hover:text-brand-red'}`}>
                      {member.name}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-brand-red mt-1 mb-4">
                      {member.role}
                    </p>

                    {/* Social Links in Card */}
                    <div className="flex items-center justify-center gap-6 border-t border-border/50 pt-5 w-full text-navy/60">
                      <a href={`mailto:${member.email}`} className="hover:text-brand-red transition-all flex items-center gap-2 transform hover:scale-110" title="Email">
                        <Mail size={18} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-all flex items-center gap-2 transform hover:scale-110" title="LinkedIn">
                        <FaLinkedinIn size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio Display for Mobile/Tablet (Inside Grid) */}
                <div className="col-span-full lg:hidden block w-full">
                  <AnimatePresence mode="wait">
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="relative bg-navy text-white overflow-hidden shadow-2xl my-6 rounded-2xl"
                      >
                        <BioContent member={member} onClose={() => setActiveIndex(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Bio Display for Desktop (Below Grid) */}
          <div className="hidden lg:block relative mt-12">
            <AnimatePresence mode="wait">
              {activeIndex !== null && (
                <motion.div
                  key="desktop-bio"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="relative bg-navy text-white overflow-hidden shadow-2xl rounded-[3rem]"
                >
                  <motion.div
                    initial={false}
                    animate={{ left: notchPosition }}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    className="absolute -top-3 h-0 w-0 border-l-[15px] border-r-[15px] border-b-[15px] border-l-transparent border-r-transparent border-b-navy -translate-x-1/2"
                  />
                  <BioContent member={teamMembers[activeIndex]} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <motion.section layout className="relative bg-navy text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 grayscale" style={{ backgroundImage: `url(${imgWorkplace})` }} />
        <div className="relative mx-auto max-w-4xl px-8 text-center z-10">
          <h2 className="text-white text-[clamp(1.5rem,5vw,3.5rem)] uppercase font-display font-black leading-none italic mb-6">Want to work with our experts?</h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto font-medium">Our leadership team ensures every project meets Struzon's high standards of accuracy and efficiency.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 bg-brand-red px-10 py-5 rounded-full font-display uppercase tracking-widest text-xs font-black hover:bg-white hover:text-navy transition-all shadow-2xl active:scale-95">
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </PageShell>
  );
}
