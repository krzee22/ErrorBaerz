'use client'

import { motion } from 'framer-motion'
import { Globe, Lock, AlertTriangle, Cpu, Zap, Activity } from 'lucide-react'

export const Overlay = () => {
  return (
    <div className="overlay">
      {/* Top Status Bar */}
      <div className="status-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="system-label" style={{ whiteSpace: 'nowrap' }}>BRAND KIT // 001</span>
          <span className="system-label hidden-mobile">COLLECTION: <span className="active-value">CORE 05</span></span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="hidden-mobile" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Globe size={12} className="system-label" />
            <Lock size={12} className="system-label" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={12} color="var(--red)" />
            <span style={{ color: 'var(--red)', whiteSpace: 'nowrap' }}>STATUS: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="corner-bracket corner-tl" />
      <div className="corner-bracket corner-tr" />
      <div className="corner-bracket corner-bl" />
      <div className="corner-bracket corner-br" />

      <div className="scroll-hint">SCROLL TO INITIALIZE // ERROR_BAERZ.EXE</div>

      {/* Hero Section */}
      <section id="hero">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="content-block"
        >
          <div style={{ borderLeft: '2px solid var(--magenta)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '4rem', lineHeight: 0.9, marginBottom: '0.5rem' }}>ERROR<br/>BAERZ™</h1>
            <span className="system-label" style={{ fontSize: '0.7rem' }}>SYSTEM STATES MADE PHYSICAL.</span>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <span style={{ color: 'var(--magenta)', fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
              [ CASE_STUDY_01: GLITCH HEART ]
            </span>
            <p style={{ fontSize: '0.9rem', opacity: 0.6, maxWidth: '400px', lineHeight: 1.6 }}>
              Technology is power. Use wisely. These Baerz are reminders that behind every connection is a system — and behind every system is a choice.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Detail Section: Warning Logic */}
      <section id="warnings" style={{ alignItems: 'flex-end' }}>
        <div className="content-block" style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end', color: 'var(--cyan)' }}>
              <Zap size={16} />
              <span style={{ fontSize: '0.8rem' }}>WARNING: SIGNAL INTERRUPTED</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end', color: 'var(--magenta)' }}>
              <Activity size={16} />
              <span style={{ fontSize: '0.8rem' }}>WARNING: SYSTEM TIMEOUT</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end', color: 'var(--red)' }}>
              <Cpu size={16} />
              <span style={{ fontSize: '0.8rem' }}>WARNING: MEMORY OVERFLOW</span>
            </div>
          </div>
          <h2 style={{ fontSize: '3rem' }}>CHANGE IS CONSTANT.</h2>
          <p className="system-label" style={{ marginTop: '0.5rem' }}>CAUTION IS ESSENTIAL.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="content-block">
          <div style={{ marginBottom: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <span className="system-label">COLLECT.</span>
            <span className="system-label">REFLECT.</span>
            <span className="system-label">RESET.</span>
            <span className="system-label">PROTECT.</span>
          </div>
          <h2 style={{ fontSize: '5rem', fontWeight: 700 }}>CORE 05</h2>
          <button style={{ 
            marginTop: '3rem',
            background: 'transparent',
            border: '1px solid var(--chrome)',
            color: 'var(--chrome)',
            padding: '1.2rem 4rem',
            fontSize: '0.8rem',
            letterSpacing: '0.4em',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            ACCESS COLLECTION
          </button>
        </div>
      </section>

      <footer style={{ position: 'fixed', bottom: '2rem', left: '4rem', fontSize: '0.6rem', opacity: 0.3 }}>
        SYS_VER: 1.0.4 // BUFFER_READY // © ERROR BAERZ
      </footer>
    </div>
  )
}
