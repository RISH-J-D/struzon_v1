import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/struzon-logo.png";
import badge1 from "@/assets/icons/badge1.png";
import badge2 from "@/assets/icons/badge2.png";
import badge3 from "@/assets/icons/badge3.png";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
        {/* Top bar — hidden on mobile for better space utility */}
        <div className={`relative z-10 bg-navy/80 border-b border-white/10 ${scrolled ? 'hidden' : 'hidden md:block'}`}>
          <div className="flex w-full items-center justify-between px-4 md:px-8 lg:px-12 py-2">
            <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
              <div className="flex flex-row items-center gap-6">
                <a href="tel:+16469923825" className="flex items-center gap-2 text-white hover:text-brand-red transition-colors whitespace-nowrap">
                  <Phone size={14} className="text-brand-red" /> +1 (646) 992-3825
                </a>
                <a href="tel:+916385828777" className="flex items-center gap-2 text-white hover:text-brand-red transition-colors whitespace-nowrap border-l border-white/10 pl-6 pt-0">
                  <Phone size={14} className="text-brand-red" /> +91 6385828777
                </a>
              </div>
              <a href="mailto:info@struzon.com" className="hidden lg:flex items-center gap-2 text-white hover:text-brand-red transition-colors">
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

        {/* Main nav — Grid-based to prevent all overlaps */}
        <div className="relative w-full h-16 md:h-20 lg:h-24 grid grid-cols-[auto_clamp(40px,6vw,120px)_1fr] items-center">
          
          {/* 1. Branding Column (White Tab) — Always includes badges now */}
          <div className="relative bg-white h-full flex items-center pl-3 md:pl-8 lg:pl-12 pr-6 lg:pr-16 shadow-2xl z-20 shrink-0">
            <div className="flex items-center gap-3 md:gap-8 shrink-0">
              <Link to="/" className="flex items-center shrink-0">
                <img src={logo} alt="Struzon" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain" />
              </Link>

              {/* Badges — Now visible on all screens with adaptive scaling */}
              <div className="flex items-center gap-2 md:gap-6 border-l border-navy/10 pl-3 md:pl-8 py-1">
                <img src={badge1} alt="AISC" className="h-6 sm:h-8 md:h-12 lg:h-14 w-auto object-contain transition-transform hover:scale-110" />
                <img src={badge2} alt="NISD" className="h-6 sm:h-8 md:h-12 lg:h-14 w-auto object-contain transition-transform hover:scale-110" />
                <img src={badge3} alt="ISO" className="h-5 sm:h-7 md:h-11 lg:h-13 w-auto object-contain transition-transform hover:scale-110" />
              </div>
            </div>

            {/* S-Curve End (Absolute to branding, but grid reserves its space) */}
            <div className="absolute top-0 right-0 h-full w-[clamp(40px,6vw,120px)] translate-x-full pointer-events-none z-20">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 C50,0 50,100 100,100 L0,100 Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* 2. Curve Spacer Column (RESERVES SPACE FOR THE CURVE) */}
          <div className="h-full pointer-events-none w-[clamp(40px,6vw,120px)]" />

          {/* 3. Navigation & Actions Column */}
          <div className="flex items-center justify-end h-full px-4 md:px-8 lg:px-12 gap-4 xl:gap-8 overflow-hidden">
            
            {/* Desktop Nav — Full logic for wide screens */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-8 shrink-0">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[11px] xl:text-xs uppercase tracking-widest font-black text-white/70 hover:text-white transition-all whitespace-nowrap"
                  activeProps={{ className: "text-white border-b-2 border-brand-red pb-1" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mid-sized Nav — Showing limited links to prevent collision */}
            <nav className="hidden lg:flex xl:hidden items-center gap-4 shrink-0">
              {links.slice(1, 6).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-all whitespace-nowrap"
                  activeProps={{ className: "text-brand-red" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center shrink-0">
              <Link
                to="/contact"
                className="bg-brand-red px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-navy transition-all shadow-xl active:scale-95"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button — triggers at 'lg' to be safe */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white relative z-[1030]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer — Portaled to body for absolute stacking dominance */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-navy/98 backdrop-blur-md z-[5010]"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-navy z-[5020] shadow-2xl border-l border-white/5 flex flex-col"
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
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
