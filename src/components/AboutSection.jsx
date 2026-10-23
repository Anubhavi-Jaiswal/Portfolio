import { Code2, Zap, Users, Star } from 'lucide-react';
import { personal, education } from '../data/portfolioData';

const INTERESTS = [
  { icon: Code2, label: 'Full-Stack Engineering', desc: 'React, Node, databases' },
  { icon: Zap, label: 'AI Applications', desc: 'Practical ML integrations' },
  { icon: Star, label: 'Problem Solving', desc: 'DSA & system design' },
  { icon: Users, label: 'Leadership', desc: 'Community & team building' },
];

export default function AboutSection() {
  const edu = education[0];

  return (
    <section id="about" className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container-max">
        {/* Section Label */}
        <p className="mono-badge" style={{ marginBottom: '1rem' }}>[02 // ABOUT]</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Bio + Interests */}
          <div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Hi, I'm <strong style={{ color: 'var(--color-text-primary)' }}>{personal.name}</strong> — a Computer Science student at VIT Bhopal with a passion for building software that is both technically solid and genuinely useful.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              I enjoy the full spectrum of development, from designing clean interfaces to architecting backend systems and integrating AI capabilities. When I'm not coding, I'm usually leading the GDG On Campus chapter, organizing developer events, or diving deeper into data structures.
            </p>

            <h3 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Interests
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {INTERESTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  style={{
                    padding: '14px',
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                >
                  <Icon size={16} style={{ color: 'var(--color-accent)', marginBottom: '8px' }} />
                  <div style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' }}>{label}</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education + Quick Facts */}
          <div>
            <h3 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Education
            </h3>
            <div
              style={{
                padding: '20px',
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                borderLeft: '3px solid var(--color-accent)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <div>
                  <p style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '1rem' }}>{edu.shortName}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '2px' }}>{edu.degree}</p>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  background: 'var(--color-accent-dim)',
                  color: 'var(--color-accent)',
                  letterSpacing: '0.06em',
                }}>
                  {edu.status}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: '2px' }}>CGPA</p>
                  <p style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem' }}>{edu.cgpa}</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: '2px' }}>PERIOD</p>
                  <p style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{edu.period}</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <h3 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Quick Facts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Location', value: 'VIT Bhopal, India' },
                { label: 'Focus', value: personal.currentFocus },
                { label: 'Status', value: personal.availabilityStatus },
                { label: 'Email', value: personal.email },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 14px',
                    background: 'var(--color-surface-2)',
                    borderRadius: '8px',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>{label}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'right', maxWidth: '60%' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
