import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personal, education } from '../data/portfolioData';

export default function Footer() {
  const edu = education[0];

  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      padding: '2rem 1.5rem',
    }}>
      <div className="container-max">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}>
          {/* Left: Monogram + Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--color-accent)',
            }}>
              AJ
            </span>
            <div>
              <p style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.875rem' }}>{personal.name}</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>{edu.degree}</p>
            </div>
          </div>

          {/* Center: Copyright */}
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
            © 2025 Anubhavi Jaiswal. Built with React + Vite.
          </p>

          {/* Right: Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
