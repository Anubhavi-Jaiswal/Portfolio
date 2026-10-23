import { useState } from 'react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

function TechPill({ label, accent }) {
  return (
    <span style={{
      padding: '3px 10px',
      borderRadius: '4px',
      fontSize: '0.72rem',
      fontFamily: 'var(--font-mono)',
      background: `${accent}18`,
      color: accent,
      border: `1px solid ${accent}30`,
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(8,9,11,0.85)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div style={{ height: '3px', background: project.accentColor, borderRadius: '16px 16px 0 0' }} />

        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em',
                color: project.accentColor, textTransform: 'uppercase', marginBottom: '6px', display: 'block',
              }}>
                {project.status}
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{project.name}</h2>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          <Section label="Problem">
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{project.problem}</p>
          </Section>

          <Section label="What Was Built">
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{project.what}</p>
          </Section>

          <Section label="Key Decisions">
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.decisions.map((d, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <ChevronRight size={14} style={{ color: project.accentColor, flexShrink: 0, marginTop: '4px' }} />
                  {d}
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Technologies">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map(t => <TechPill key={t} label={t} accent={project.accentColor} />)}
            </div>
          </Section>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '12px' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px', borderRadius: '8px',
                background: project.accentColor, color: '#08090B',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <GithubIcon size={16} /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
        {label}
      </h3>
      {children}
    </div>
  );
}

function ProjectCard({ project, onViewDetails }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-surface)',
        border: `1px solid ${hovered ? project.accentColor + '60' : 'var(--color-border)'}`,
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Accent bar */}
      <div style={{ height: '3px', background: project.accentColor }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            color: project.accentColor, letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            {project.status}
          </span>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '4px', letterSpacing: '-0.02em' }}>
            {project.name}
          </h3>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
          {project.tagline}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
          {project.technologies.slice(0, 4).map(t => <TechPill key={t} label={t} accent={project.accentColor} />)}
          {project.technologies.length > 4 && (
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', alignSelf: 'center' }}>+{project.technologies.length - 4}</span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => onViewDetails(project)}
            style={{
              flex: 1, padding: '9px 0', borderRadius: '7px',
              background: `${project.accentColor}18`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}40`,
              fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = `${project.accentColor}30`)}
            onMouseLeave={e => (e.currentTarget.style.background = `${project.accentColor}18`)}
          >
            View Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '9px 14px', borderRadius: '7px',
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-text-primary)'; e.currentTarget.style.borderColor = 'var(--color-text-secondary)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            aria-label={`GitHub — ${project.name}`}
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: 'var(--color-obsidian)' }}>
      <div className="container-max">
        <p className="mono-badge" style={{ marginBottom: '1rem' }}>[03 // PROJECTS]</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          Selected Work
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '3rem', maxWidth: '500px' }}>
          Projects I've built from scratch — real problems, real code, real learning.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onViewDetails={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
