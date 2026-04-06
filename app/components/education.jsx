"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  const items = data?.education;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="education" style={{ background:"#05020f", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .pl-edu-card {
          position:relative; padding:2rem 2rem 2rem 2.5rem;
          border:1px solid rgba(168,85,247,0.1);
          border-radius:12px; background:rgba(168,85,247,0.03);
          transition:all 0.3s ease; cursor:default;
        }
        .pl-edu-card::before {
          content:'';
          position:absolute; left:0; top:0; bottom:0;
          width:2px; border-radius:2px 0 0 2px;
          background:linear-gradient(180deg, #a855f7, #22d3ee);
          transform:scaleY(0); transform-origin:top;
          transition:transform 0.4s ease;
        }
        .pl-edu-card:hover { border-color:rgba(168,85,247,0.3); background:rgba(168,85,247,0.06); box-shadow:0 0 40px rgba(168,85,247,0.08); }
        .pl-edu-card:hover::before { transform:scaleY(1); }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(168,85,247,0.03)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>02</div>
      <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase" }}>02</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #a855f7, transparent)" }} />
            <FaBolt style={{ color:"#a855f7", fontSize:"12px", opacity:0.7 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f0e6ff", margin:0 }}>Education</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px,1fr))", gap:"1.5rem" }}>
          {items.map((edu, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.1 }}>
              <div className="pl-edu-card">
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"1rem", marginBottom:"1.25rem" }}>
                  <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.2em", padding:"4px 12px", borderRadius:"999px", background:"rgba(34,211,238,0.08)", border:"1px solid rgba(34,211,238,0.2)", color:"rgba(34,211,238,0.8)" }}>
                    {edu.period || edu.year || edu.graduationYear || edu.years || "—"}
                  </span>
                  {edu.location && (
                    <span style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", color:"rgba(240,230,255,0.3)", whiteSpace:"nowrap" }}>
                      <FaMapMarkerAlt style={{ fontSize:"9px" }} /> {edu.location}
                    </span>
                  )}
                </div>
                <div style={{ display:"flex", alignItems:"flex-start", gap:"14px" }}>
                  <span style={{ color:"rgba(168,85,247,0.6)", fontSize:"18px", marginTop:"2px", flexShrink:0 }}><FaGraduationCap /></span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <h3 style={{ fontSize:"16px", fontWeight:800, color:"#f0e6ff", margin:"0 0 6px", letterSpacing:"-0.02em" }}>
                      {edu.degree || edu.field || edu.qualification || edu.program}
                    </h3>
                    <p style={{ fontSize:"13px", fontWeight:600, color:"rgba(168,85,247,0.8)", margin:"0 0 8px" }}>
                      {edu.institution || edu.school || edu.university}
                    </p>
                    {edu.description && (
                      <p style={{ fontSize:"13px", color:"rgba(240,230,255,0.45)", lineHeight:1.6, margin:"0 0 10px" }}>{edu.description}</p>
                    )}
                    {(edu.gpa || edu.grade || edu.result) && (
                      <p style={{ fontSize:"11px", color:"rgba(34,211,238,0.6)", marginBottom:"10px", fontWeight:600 }}>
                        GPA / Grade: {edu.gpa || edu.grade || edu.result}
                      </p>
                    )}
                    {Array.isArray(edu.achievements) && edu.achievements.filter(Boolean).length > 0 && (
                      <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"6px" }}>
                        {edu.achievements.filter(Boolean).map((a, j) => (
                          <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:"10px", fontSize:"13px", color:"rgba(240,230,255,0.45)", lineHeight:1.6 }}>
                            <div style={{ width:"6px", height:"6px", background:"rgba(168,85,247,0.7)", transform:"rotate(45deg)", marginTop:"5px", flexShrink:0 }} />
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
