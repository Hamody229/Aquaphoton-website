import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLink = (id) => (location.pathname === "/" ? id : `/${id}`);

  const navItemClasses = (isActive) => `
    relative px-2 py-1 rounded-full transition-all duration-300
    font-mono uppercase tracking-[0.15em] text-[11px] xl:text-[12px]
    ${
      isActive
        ? "text-blue-200 font-bold shadow-[0_0_15px_rgba(59,130,246,0.6)] bg-blue-500/10"
        : "text-slate-300 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/5"
    }
  `;

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-10 py-4 flex justify-between items-center backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-lg shadow-blue-900/10">
      <div className="flex items-center gap-2 md:gap-3">
        <Link to="/">
          <img
            src="/Team_Logo.png"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_10px_rgba(37,99,235,0.5)] cursor-pointer hover:scale-105 transition-transform"
          />
        </Link>
        <div className="flex flex-col">
          <Link
            to="/"
            style={{
              fontFamily:
                '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
            }}
            className="text-lg md:text-[22px] font-bold tracking-tighter text-white leading-none hover:text-blue-200 transition-colors"
          >
            AQUA<span className="text-blue-500">PHOTON</span>
          </Link>
          <span className="hidden md:block text-[9px] font-mono tracking-[0.3em] text-blue-300 uppercase opacity-80">
            Robotics Team
          </span>
        </div>
      </div>

      {/* --- Desktop --- */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">
        <a
          href={getLink("#home")}
          className={navItemClasses(
            location.pathname === "/" && location.hash === "#home",
          )}
        >
          Home
        </a>

        <Link
          to="/projects"
          className={navItemClasses(isActiveRoute("/projects"))}
        >
          Projects
        </Link>

        <Link to="/team" className={navItemClasses(isActiveRoute("/team"))}>
          Team
        </Link>

        <Link
          to="/sessions"
          className={navItemClasses(isActiveRoute("/sessions"))}
        >
          Gallery
        </Link>

        <a
          href={getLink("#contact")}
          className="ml-4 bg-blue-600/90 px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-white hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] border border-blue-400/30 hover:-translate-y-0.5"
        >
          Contact
        </a>

        <div className="flex flex-col gap-1 ml-2 pl-4 border-l border-white/10 opacity-60">
          <div className="w-2 h-2 rounded-full border border-slate-400 flex items-center justify-center bg-slate-800 shadow-[0_0_5px_rgba(255,255,255,0.2)]">
            <div className="w-[1px] h-full bg-slate-400 rotate-45" />
          </div>
          <div className="w-2 h-2 rounded-full border border-slate-400 flex items-center justify-center bg-slate-800 shadow-[0_0_5px_rgba(255,255,255,0.2)]">
            <div className="w-[1px] h-full bg-slate-400 rotate-45" />
          </div>
        </div>
      </div>

      {/* --- Mobile --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white p-2 relative z-50 hover:text-blue-400 transition-colors"
      >
        <div
          className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-white" : ""}`}
        />
        <div
          className={`w-4 h-0.5 bg-current ml-auto mb-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-white" : ""}`}
        />
      </button>

      {isOpen && (

        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-10 gap-8 lg:hidden shadow-2xl animate-fade-in-down h-[calc(100vh-80px)] overflow-y-auto">
          <a
            href={getLink("#home")}
            onClick={() => setIsOpen(false)}
            className={navItemClasses(false)}
          >
            Home
          </a>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={navItemClasses(isActiveRoute("/projects"))}
          >
            Projects
          </Link>

          <Link
            to="/team"
            onClick={() => setIsOpen(false)}
            className={navItemClasses(isActiveRoute("/team"))}
          >
            Team
          </Link>

          <Link
            to="/sessions"
            onClick={() => setIsOpen(false)}
            className={navItemClasses(isActiveRoute("/sessions"))}
          >
            Gallery
          </Link>

          <a
            href={getLink("#contact")}
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 px-8 py-3 rounded-full mt-2 shadow-[0_0_20px_rgba(37,99,235,0.5)] font-mono uppercase tracking-widest text-xs font-bold text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
