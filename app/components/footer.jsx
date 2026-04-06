"use client";
import React from "react";
import { FaBolt, FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function PortfolioFooter({ data }) {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub size={16} />,   href: data?.github,   label:"GitHub" },
    { icon: <FaLinkedin size={16} />, href: data?.linkedin, label:"LinkedIn" },
    { icon: <FaEnvelope size={16} />, href: data?.email ? `mailto:${data.email}` : null, label:"Email" },
    { icon: <FaGlobe size={16} />,    href: data?.website,  label:"Website" },
  ].filter((s) => s.href);

  const navLinks = [
    { label:"About",      href:"#about" },
    { label:"Experience", href:"#experience" },
    { label:"Projects",   href:"#projects" },
    { label:"Skills",     href:"#skills" },
    { label:"Contact",    href:"#contact" },
  ];

  return (
    <footer style={{ background:"#05020f", padding:"4rem 1.5rem 2rem", position:"relative", overflow:"hidden", borderTop:"1px solid rgba(168,85,247,0.1)" }}>
      <style>{`
        .pl-footer-link { color:rgba(240,230,255,0.35); text-decoration:none; font-size:12px; font-weight:500; letter-spacing:0.1em; transition:color 0.2s; }
        .pl-footer-link:hover { color:#a855f7; }
        .pl-footer-social { width:38px; height:38px; border-radius:9px; border:1px solid rgba(168,85,247,0.15); background:rgba(168,85,247,0.05); display:flex; align-items:center; justify-content:center; color:rgba(168,85,247,0.5); text-decoration:none; transition:all 0.2s; }
        .pl-footer-social:hover { border-color:rgba(168,85,247,0.4); background:rgba(168,85,247,0.12); color:#a855f7; box-shadow:0 0 16px rgba(168,85,247,0.25); }
      `}</style>

      {/* Top electric line */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"1px", background:"linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(34,211,238,0.3), transparent)" }} />

      {/* Plasma glow */}
      <div style={{ position:"absolute", top:"-100px", left:"50%", transform:"translateX(-50%)", width:"600px", height:"200px", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Main row */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"2rem", marginBottom:"3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"0.75rem" }}>
              <span style={{ width:"26px", height:"26px", background:"linear-gradient(135deg, #a855f7, #22d3ee)", borderRadius:"6px", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 14px rgba(168,85,247,0.4)" }}>
                <FaBolt style={{ color:"#fff", fontSize:"12px" }} />
              </span>
              <span style={{ fontSize:"16px", fontWeight:700, color:"#f0e6ff", letterSpacing:"-0.02em" }}>
                {data?.name || "Portfolio"}<span style={{ color:"#a855f7" }}>.</span>
              </span>
            </div>
            {data?.title && (
              <p style={{ fontSize:"12px", color:"rgba(240,230,255,0.3)", margin:0 }}>{data.title}</p>
            )}
          </div>

          {/* Nav links */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:"1.5rem" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="pl-footer-link">{l.label}</a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display:"flex", gap:"10px" }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="pl-footer-social">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:"1px", background:"rgba(168,85,247,0.08)", marginBottom:"1.5rem" }} />

        {/* Bottom row */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
          <p style={{ fontSize:"11px", color:"rgba(240,230,255,0.2)", margin:0 }}>
            © {year} {data?.name}. All rights reserved.
          </p>
          <p style={{ fontSize:"11px", color:"rgba(240,230,255,0.2)", margin:0 }}>
            Built with{" "}
            <span style={{ color:"#a855f7", fontWeight:700 }}>Salience</span>
            {" "}<FaBolt style={{ display:"inline", fontSize:"9px", color:"#a855f7", verticalAlign:"middle" }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
