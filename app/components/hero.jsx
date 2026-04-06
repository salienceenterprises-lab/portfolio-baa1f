"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const hasPhoto = !!data?.heroImageBase64;
  const firstName = data?.name?.split(" ")[0] ?? "";
  const restName  = data?.name?.split(" ").slice(1).join(" ") ?? "";

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", background: "#05020f", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <style>{`
        @keyframes pl-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pl-orbit { from { transform: rotate(0deg) translateX(52px) rotate(0deg); } to { transform: rotate(360deg) translateX(52px) rotate(-360deg); } }
        @keyframes pl-pulse { 0%,100% { opacity:0.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.08); } }
        @keyframes pl-drift { 0%,100% { transform:translateY(0) scale(1); } 50% { transform:translateY(-24px) scale(1.06); } }
        @keyframes pl-flash { 0%,88%,100% { opacity:0; } 91%,94% { opacity:1; } 92.5%,96% { opacity:0.2; } }
        @keyframes pl-crack-draw { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
        @keyframes pl-bob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }
        .pl-cta-primary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 32px; border-radius:999px; cursor:pointer;
          background:linear-gradient(135deg,#a855f7,#7c3aed);
          color:#fff; font-size:13px; font-weight:700; letter-spacing:0.08em;
          border:none; text-decoration:none;
          box-shadow:0 0 32px rgba(168,85,247,0.35);
          transition:all 0.25s ease;
        }
        .pl-cta-primary:hover {
          transform:translateY(-2px);
          box-shadow:0 0 50px rgba(168,85,247,0.55);
          background:linear-gradient(135deg,#b97aff,#9333ea);
        }
        .pl-cta-secondary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 32px; border-radius:999px; cursor:pointer;
          background:rgba(168,85,247,0.07); color:rgba(240,230,255,0.7);
          font-size:13px; font-weight:700; letter-spacing:0.08em;
          border:1px solid rgba(168,85,247,0.25); text-decoration:none;
          transition:all 0.25s ease;
        }
        .pl-cta-secondary:hover {
          transform:translateY(-2px);
          background:rgba(168,85,247,0.15);
          border-color:rgba(168,85,247,0.5);
          color:#f0e6ff;
          box-shadow:0 0 30px rgba(168,85,247,0.2);
        }
        .pl-scroll-btn { background:none; border:none; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; animation:pl-bob 2.5s ease-in-out infinite; }
      `}</style>

      {/* ── Lightning crack SVG background ── */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:0.18 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="crack1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="crack2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Main bolt crack — center */}
        <polyline points="520,0 480,180 540,190 460,420 530,435 440,700 520,720 430,1080"
          fill="none" stroke="url(#crack1)" strokeWidth="1.5"
          strokeDasharray="1200" style={{ animation:"pl-crack-draw 3s ease forwards" }} />
        {/* Branch left */}
        <polyline points="480,180 390,280 420,300 340,500"
          fill="none" stroke="url(#crack2)" strokeWidth="0.8"
          strokeDasharray="600" style={{ animation:"pl-crack-draw 3.5s 0.5s ease forwards" }} />
        {/* Branch right */}
        <polyline points="540,190 650,310 610,330 720,520"
          fill="none" stroke="url(#crack1)" strokeWidth="0.8"
          strokeDasharray="600" style={{ animation:"pl-crack-draw 3.5s 0.8s ease forwards" }} />
        {/* Far left crack */}
        <polyline points="120,0 80,250 140,270 60,600"
          fill="none" stroke="#a855f7" strokeWidth="0.6" strokeOpacity="0.3"
          strokeDasharray="800" style={{ animation:"pl-crack-draw 4s 1s ease forwards" }} />
        {/* Far right crack */}
        <polyline points="1300,100 1260,350 1340,380 1280,800"
          fill="none" stroke="#22d3ee" strokeWidth="0.6" strokeOpacity="0.3"
          strokeDasharray="800" style={{ animation:"pl-crack-draw 4s 1.2s ease forwards" }} />
      </svg>

      {/* ── Plasma orbs ── */}
      <div style={{ position:"absolute", top:"15%", left:"8%", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)", animation:"pl-drift 8s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"6%", width:"560px", height:"560px", borderRadius:"50%", background:"radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)", animation:"pl-drift 11s 2s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"40%", right:"20%", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", animation:"pl-pulse 5s ease-in-out infinite", pointerEvents:"none" }} />

      {/* ── Occasional flash overlay ── */}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(168,85,247,0.06), rgba(34,211,238,0.04))", animation:"pl-flash 8s ease-in-out infinite", pointerEvents:"none" }} />

      {/* ── Content ── */}
      <div style={{
        position:"relative", zIndex:10, maxWidth:"1200px", margin:"0 auto",
        padding:"100px 1.5rem 2rem",
        display:"grid",
        gridTemplateColumns: hasPhoto ? "1fr auto" : "1fr",
        gap:"4rem", alignItems:"center",
      }}>

        {/* Left: text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            style={{ marginBottom:"2rem" }}
          >
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"6px 18px", borderRadius:"999px",
              background:"rgba(168,85,247,0.08)",
              border:"1px solid rgba(168,85,247,0.25)",
              color:"#a855f7", fontSize:"10px", fontWeight:800,
              letterSpacing:"0.35em", textTransform:"uppercase",
            }}>
              <FaBolt style={{ fontSize:"9px", animation:"pl-pulse 2s ease-in-out infinite" }} />
              {data?.title || "Portfolio"}
            </span>
          </motion.div>

          {/* Name */}
          <div style={{ overflow:"hidden", marginBottom:"0.5rem" }}>
            <motion.h1
              initial={{ opacity:0, y:60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15 }}
              style={{
                fontSize:"clamp(3.2rem, 9vw, 7.5rem)",
                fontWeight:900, lineHeight:0.88,
                letterSpacing:"-0.04em", color:"#f0e6ff", margin:0,
              }}
            >
              {firstName}
            </motion.h1>
          </div>
          <div style={{ overflow:"hidden", marginBottom:"2rem" }}>
            <motion.h1
              initial={{ opacity:0, y:60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.3 }}
              style={{
                fontSize:"clamp(3.2rem, 9vw, 7.5rem)",
                fontWeight:900, lineHeight:0.88,
                letterSpacing:"-0.04em", margin:0,
                background:"linear-gradient(135deg, #a855f7 0%, #7c3aed 40%, #22d3ee 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                backgroundClip:"text",
                filter:"drop-shadow(0 0 40px rgba(168,85,247,0.4))",
              }}
            >
              {restName || firstName}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.55 }}
            style={{
              fontSize:"clamp(1rem, 2vw, 1.25rem)", fontWeight:300,
              color:"rgba(240,230,255,0.55)", maxWidth:"540px", lineHeight:1.7,
              marginBottom:"3rem", letterSpacing:"-0.01em",
            }}
          >
            {data?.sloganHeroSection || data?.bio?.slice(0, 120)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.75 }}
            style={{ display:"flex", flexWrap:"wrap", gap:"1rem", alignItems:"center" }}
          >
            <button onClick={scrollToContact} className="pl-cta-primary">
              <FaEnvelope style={{ fontSize:"13px" }} /> Get In Touch
            </button>
            {data?.resumeBase64 && (
              <a href="/resume.pdf" download="Resume.pdf" className="pl-cta-secondary">
                <FaDownload style={{ fontSize:"12px" }} /> Download Resume
              </a>
            )}
          </motion.div>
        </div>

        {/* Right: photo */}
        {hasPhoto && (
          <motion.div
            initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.9, delay:0.4 }}
            style={{ position:"relative", flexShrink:0 }}
            className="hidden md:block"
          >
            {/* Outer spin ring */}
            <div style={{
              width:"280px", height:"280px", borderRadius:"50%",
              background:"conic-gradient(from 0deg, #a855f7, #22d3ee, #7c3aed, #a855f7)",
              animation:"pl-spin 6s linear infinite",
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 0 60px rgba(168,85,247,0.4), 0 0 120px rgba(168,85,247,0.15)",
            }}>
              <div style={{
                width:"268px", height:"268px", borderRadius:"50%",
                background:"#05020f",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <img
                  src={data.heroImageBase64}
                  alt={data.name}
                  style={{ width:"256px", height:"256px", borderRadius:"50%", objectFit:"cover" }}
                />
              </div>
            </div>
            {/* Orbiting dot */}
            <div style={{
              position:"absolute", top:"50%", left:"50%",
              width:"10px", height:"10px", borderRadius:"50%",
              background:"#22d3ee",
              boxShadow:"0 0 16px rgba(34,211,238,0.9)",
              transform:"translate(-50%,-50%)",
              animation:"pl-orbit 6s linear infinite",
            }} />
            {/* Floating bolt decorations */}
            <div style={{ position:"absolute", top:"-16px", right:"-8px", color:"#a855f7", opacity:0.7, animation:"pl-pulse 3s ease-in-out infinite" }}>
              <FaBolt size={22} />
            </div>
            <div style={{ position:"absolute", bottom:"-12px", left:"-4px", color:"#22d3ee", opacity:0.5, animation:"pl-pulse 3.5s 1s ease-in-out infinite" }}>
              <FaBolt size={14} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
        style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", zIndex:10 }}
      >
        <button className="pl-scroll-btn" onClick={scrollToAbout}>
          <span style={{ fontSize:"9px", letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase", fontWeight:600 }}>Scroll</span>
          <FaArrowDown style={{ color:"rgba(168,85,247,0.5)", fontSize:"12px" }} />
        </button>
      </motion.div>

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"120px", background:"linear-gradient(to top, #05020f, transparent)", pointerEvents:"none" }} />
    </section>
  );
}
