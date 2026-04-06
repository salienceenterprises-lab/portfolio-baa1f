"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBolt, FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function PortfolioNav({ data }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  if (!data) return null;

  const allLinks = [
    { label: "About",      href: "#about",      key: "about" },
    { label: "Education",  href: "#education",  key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects",   href: "#projects",   key: "projects" },
    { label: "Skills",     href: "#skills",     key: "skills" },
    { label: "Impact",     href: "#community",  key: "community" },
    { label: "Contact",    href: "#contact",    key: "email" },
  ];

  const activeLinks = allLinks.filter((l) => {
    if (l.label === "About") return true;
    const d = data?.[l.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // DOM-sorted active section detection
      const ids = activeLinks.map((l) => l.href.replace("#", ""));
      const sorted = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let current = sorted[0]?.id ?? "about";
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].offsetTop - 120) {
          current = sorted[i].id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .volt-nav-link { position: relative; transition: color 0.2s; }
        .volt-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, #a855f7, #22d3ee);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .volt-nav-link:hover::after,
        .volt-nav-link.active::after { transform: scaleX(1); }
        .volt-nav-link:hover { color: #a855f7 !important; }
        .volt-nav-link.active { color: #a855f7 !important; }
        @keyframes volt-border-pulse {
          0%,100% { border-color: rgba(168,85,247,0.2); }
          50% { border-color: rgba(168,85,247,0.5); }
        }
        .volt-scrolled { animation: volt-border-pulse 3s ease-in-out infinite; }
      `}</style>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(5,2,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(168,85,247,0.2)" : "1px solid transparent",
        }}
        className={scrolled ? "volt-scrolled" : ""}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => handleClick(e, "#about")}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            <span style={{
              width: "28px", height: "28px", background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 16px rgba(168,85,247,0.4)",
            }}>
              <FaBolt style={{ color: "#fff", fontSize: "13px" }} />
            </span>
            <span style={{ color: "#f0e6ff", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.02em" }}>
              {data.name?.split(" ")[0] || "Portfolio"}
              <span style={{ color: "#a855f7" }}>.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2rem" }}>
            {activeLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`volt-nav-link${isActive ? " active" : ""}`}
                  style={{
                    color: isActive ? "#a855f7" : "rgba(240,230,255,0.45)",
                    fontSize: "11px", fontWeight: 600,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    textDecoration: "none", paddingBottom: "2px",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            {data?.resumeBase64 && (
              <a
                href="/resume.pdf"
                download="Resume.pdf"
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "7px 16px", borderRadius: "999px",
                  background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(34,211,238,0.1))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#a855f7", fontSize: "11px", fontWeight: 700,
                  letterSpacing: "0.1em", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(34,211,238,0.2))";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(34,211,238,0.1))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <FaDownload style={{ fontSize: "10px" }} /> Resume
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "rgba(240,230,255,0.6)", cursor: "pointer", padding: "8px" }}
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: "rgba(5,2,15,0.97)", backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(168,85,247,0.2)", overflow: "hidden",
              }}
            >
              <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
                {activeLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    style={{
                      display: "block", padding: "12px 0",
                      borderBottom: i < activeLinks.length - 1 ? "1px solid rgba(168,85,247,0.1)" : "none",
                      color: "rgba(240,230,255,0.6)", fontSize: "13px",
                      fontWeight: 600, letterSpacing: "0.15em", textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
