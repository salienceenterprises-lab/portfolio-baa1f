"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  const items = data?.community;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="community" style={{ background:"#05020f", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .pl-com-card {
          position:relative; padding:2rem;
          border:1px solid rgba(168,85,247,0.1);
          border-radius:12px; background:rgba(168,85,247,0.03);
          transition:all 0.3s ease; overflow:hidden;
        }
        .pl-com-card::after {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(135deg, rgba(168,85,247,0.06) 0%, rgba(34,211,238,0.04) 100%);
          opacity:0; transition:opacity 0.3s;
        }
        .pl-com-card:hover { border-color:rgba(168,85,247,0.3); transform:translateY(-3px); box-shadow:0 0 40px rgba(168,85,247,0.1); }
        .pl-com-card:hover::after { opacity:1; }
        .pl-com-link { color:rgba(168,85,247,0.6); text-decoration:none; display:inline-flex; align-items:center; gap:6px; font-size:12px; font-weight:600; transition:color 0.2s; }
        .pl-com-link:hover { color:#a855f7; }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(168,85,247,0.03)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>06</div>
      <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase" }}>06</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #a855f7, transparent)" }} />
            <FaBolt style={{ color:"#a855f7", fontSize:"12px", opacity:0.7 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f0e6ff", margin:0 }}>Impact & Community</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))", gap:"1.25rem" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.07 }}
            >
              <div className="pl-com-card">
                {/* Bolt marker + role */}
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"0.75rem" }}>
                  <FaBolt style={{
                    color: i % 2 === 0 ? "#a855f7" : "#22d3ee",
                    fontSize:"13px",
                    filter: `drop-shadow(0 0 6px ${i % 2 === 0 ? "rgba(168,85,247,0.7)" : "rgba(34,211,238,0.7)"})`,
                  }} />
                  <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.25em", color: i % 2 === 0 ? "rgba(168,85,247,0.7)" : "rgba(34,211,238,0.7)", textTransform:"uppercase" }}>
                    {item.role || item.type || "Contributor"}
                  </span>
                </div>

                <h3 style={{ fontSize:"16px", fontWeight:800, color:"#f0e6ff", margin:"0 0 8px", letterSpacing:"-0.02em" }}>
                  {item.title || item.name || item.organization}
                </h3>

                {item.description && (
                  <p style={{ fontSize:"13px", color:"rgba(240,230,255,0.5)", lineHeight:1.65, margin:"0 0 1rem" }}>
                    {item.description}
                  </p>
                )}

                {item.year && (
                  <p style={{ fontSize:"11px", color:"rgba(240,230,255,0.25)", marginBottom:"0.75rem" }}>
                    {item.year}
                  </p>
                )}

                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="pl-com-link">
                    View <FaExternalLinkAlt style={{ fontSize:"10px" }} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
