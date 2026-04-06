"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaEnvelope, FaUser, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [form, setForm]       = useState({ name:"", email:"", message:"" });
  const [status, setStatus]   = useState("idle"); // idle | sending | sent | error
  const [focused, setFocused] = useState(null);

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:"POST",
        headers:{ "Content-Type":"application/json", Accept:"application/json" },
        body:JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const r = await res.json();
      setStatus(r.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width:"100%", background:"rgba(168,85,247,0.04)", border:"none",
    borderBottom:`1px solid ${focused === field ? "#a855f7" : "rgba(168,85,247,0.15)"}`,
    color:"#f0e6ff", fontSize:"14px", padding:"12px 0", outline:"none",
    transition:"border-color 0.25s",
    boxShadow: focused === field ? "0 2px 0 rgba(168,85,247,0.3)" : "none",
  });

  return (
    <section id="contact" style={{ background:"#05020f", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .pl-submit-btn {
          display:inline-flex; align-items:center; gap:10px; cursor:pointer;
          padding:14px 36px; border-radius:999px; border:none;
          background:linear-gradient(135deg, #a855f7, #7c3aed);
          color:#fff; font-size:13px; font-weight:700; letter-spacing:0.1em;
          box-shadow:0 0 30px rgba(168,85,247,0.3);
          transition:all 0.25s ease;
        }
        .pl-submit-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 0 50px rgba(168,85,247,0.5); background:linear-gradient(135deg, #b97aff, #9333ea); }
        .pl-submit-btn:disabled { opacity:0.5; cursor:not-allowed; }
        ::placeholder { color:rgba(240,230,255,0.2); }
        textarea { resize:none; font-family:inherit; }
        @media (max-width: 767px) { .pl-two-col { display: block !important; } }
      `}</style>

      {/* Ghost number */}
      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(168,85,247,0.03)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>07</div>

      {/* Plasma orbs */}
      <div style={{ position:"absolute", top:"-100px", right:"-80px", width:"450px", height:"450px", borderRadius:"50%", background:"radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-100px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(168,85,247,0.5)", textTransform:"uppercase" }}>07</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #a855f7, transparent)" }} />
            <FaBolt style={{ color:"#a855f7", fontSize:"12px", opacity:0.7 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#f0e6ff", margin:"0 0 1rem" }}>Let's Connect</h2>
          <p style={{ fontSize:"15px", color:"rgba(240,230,255,0.45)", maxWidth:"480px", lineHeight:1.7, margin:0 }}>
            Have a project in mind or just want to talk? Send a message and I'll get back to you.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }}
          className="pl-two-col"
        >
          {/* Form */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
            {status === "sent" ? (
              <div style={{ padding:"3rem", textAlign:"center", border:"1px solid rgba(168,85,247,0.2)", borderRadius:"14px", background:"rgba(168,85,247,0.05)" }}>
                <div style={{ fontSize:"48px", marginBottom:"1rem" }}>⚡</div>
                <h3 style={{ fontSize:"20px", fontWeight:800, color:"#f0e6ff", marginBottom:"0.5rem" }}>Message Sent!</h3>
                <p style={{ color:"rgba(240,230,255,0.5)", fontSize:"14px" }}>I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
                {/* Name */}
                <div>
                  <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(168,85,247,0.6)", textTransform:"uppercase", marginBottom:"10px" }}>
                    <FaUser style={{ fontSize:"9px" }} /> Name
                  </label>
                  <input
                    type="text" placeholder="Your name" required
                    value={form.name} onChange={(e) => setForm({...form, name:e.target.value})}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                {/* Email */}
                <div>
                  <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(168,85,247,0.6)", textTransform:"uppercase", marginBottom:"10px" }}>
                    <FaEnvelope style={{ fontSize:"9px" }} /> Email
                  </label>
                  <input
                    type="email" placeholder="your@email.com" required
                    value={form.email} onChange={(e) => setForm({...form, email:e.target.value})}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
                {/* Message */}
                <div>
                  <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(168,85,247,0.6)", textTransform:"uppercase", marginBottom:"10px" }}>
                    <FaBolt style={{ fontSize:"9px" }} /> Message
                  </label>
                  <textarea
                    rows={5} placeholder="Tell me about your project..." required
                    value={form.message} onChange={(e) => setForm({...form, message:e.target.value})}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), display:"block" }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ fontSize:"12px", color:"rgba(248,113,113,0.8)" }}>Something went wrong. Please try again.</p>
                )}

                <div>
                  <button type="submit" disabled={status === "sending"} className="pl-submit-btn">
                    {status === "sending" ? "Sending..." : <><FaPaperPlane /> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.25 }}>
            {/* Electric divider */}
            <div style={{ height:"1px", background:"linear-gradient(90deg, #a855f7, #22d3ee, transparent)", marginBottom:"2.5rem" }} />

            {data?.email && (
              <div style={{ marginBottom:"2rem" }}>
                <p style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(240,230,255,0.3)", textTransform:"uppercase", marginBottom:"6px" }}>Email</p>
                <a href={`mailto:${data.email}`} style={{ fontSize:"15px", color:"#a855f7", textDecoration:"none", fontWeight:600 }}>
                  {data.email}
                </a>
              </div>
            )}

            {data?.location && (
              <div style={{ marginBottom:"2rem" }}>
                <p style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(240,230,255,0.3)", textTransform:"uppercase", marginBottom:"6px" }}>Location</p>
                <p style={{ fontSize:"15px", color:"rgba(240,230,255,0.65)", margin:0, fontWeight:500 }}>{data.location}</p>
              </div>
            )}

            {/* Social links */}
            <div style={{ display:"flex", gap:"1rem", marginTop:"2rem" }}>
              {data?.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer"
                  style={{ width:"44px", height:"44px", borderRadius:"10px", border:"1px solid rgba(168,85,247,0.2)", background:"rgba(168,85,247,0.06)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(168,85,247,0.7)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(168,85,247,0.5)"; e.currentTarget.style.background="rgba(168,85,247,0.15)"; e.currentTarget.style.color="#a855f7"; e.currentTarget.style.boxShadow="0 0 20px rgba(168,85,247,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(168,85,247,0.2)"; e.currentTarget.style.background="rgba(168,85,247,0.06)"; e.currentTarget.style.color="rgba(168,85,247,0.7)"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <FaGithub size={18} />
                </a>
              )}
              {data?.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ width:"44px", height:"44px", borderRadius:"10px", border:"1px solid rgba(34,211,238,0.2)", background:"rgba(34,211,238,0.05)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(34,211,238,0.7)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(34,211,238,0.5)"; e.currentTarget.style.background="rgba(34,211,238,0.12)"; e.currentTarget.style.color="#22d3ee"; e.currentTarget.style.boxShadow="0 0 20px rgba(34,211,238,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(34,211,238,0.2)"; e.currentTarget.style.background="rgba(34,211,238,0.05)"; e.currentTarget.style.color="rgba(34,211,238,0.7)"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <FaLinkedin size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
