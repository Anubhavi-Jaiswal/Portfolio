import { Award } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const MEDAL_CONFIG = [
  { bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.35)', accent: '#FBBF24', label: 'GOLD' },
  { bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.35)', accent: '#94A3B8', label: 'SILVER' },
  { bg: 'rgba(180,120,60,0.1)', border: 'rgba(180,120,60,0.35)', accent: '#CD7F32', label: 'BRONZE' },
];

const ICON_MAP = {
  certificate: '📜',
  trophy: '🏆',
  shield: '🛡️',
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container-max">
        <p className="mono-badge" style={{ marginBottom: '1rem' }}>[06 // ACHIEVEMENTS]</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Recognition
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((ach, index) => {
            const medal = MEDAL_CONFIG[index] || MEDAL_CONFIG[2];
            return (
              <div
                key={ach.title}
                style={{
                  background: medal.bg,
                  border: `1px solid ${medal.border}`,
                  borderRadius: '12px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  transition: 'transform 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Background glow */}
                <div style={{
                  position: 'absolute', top: '-30px', right: '-30px',
                  width: '100px', height: '100px',
                  borderRadius: '50%',
                  background: medal.accent,
                  opacity: 0.06,
                  pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2rem' }}>{ICON_MAP[ach.icon]}</span>
                  {ach.verified && (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: medal.accent,
                      padding: '3px 8px', borderRadius: '4px',
                      background: `${medal.accent}20`,
                    }}>
                      <Award size={10} /> Verified
                    </span>
                  )}
                </div>

                <div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: medal.accent, letterSpacing: '0.1em',
                    textTransform: 'uppercase', display: 'block', marginBottom: '6px',
                  }}>
                    {medal.label} · {ach.category}
                  </span>
                  <h3 style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, marginBottom: '4px' }}>
                    {ach.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>{ach.badge}</p>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', borderTop: `1px solid ${medal.border}`, paddingTop: '12px' }}>
                  {ach.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
