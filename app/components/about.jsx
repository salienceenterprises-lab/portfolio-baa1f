"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaUser, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  if (!data) return null;

  const infoRows = [
    { label: "Location", value: data.location, icon: <FaMapMarkerAlt /> },
    { label: "Email",    value: data.email,    icon: <FaEnvelope />, link: `mailto:${data.email}` },
    { label: "GitHub",   value: data.github ? "@" + data.github.split("/").pop() : null, icon: <FaGithub />, link: data.github },
    { label: "LinkedIn", value: data.linkedin ? "LinkedIn" : null, icon: <FaLinkedin />, link: data.linkedin },
    { label: "Website",  value: data.website,  icon: <FaGlobe />,  link: data.website },
  ].filter((r) => r.value);

  return (
    <section id="about" style={{ background:"#05020f", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        @keyframes pl-about-pulse { 0%,100%{opacity:0.5;} 50%{opacity:1;} }
        .pl-info-row { display:flex; align-items:center; gap:12px; padding:14px 0; border-bottom:1px solid rgba(168,85,247,0.08); transition:background 0.2s; border-radius:6px; }
        .pl-info-row:last-child { border-bottom:none; }
        .pl-info-row:hover { background:rgba(168,85,247,0.04); padding-left:8px; }
        .pl-info-link { color:rgba(240,230,255,0.65); text-decoration:none; font-size:13px; transition:color 0.2s; }
        .pl-info-link:hover { color:#a855f7; }
        @media (max-width: 767px) { .pl-two-col { display: block !important; } }
      `}</style>

      {/* Background bolt watermark */}
      <div style={{ position:"absolute", top:"50%", right:"5%", transform:"translateY(-50%)", fontSize:"320px", color:"rgba(168,85,247,0.025)", pointerEvents:"none", userSelect:"none", lineHeight:1 }}>
        <FaBolt />
      </div>

      {/* Plasma orb */}
      <div style={{ position:"absolute", top:"-100px", left:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", animation:"pl-about-pulse 7s ease-in-out infinite", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}
          style={{ marginBottom:"4rem" }}
        >
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase" }}>01</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #a855f7, transparent)" }} />
            <FaBolt style={{ color:"#a855f7", fontSize:"12px", opacity:0.7 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f0e6ff", margin:0 }}>
            About Me
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}
          className="pl-two-col"
        >
          {/* Bio */}
          <motion.div
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
          >
            {/* Electric quote border */}
            <div style={{
              borderLeft:"2px solid #a855f7",
              paddingLeft:"1.5rem", marginBottom:"2.5rem",
              boxShadow:"-4px 0 20px rgba(168,85,247,0.2)",
            }}>
              <p style={{
                fontSize:"clamp(1rem, 1.8vw, 1.2rem)", lineHeight:1.8,
                color:"rgba(240,230,255,0.75)", fontWeight:300,
                margin:0, letterSpacing:"-0.01em",
              }}>
                {data.bio}
              </p>
            </div>

            {/* Top skills preview */}
            {data.skills?.length > 0 && (
              <div>
                <p style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase", marginBottom:"1rem" }}>
                  Core Skills
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                  {data.skills.slice(0, 8).map((skill, i) => (
                    <span key={i} style={{
                      padding:"5px 14px",
                      border:`1px solid ${i % 2 === 0 ? "rgba(168,85,247,0.25)" : "rgba(34,211,238,0.2)"}`,
                      color: i % 2 === 0 ? "rgba(168,85,247,0.8)" : "rgba(34,211,238,0.7)",
                      fontSize:"11px", fontWeight:600, letterSpacing:"0.05em",
                      background: i % 2 === 0 ? "rgba(168,85,247,0.06)" : "rgba(34,211,238,0.05)",
                      borderRadius:"4px",
                    }}>
                      {skill}
                    </span>
                  ))}
                  {data.skills.length > 8 && (
                    <a href="#skills" style={{ padding:"5px 14px", border:"1px solid rgba(240,230,255,0.1)", color:"rgba(240,230,255,0.35)", fontSize:"11px", borderRadius:"4px", textDecoration:"none" }}>
                      +{data.skills.length - 8} more
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Info table */}
          <motion.div
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.7, delay:0.25 }}
            style={{
              background:"rgba(168,85,247,0.04)",
              border:"1px solid rgba(168,85,247,0.12)",
              borderRadius:"12px", padding:"2rem",
            }}
          >
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"1.5rem", paddingBottom:"1rem", borderBottom:"1px solid rgba(168,85,247,0.1)" }}>
              <span style={{
                width:"32px", height:"32px", borderRadius:"8px",
                background:"rgba(168,85,247,0.1)", border:"1px solid rgba(168,85,247,0.2)",
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"#a855f7",
              }}>
                <FaUser size={14} />
              </span>
              <span style={{ fontSize:"12px", fontWeight:700, letterSpacing:"0.2em", color:"rgba(240,230,255,0.4)", textTransform:"uppercase" }}>
                Quick Info
              </span>
            </div>

            {infoRows.map((row, i) => (
              <div key={i} className="pl-info-row">
                <span style={{ color:"rgba(168,85,247,0.6)", fontSize:"13px", flexShrink:0 }}>{row.icon}</span>
                <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.2em", color:"rgba(240,230,255,0.3)", textTransform:"uppercase", width:"70px", flexShrink:0 }}>
                  {row.label}
                </span>
                {row.link ? (
                  <a href={row.link} target="_blank" rel="noopener noreferrer" className="pl-info-link">
                    {row.value}
                  </a>
                ) : (
                  <span style={{ color:"rgba(240,230,255,0.65)", fontSize:"13px" }}>{row.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
