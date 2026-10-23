import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal, education } from '../data/portfolioData';

const TERMINAL_LINES = [
  { prompt: '~', cmd: 'whoami', result: 'anubhavi-jaiswal' },
  { prompt: '~/dev', cmd: 'cat focus.txt', result: 'Full-stack · AI · Problem Solving' },
  { prompt: '~/dev', cmd: 'echo $BATCH', result: '2023 – 2027' },
  { prompt: '~/dev', cmd: 'node --status', result: 'Open to internships ✓' },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 700);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
      }}
    >
      {/* Terminal Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '10px 14px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface-2)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28CA42', display: 'inline-block' }} />
        <span style={{ marginLeft: '8px', color: 'var(--color-text-muted)', fontSize: '0.72rem' }}>zsh — anubhavi</span>
      </div>
      {/* Terminal Body */}
      <div style={{ padding: '14px 16px', minHeight: '140px' }}>
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-accent)' }}>{line.prompt} $</span>
              <span style={{ color: 'var(--color-text-primary)' }}>{line.cmd}</span>
            </div>
            <div style={{ color: 'var(--color-text-secondary)', paddingLeft: '2px', marginTop: '2px' }}>
              {line.result}
            </div>
          </div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <span style={{ color: 'var(--color-text-muted)' }}>▮</span>
        )}
      </div>
    </div>
  );
}

function SpecsCard() {
  const edu = education[0];
  const specs = [
    { label: 'FOCUS', value: 'Full-Stack & AI' },
    { label: 'CGPA', value: edu.cgpa },
    { label: 'BATCH', value: edu.period },
    { label: 'STATUS', value: 'Hiring' },
  ];

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '16px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginTop: '12px',
      }}
    >
      {specs.map(s => (
        <div key={s.label} style={{ padding: '10px 12px', background: 'var(--color-surface-2)', borderRadius: '8px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: '4px' }}>
            {s.label}
          </div>
          <div style={{ color: 'var(--color-text-primary)', fontSize: '0.85rem', fontWeight: 600 }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        background: 'var(--color-obsidian)',
        overflow: 'hidden',
      }}
    >
      {/* Grid Background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />
      {/* Radial fade overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 40%, transparent 40%, var(--color-obsidian) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container-max section"
        style={{
          position: 'relative',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Availability Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
              <div
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--color-accent)',
                  boxShadow: '0 0 0 0 rgba(0,245,155,0.3)',
                  animation: 'pulseGlow 2.5s ease-in-out infinite',
                }}
              />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {personal.availabilityStatus}
              </span>
            </div>

            {/* Name */}
            <h1 style={{ lineHeight: 1.05, marginBottom: '1.5rem' }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
              }}>
                Anubhavi
              </span>
              <span style={{
                display: 'block',
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: 200,
                color: 'var(--color-text-secondary)',
                letterSpacing: '-0.03em',
              }}>
                Jaiswal
              </span>
            </h1>

            {/* Headline */}
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              marginBottom: '0.75rem',
              lineHeight: 1.4,
            }}>
              {personal.headline}
            </p>

            {/* Subheadline */}
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}>
              {personal.subheadline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2.5rem' }}>
              <button
                onClick={() => handleScroll('#projects')}
                style={{
                  padding: '12px 28px',
                  borderRadius: '8px',
                  background: 'var(--color-accent)',
                  color: '#08090B',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s, transform 0.2s',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Explore My Work
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                style={{
                  padding: '12px 28px',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: 'var(--color-text-primary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-text-secondary)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.85rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '0.85rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column — Desktop only */}
          <div className="hidden md:block">
            <TerminalCard />
            <SpecsCard />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--color-text-muted)',
          animation: 'fadeInUp 1s 1.2s ease-out both',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
