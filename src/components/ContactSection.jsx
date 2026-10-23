import { useState } from 'react';
import { Mail, Copy, Check, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-obsidian)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container-max">
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <p className="mono-badge" style={{ marginBottom: '1rem' }}>[07 // CONTACT]</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Let's build something<br />
            <span style={{ color: 'var(--color-accent)' }}>together.</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '3rem' }}>
            I'm open to internship opportunities, collaborations, and interesting projects. Feel free to reach out — I respond to every message.
          </p>

          {/* Email Copy */}
          <div
            onClick={copyEmail}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 24px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              cursor: 'pointer',
              marginBottom: '2rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          >
            <Mail size={16} style={{ color: 'var(--color-accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
              {personal.email}
            </span>
            <span style={{ color: 'var(--color-text-muted)' }}>
              {copied ? <Check size={15} style={{ color: 'var(--color-accent)' }} /> : <Copy size={15} />}
            </span>
          </div>

          {/* Link Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ marginBottom: '2rem' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-text-secondary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <GithubIcon size={22} style={{ color: 'var(--color-text-primary)' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>GitHub</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem' }}>@anubhavi-jaiswal</p>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#0A66C2'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <LinkedinIcon size={22} style={{ color: '#0A66C2' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.9rem' }}>LinkedIn</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem' }}>in/anubhavi-jaiswal</p>
              </div>
            </a>
          </div>

          {/* Resume Download */}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '8px',
              background: 'var(--color-accent)',
              color: '#08090B',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
