import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SideNav() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");


  const navSections = [
    "home",
    "about",
    "experience",
    "technologies",
    "faq",
    "contact",
  ];

  if (location.pathname !== "/") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight / 3;
      
      for (const section of navSections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= offset &&
          element.offsetTop + element.offsetHeight > offset
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-3 md:right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 md:gap-6 hidden md:flex">
      {navSections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="group relative flex items-center justify-end p-2 -mr-2"
          aria-label={`Scroll to ${section}`}
        >
          {/* Labels */}
          <span
            className={`absolute right-8 px-3 py-1 rounded bg-blue-600/90 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest transition-all duration-500 pointer-events-none 
            ${activeSection === section 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {section}
          </span>

          <div
            className={`transition-all duration-500 rounded-full border 
            ${activeSection === section 
              ? "w-2 h-2 md:w-3 md:h-3 bg-blue-500 border-blue-500 shadow-[0_0_10px_#3b82f6] scale-125" 
              : "w-1.5 h-1.5 md:w-2.5 md:h-2.5 border-blue-400/30 bg-transparent group-hover:border-blue-500 group-hover:bg-blue-500"
            }`}
          />
        </a>
      ))}
    </div>
  );
}