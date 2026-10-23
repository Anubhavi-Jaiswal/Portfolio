import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, border-color 0.3s ease',
          background: scrolled ? 'rgba(8,9,11,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="container-max" style={{ padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Logo */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--color-accent)',
                  letterSpacing: '-0.02em',
                }}
              >
                AJ
              </span>
              <span
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {personal.name}
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    fontWeight: 400,
                  }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-text-primary)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  border: '1px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.color = '#08090B';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
              >
                Resume
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(o => !o)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-primary)',
                padding: '4px',
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            className="md:hidden"
            style={{
              background: 'var(--color-surface)',
              borderTop: '1px solid var(--color-border)',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  background: 'var(--color-accent)',
                  color: '#08090B',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                }}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
