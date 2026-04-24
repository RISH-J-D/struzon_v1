import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";
import logo from "@/assets/struzon-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Our Team" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar — hidden when scrolled or on mobile */}
      <div className={`bg-navy/80 border-b border-white/10 ${scrolled ? 'hidden' : 'hidden md:block'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2">
          <div className="flex items-center gap-6 text-sm font-medium text-white uppercase tracking-wider">
            <div className="flex flex-row items-center gap-6">
              <a href="tel:+16469923825" className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap">
                <Phone size={14} className="text-brand-red" /> +1 (646) 992-3825
              </a>
              <a href="tel:+916385828777" className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap border-l border-white/10 pl-6 pt-0">
                <Phone size={14} className="text-brand-red" /> +91 6385828777
              </a>
            </div>
            <a href="mailto:info@struzon.com" className="hidden lg:flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-brand-red" /> info@struzon.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-white">
              <a href="https://www.facebook.com/p/Struzon-Technologies-100057060415643/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF size={14} /></a>
              <a href="https://www.linkedin.com/company/struzon-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedinIn size={14} /></a>
              <a href="https://www.instagram.com/struzontechnologies/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={14} /></a>
              <a href="https://www.youtube.com/@struzontechnologiespvtltd3935" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition-colors"><FaYoutube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav — white links on dark */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Struzon Technologies Inc." className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs xl:text-sm uppercase tracking-widest font-bold text-white/80 hover:text-white transition-colors py-2 border-b-2 border-transparent transition-all"
              activeProps={{ className: "!text-white border-brand-red" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-brand-red px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-navy transition-all shadow-lg active:scale-95"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white relative z-[110]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy/90 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-navy z-[105] shadow-2xl border-l border-white/5 flex flex-col"
            >
              <div className="p-8 pb-4">
                <img src={logo} alt="Struzon" className="h-8 w-auto grayscale brightness-200" />
              </div>
              <nav className="flex flex-col p-8 gap-6 overflow-y-auto flex-1">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-xl uppercase tracking-[0.2em] font-black text-white/60 hover:text-white transition-colors"
                    activeProps={{ className: "!text-brand-red" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 bg-brand-red rounded-full text-center py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl"
                >
                  Get a Quote
                </Link>
                
                <div className="mt-auto pt-10 grid grid-cols-2 gap-4 border-t border-white/5">
                  <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Connect</div>
                  <div className="flex gap-4">
                    <FaFacebookF className="text-white/40 hover:text-brand-red" />
                    <FaLinkedinIn className="text-white/40 hover:text-brand-red" />
                    <FaInstagram className="text-white/40 hover:text-brand-red" />
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
