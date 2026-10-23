import { skills } from '../data/portfolioData';

const CATEGORY_ACCENTS = {
  Languages: 'var(--color-accent)',
  Frontend: 'var(--color-blue-accent)',
  Backend: 'var(--color-purple-accent)',
  'Databases & Tools': '#F59E0B',
  'CS Fundamentals': '#EC4899',
};

export default function SkillsSection() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container-max">
        <p className="mono-badge" style={{ marginBottom: '1rem' }}>[04 // SKILLS]</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          Skills & Technologies
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '3rem', maxWidth: '480px' }}>
          Tools and concepts I work with regularly, organized by category.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(([category, items]) => {
            const accent = CATEGORY_ACCENTS[category] || 'var(--color-accent)';
            return (
              <div
                key={category}
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  borderTop: `3px solid ${accent}`,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: accent,
                  marginBottom: '1rem',
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {items.map(item => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent, flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
