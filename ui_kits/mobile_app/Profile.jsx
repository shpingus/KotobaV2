// Kotoba — Profile (stats, JLPT tier ladder, achievements)
// Exposes window.Profile.

const Profile = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const { Avatar, Card, LevelBadge, StreakCounter, Button, Badge } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const TIERS = ['pre', 'n5', 'n4', 'n3', 'n2', 'n1'];
  const CURRENT = 'n5';

  const ACHIEVEMENTS = [
    { icon: 'flame', label: '7-day streak', earned: true },
    { icon: 'sunrise', label: 'Early bird', earned: true },
    { icon: 'star', label: 'First lesson', earned: true },
    { icon: 'zap', label: '500 XP', earned: true },
    { icon: 'crown', label: 'Hiragana master', earned: false },
    { icon: 'xp', label: '30-day streak', earned: false },
  ];

  function Stat({ icon, value, label, tone }) {
    const iconEl = icon === 'xp'
      ? <span style={{ fontFamily: 'var(--font-num)', fontWeight: 900, fontSize: 13, letterSpacing: '-0.01em' }}>XP</span>
      : I(icon, { style: { width: 22, height: 22 } });
    return (
      <Card pad="sm" style={{ flex: 1, textAlign: 'center' }}>
        <span style={{ color: tone || 'var(--brand)', display: 'inline-flex', alignItems: 'center' }}>{iconEl}</span>
        <div style={{ fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 22, color: 'var(--text-strong)', marginTop: 4 }}>{value}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label}</div>
      </Card>
    );
  }

  return function Profile({ onReplayIntro }) {
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-canvas)', padding: '54px 20px 28px' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <h2 style={{ fontSize: 26 }}>Profile</h2>
          <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>{I('settings', { style: { width: 24, height: 24 } })}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
          <Avatar name="Aiko Tanaka" size="xl" ring ringPercent={66} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text-strong)' }}>Aiko Tanaka</div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }}>Learning since March · Tokyo time</div>
            <div style={{ marginTop: 8 }}><Badge tone="brand" solid size="sm">N5 learner</Badge></div>
          </div>
        </div>

        {/* stats */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
          <Stat icon="flame" value="28" label="Day streak" tone="var(--accent)" />
          <Stat icon="xp" value="1,240" label="Total XP" />
          <Stat icon="book-marked" value="312" label="Words" tone="var(--success)" />
        </div>

        {/* tier ladder */}
        <Card style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16 }}>JLPT path</div>
            <div style={{ fontFamily: 'var(--font-num)', fontWeight: 700, fontSize: 13, color: 'var(--brand)' }}>N5 · 60%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {TIERS.map((t, i) => (
              <React.Fragment key={t}>
                {i > 0 && <div style={{ flex: 1, height: 3, borderRadius: 2, background: TIERS.indexOf(CURRENT) >= i ? 'var(--brand)' : 'var(--border-default)' }} />}
                <div style={{ position: 'relative', opacity: TIERS.indexOf(CURRENT) >= i ? 1 : 0.45 }}>
                  <LevelBadge tier={t} size="sm" showCaption={false} progress={t === CURRENT ? 60 : undefined} />
                  {t === CURRENT && (
                    <div style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: 10, fontWeight: 800, color: 'var(--accent)' }}>YOU</div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </Card>

        {/* achievements */}
        <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16, margin: '4px 0 12px' }}>Achievements</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
          {ACHIEVEMENTS.map((a) => (
            <div key={a.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', opacity: a.earned ? 1 : 0.5 }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: a.earned ? 'var(--brand-soft)' : 'var(--surface-sunken)',
                color: a.earned ? 'var(--brand-strong)' : 'var(--text-faint)',
                border: a.earned ? '2px solid var(--ai-200)' : '2px dashed var(--border-default)',
              }}>{a.earned && a.icon === 'xp'
                ? <span style={{ fontFamily: 'var(--font-num)', fontWeight: 900, fontSize: 16, letterSpacing: '-0.01em' }}>XP</span>
                : I(a.earned ? a.icon : 'lock', { style: { width: 26, height: 26 } })}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1.2 }}>{a.label}</div>
            </div>
          ))}
        </div>

        <Button variant="secondary" fullWidth onClick={onReplayIntro} icon={I('rotate-ccw', { style: { width: 18, height: 18 } })}>Replay intro</Button>
      </div>
    );
  };
})();

Object.assign(window, { Profile });
