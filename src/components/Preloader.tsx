import { useState, useEffect } from "react";

// Import assets to ensure Vite processes them correctly for production
import iconAccurate from "@/assets/icons/accurate-designs.png";
import iconEngineered from "@/assets/icons/engineered-accuracy.png";
import iconFabrication from "@/assets/icons/fabrication-ready.png";
import iconSmart from "@/assets/icons/smart-detailing.png";
import iconSteel from "@/assets/icons/steel-excellence.png";
import logoImg from "@/assets/struzon-logo.png";

const INTRO_ICONS = [
  { img: iconAccurate, label: "Accurate Designs" },
  { img: iconEngineered, label: "Engineered Accuracy" },
  { img: iconFabrication, label: "Fabrication Ready" },
  { img: iconSmart, label: "Smart Detailing" },
  { img: iconSteel, label: "Steel Excellence" },
];

const logo = logoImg;


export function Preloader() {
  const [phase, setPhase] = useState(-2); // -2: Star, -1: Merge, 0: ST Center, 1: Slided, 2: Slogan, 3: Exit
  const [isVisible, setIsVisible] = useState(true);
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    console.log("Preloader mounted, starting sequence...");

    // Handle responsive radius
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 125 : 220);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);

    // Hard emergency timeout to ensure page is ALWAYS shown
    const emergencyTimeout = setTimeout(() => {
      console.log("Preloader emergency timeout reached!");
      setIsVisible(false);
    }, 8000);

    const t1 = setTimeout(() => setPhase(-1), 2000);
    const t2 = setTimeout(() => setPhase(0), 2800);
    const t3 = setTimeout(() => setPhase(1), 3400);
    const t4 = setTimeout(() => setPhase(2), 4000);
    const t5 = setTimeout(() => setPhase(3), 4600);
    const t6 = setTimeout(() => {
      console.log("Preloader sequence complete.");
      setIsVisible(false);
    }, 5200);

    return () => {
      clearTimeout(emergencyTimeout);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      window.removeEventListener('resize', updateRadius);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center preloader-bg transition-opacity duration-500 ${phase === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
    >
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white text-xs uppercase tracking-widest z-[3000] transition-colors"
      >
        Skip Animation
      </button>

      <div className="relative flex flex-col items-center">
        {/* Intro Star Icons */}
        {phase < 0 && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === -1 ? "scale-50 opacity-0" : "opacity-100 scale-100"
              }`}
            style={{ animation: "star-rotation 15s linear infinite" }}
          >
            {INTRO_ICONS.map((icon, idx) => {
              const angle = (idx * 360) / INTRO_ICONS.length - 90; // Upward star
              return (
                <div
                  key={icon.label}
                  className="absolute"
                  style={{
                    "--angle": `${angle}deg`,
                    "--radius": `${radius}px`,
                    animation: `dial-in 0.5s ease-out forwards`,
                    animationDelay: `${idx * 0.3}s`,
                    opacity: 0, // Start hidden
                  } as React.CSSProperties}
                >
                  {/* The dynamic rotation-reversal must be on a child to combine with dial-in */}
                  <div
                    className="flex flex-col items-center gap-1 sm:gap-2"
                    style={{ animation: "star-rotation-reverse 15s linear infinite" }}
                  >
                    <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-navy/10 flex items-center justify-center">
                      <img src={icon.img} alt={icon.label} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-navy font-display text-[9px] sm:text-xs uppercase tracking-wider font-semibold whitespace-nowrap bg-white/80 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md">
                      {icon.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Logo Container */}
        <div className="relative flex items-center h-24 sm:h-32">
          {/* The "ST" Part (Always visible) */}
          <div
            className={`transition-all duration-500 ease-in-out ${phase === 0 ? "scale-150" : phase < 0 ? "scale-100" : "scale-100 -translate-x-[70px] sm:-translate-x-[100px]"
              }`}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 overflow-hidden">
              {/* Extracting ST from full logo using negative margin + overlow */}
              <img
                src={logo}
                alt="ST Logo"
                className="absolute left-0 top-0 h-full w-auto max-w-none"
                style={{ clipPath: 'inset(0 74% 0 0)' }}
              />
            </div>
          </div>

          {/* Business Name "STRUZON Technologies Inc." */}
          <div
            className={`absolute left-[20px] sm:left-[30px] whitespace-nowrap overflow-hidden transition-opacity duration-500 ${phase >= 1 ? "opacity-100" : "opacity-0"
              }`}
            style={{
              animation: phase >= 1 ? 'reveal-text 0.8s forwards ease-out' : 'none',
              width: phase >= 1 ? 'auto' : '0'
            }}
          >
            <div className="flex flex-col">
              <span className="text-4xl sm:text-6xl font-bold tracking-tight text-navy">
                <span className="text-brand-red">STRUZON</span>
              </span>
              <span className="text-xl sm:text-2xl font-medium tracking-wide text-navy/90 ml-1">
                Technologies Inc.
              </span>
            </div>
          </div>
        </div>

        {/* Slogan "Stands For Trust" */}
        <div
          className={`mt-6 text-center transition-all duration-700 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{
            // Shift the slogan to align with the visual center of the logo + text assembly
            marginLeft: phase >= 1 ? '70px' : '0'
          }}
        >
          <p className="text-sm sm:text-lg uppercase tracking-[0.3em] font-medium text-navy/80">
            Stands For Trust
          </p>
          <div className="h-0.5 w-12 bg-brand-red mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(200,32,46,0.3)]" />
        </div>
      </div>
    </div>
  );
}
