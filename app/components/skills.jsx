"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function PortfolioSkills({ data }) {
  const skills = data?.skills;
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  // Group into chunks of ~8 for visual rows
  const categories = data?.skillCategories;
  const hasCategories = categories && typeof categories === "object" && Object.keys(categories).length > 0;

  return (
    <section id="skills" style={{ background:"#05020f", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        @keyframes pl-tag-glow { 0%,100%{box-shadow:none;} 50%{box-shadow:0 0 16px rgba(168,85,247,0.25);} }
        .pl-skill-tag {
          display:inline-flex; align-items:center; gap:6px;
          padding:8px 18px; border-radius:6px; cursor:default;
          font-size:12px; font-weight:600; letter-spacing:0.05em;
          transition:all 0.25s ease;
        }
        .pl-skill-tag.violet {
          background:rgba(168,85,247,0.07); border:1px solid rgba(168,85,247,0.2);
          color:rgba(168,85,247,0.85);
        }
        .pl-skill-tag.cyan {
          background:rgba(34,211,238,0.06); border:1px solid rgba(34,211,238,0.15);
          color:rgba(34,211,238,0.8);
        }
        .pl-skill-tag.violet:hover {
          background:rgba(168,85,247,0.18); border-color:rgba(168,85,247,0.45);
          color:#a855f7; transform:translateY(-2px);
          box-shadow:0 0 20px rgba(168,85,247,0.25);
        }
        .pl-skill-tag.cyan:hover {
          background:rgba(34,211,238,0.14); border-color:rgba(34,211,238,0.4);
          color:#22d3ee; transform:translateY(-2px);
          box-shadow:0 0 20px rgba(34,211,238,0.2);
        }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(168,85,247,0.03)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>05</div>
      <div style={{ position:"absolute", top:"-100px", left:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase" }}>05</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #a855f7, transparent)" }} />
            <FaBolt style={{ color:"#a855f7", fontSize:"12px", opacity:0.7 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f0e6ff", margin:0 }}>Skills</h2>
        </motion.div>

        {hasCategories ? (
          /* Category view */
          <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
            {Object.entries(categories).map(([cat, catSkills], ci) => (
              <motion.div
                key={cat}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:ci * 0.08 }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1.25rem" }}>
                  <div style={{ width:"2px", height:"20px", background:"linear-gradient(180deg, #a855f7, #22d3ee)", borderRadius:"2px" }} />
                  <span style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.25em", color:"rgba(240,230,255,0.4)", textTransform:"uppercase" }}>{cat}</span>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
                  {(Array.isArray(catSkills) ? catSkills : []).map((skill, i) => (
                    <span key={i} className={`pl-skill-tag ${i % 2 === 0 ? "violet" : "cyan"}`}>
                      <FaBolt style={{ fontSize:"8px" }} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Flat cloud view */
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
          >
            {/* Divider line */}
            <div style={{ height:"1px", background:"linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(34,211,238,0.2), transparent)", marginBottom:"2.5rem" }} />
            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
              {skills.map((skill, i) => (
                <span key={i} className={`pl-skill-tag ${i % 3 === 0 ? "violet" : i % 3 === 1 ? "cyan" : "violet"}`}
                  style={{ fontSize: i % 5 === 0 ? "13px" : "11px" }}
                >
                  <FaBolt style={{ fontSize:"8px" }} />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
