"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  const items = data?.experience;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="experience" style={{ background:"#05020f", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .pl-exp-card {
          position:relative; display:grid; grid-template-columns:3rem 1fr; gap:1.5rem;
          padding:2.5rem 0; border-bottom:1px solid rgba(168,85,247,0.08);
          transition:all 0.3s;
        }
        .pl-exp-card:last-child { border-bottom:none; }
        .pl-exp-card:hover .pl-exp-num { color:#a855f7; text-shadow:0 0 20px rgba(168,85,247,0.6); }
        .pl-exp-card:hover .pl-exp-body { padding-left:12px; }
        .pl-exp-body { transition:padding 0.3s ease; }
        .pl-exp-num { font-size:32px; font-weight:900; color:rgba(168,85,247,0.12); line-height:1; transition:all 0.3s; font-variant-numeric:tabular-nums; }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(168,85,247,0.03)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>03</div>
      <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase" }}>03</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #a855f7, transparent)" }} />
            <FaBolt style={{ color:"#a855f7", fontSize:"12px", opacity:0.7 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f0e6ff", margin:0 }}>Experience</h2>
        </motion.div>

        <div>
          {items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.08 }}
              className="pl-exp-card"
            >
              {/* Number */}
              <div className="pl-exp-num">{String(i + 1).padStart(2, "0")}</div>

              {/* Content */}
              <div className="pl-exp-body">
                <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"1rem", marginBottom:"0.75rem" }}>
                  <div>
                    <h3 style={{ fontSize:"18px", fontWeight:800, color:"#f0e6ff", margin:"0 0 4px", letterSpacing:"-0.02em" }}>
                      {exp.role || exp.title || exp.position}
                    </h3>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                      <FaBriefcase style={{ color:"rgba(168,85,247,0.6)", fontSize:"12px" }} />
                      <span style={{ fontSize:"13px", fontWeight:600, color:"rgba(168,85,247,0.8)" }}>
                        {exp.company || exp.employer || exp.organization}
                      </span>
                    </div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"6px" }}>
                    <span style={{
                      fontSize:"10px", fontWeight:700, letterSpacing:"0.15em",
                      padding:"5px 14px", borderRadius:"999px",
                      background:"rgba(168,85,247,0.08)", border:"1px solid rgba(168,85,247,0.2)",
                      color:"rgba(168,85,247,0.8)", whiteSpace:"nowrap",
                    }}>
                      {exp.period || exp.duration || exp.years || exp.startDate}
                    </span>
                    {exp.location && (
                      <span style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", color:"rgba(240,230,255,0.3)" }}>
                        <FaMapMarkerAlt style={{ fontSize:"9px" }} /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {exp.description && (
                  <p style={{ fontSize:"14px", color:"rgba(240,230,255,0.5)", lineHeight:1.75, margin:"0 0 1rem" }}>
                    {exp.description}
                  </p>
                )}

                {(() => {
                  const bullets = Array.isArray(exp.highlights)      ? exp.highlights
                                : Array.isArray(exp.responsibilities) ? exp.responsibilities
                                : Array.isArray(exp.bullets)          ? exp.bullets
                                : null;
                  const hasBullets = bullets && bullets.filter(Boolean).length > 0;
                  return hasBullets && (
                    <ul style={{ listStyle:"none", padding:0, margin:"0 0 1rem", display:"flex", flexDirection:"column", gap:"6px" }}>
                      {bullets.filter(Boolean).map((item, j) => (
                        <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:"10px", fontSize:"13px", color:"rgba(240,230,255,0.5)", lineHeight:1.6 }}>
                          <FaBolt style={{ color:"rgba(168,85,247,0.5)", fontSize:"9px", marginTop:"5px", flexShrink:0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                })()}

                {/* Tech stack tags */}
                {(() => {
                  const stack = Array.isArray(exp.stack)        ? exp.stack
                              : Array.isArray(exp.tags)          ? exp.tags
                              : Array.isArray(exp.technologies)  ? exp.technologies
                              : Array.isArray(exp.tech)          ? exp.tech : [];
                  return stack.length > 0 && (
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"0.5rem" }}>
                      {stack.filter(Boolean).map((t, j) => (
                        <span key={j} style={{ fontSize:"10px", fontWeight:600, padding:"3px 10px", borderRadius:"4px", background:"rgba(34,211,238,0.06)", border:"1px solid rgba(34,211,238,0.15)", color:"rgba(34,211,238,0.7)", letterSpacing:"0.05em" }}>
                          {typeof t === "string" ? t : t?.name || String(t)}
                        </span>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
