import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
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
    <header className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar — always dark, white text */}
      <div className={`bg-navy/80 border-b border-white/10 ${scrolled ? 'hidden' : 'block'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2">
          <div className="flex items-center gap-6 text-sm font-medium text-white uppercase tracking-wider">
            <a href="tel:+16469923825" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-brand-red" /> +1 (646) 992-3825
            </a>
            <a href="mailto:info@struzon.example" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-brand-red" /> info@struzon.example
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-white">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF size={14} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedinIn size={14} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={14} /></a>
              <a href="#" aria-label="X" className="hover:text-white transition-colors"><FaXTwitter size={14} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors"><FaYoutube size={14} /></a>
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
              className="text-xs xl:text-sm uppercase tracking-widest font-bold text-white/80 hover:text-white transition-colors"
              activeProps={{ className: "text-white border-b-2 border-brand-red pb-1" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-brand-red px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-brand-red-dark transition-all shadow-lg"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-navy border-t border-white/10 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <nav className="flex flex-col p-6 gap-5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.2em] font-bold text-white/70 hover:text-white transition-colors"
              activeProps={{ className: "text-white border-b border-brand-red pb-1" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-brand-red rounded-full text-center py-4 text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
