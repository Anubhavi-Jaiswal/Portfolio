import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--color-obsidian)' }}>
      <div className="container-max">
        <p className="mono-badge" style={{ marginBottom: '1rem' }}>[05 // EXPERIENCE]</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Experience
        </h2>

        <div style={{ position: 'relative', maxWidth: '720px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'var(--color-border)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '2rem' }}>
            {experience.map((exp, index) => {
              const isLatest = index === 0;
              return (
                <div key={`${exp.role}-${exp.period}`} style={{ position: 'relative' }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-2rem',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: isLatest ? 'var(--color-accent)' : 'var(--color-border)',
                    border: `2px solid ${isLatest ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    boxShadow: isLatest ? '0 0 0 4px rgba(0,245,155,0.15)' : 'none',
                    transform: 'translateX(-50%)',
                  }} />

                  <div
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderLeft: isLatest ? '3px solid var(--color-accent)' : '3px solid transparent',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      transition: 'border-color 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '0.5rem' }}>
                      <div>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                          color: isLatest ? 'var(--color-accent)' : 'var(--color-text-muted)',
                          letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px',
                        }}>
                          {exp.type}
                        </span>
                        <h3 style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                          {exp.role}
                        </h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginTop: '2px' }}>
                          {exp.org} · {exp.location}
                        </p>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        whiteSpace: 'nowrap',
                        alignSelf: 'flex-start',
                      }}>
                        {exp.period}
                      </span>
                    </div>

                    <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {exp.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                          <span style={{
                            width: 4, height: 4, borderRadius: '50%',
                            background: isLatest ? 'var(--color-accent)' : 'var(--color-text-muted)',
                            flexShrink: 0, marginTop: '8px', display: 'inline-block',
                          }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
