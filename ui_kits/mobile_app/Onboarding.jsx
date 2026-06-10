// Kotoba — Onboarding flow (welcome → goal → level → daily goal → ready)
// Exposes window.Onboarding. Uses DS components from window.MichiDesignSystem_2b01f5.

const Onboarding = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const { Button, LevelBadge, Card } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const GOALS = [
    ['plane', 'Travel in Japan'],
    ['sparkles', 'Anime & manga'],
    ['briefcase', 'Work & career'],
    ['home', 'Living in Japan'],
    ['heart', 'Just for fun'],
  ];
  const LEVELS = [
    ['pre', 'Brand new', 'I\u2019m starting from zero'],
    ['n5', 'N5', 'I know some kana'],
    ['n4', 'N4', 'Basic grammar & ~600 words'],
    ['n3', 'N3', 'Everyday conversation'],
  ];
  const DAILY = [
    ['5', 'Casual', '5 min · 10 XP'],
    ['10', 'Steady', '10 min · 20 XP'],
    ['15', 'Serious', '15 min · 30 XP'],
    ['20', 'Intense', '20 min · 40 XP'],
  ];

  const wrap = {
    display: 'flex', flexDirection: 'column', height: '100%',
    padding: '70px 24px 28px', boxSizing: 'border-box', background: 'var(--bg-canvas)',
  };
  const optionCard = (active) => ({
    display: 'flex', alignItems: 'center', gap: 14, width: '100%',
    cursor: 'pointer', textAlign: 'left',
    border: active ? '2px solid var(--ai-400)' : '2px solid var(--border-subtle)',
    background: active ? 'var(--brand-soft)' : 'var(--surface-card)',
  });

  function Dots({ step, total }) {
    return (
      <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            height: 6, flex: 1, borderRadius: 999,
            background: i <= step ? 'var(--brand)' : 'var(--surface-sunken)',
            transition: 'background var(--dur-base) var(--ease-out)',
          }} />
        ))}
      </div>
    );
  }

  return function Onboarding({ onDone }) {
    const [step, setStep] = React.useState(0);
    const [goal, setGoal] = React.useState(null);
    const [level, setLevel] = React.useState(null);
    const [daily, setDaily] = React.useState('10');

    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

    const next = () => setStep((s) => s + 1);
    const back = () => setStep((s) => Math.max(0, s - 1));

    // Step 0 — welcome (no dots/back)
    if (step === 0) {
      return (
        <div style={{ ...wrap, justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 0 }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.10, zIndex: 0,
            backgroundImage: 'url(../../assets/seigaiha.svg)', backgroundSize: 130,
          }} />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="../../assets/kotoba-mark.svg" alt="Kotoba" width="104" height="104"
                 style={{ filter: 'drop-shadow(var(--shadow-lg))' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 48, color: 'var(--text-strong)', marginTop: 22, letterSpacing: '-0.02em' }}>Kotoba</div>
            <div className="jp-display" style={{ fontSize: 22, color: 'var(--brand)', marginTop: 2 }}>毎日一歩ずつ</div>
            <div style={{ fontSize: 17, color: 'var(--text-muted)', marginTop: 14, maxWidth: 260, lineHeight: 1.5 }}>
              Learn Japanese one step at a time. Build a streak you\u2019ll actually keep.
            </div>
            <div style={{ height: 36 }} />
            <Button size="lg" fullWidth onClick={next} style={{ minWidth: 280 }}>Get started</Button>
            <Button variant="ghost" size="md" onClick={() => onDone()} style={{ marginTop: 8 }}>I already have an account</Button>
          </div>
        </div>
      );
    }

    const Header = () => (
      <div>
        <button onClick={back} aria-label="Back" style={{
          border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)',
          marginBottom: 16, marginLeft: -6, display: 'inline-flex',
        }}>{I('arrow-left', { style: { width: 24, height: 24 } })}</button>
        <Dots step={step - 1} total={4} />
      </div>
    );

    let title, sub, body, cta = 'Continue', ctaEnabled = true, onCta = next;

    if (step === 1) {
      title = 'Why are you learning?';
      sub = 'We\u2019ll tailor your path. Pick one.';
      ctaEnabled = !!goal;
      body = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {GOALS.map(([icon, label]) => (
            <Card key={label} as="button" pad="sm" elevation="flat" onClick={() => setGoal(label)} style={optionCard(goal === label)}>
              <span style={{ color: 'var(--brand)', display: 'inline-flex' }}>{I(icon, { style: { width: 22, height: 22 } })}</span>
              <span style={{ fontWeight: 600, color: 'var(--text-strong)', fontSize: 16 }}>{label}</span>
            </Card>
          ))}
        </div>
      );
    } else if (step === 2) {
      title = 'Where are you starting?';
      sub = 'Be honest \u2014 you can change this anytime.';
      ctaEnabled = !!level;
      body = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {LEVELS.map(([tier, label, desc]) => (
            <Card key={tier} as="button" pad="sm" elevation="flat" onClick={() => setLevel(tier)} style={optionCard(level === tier)}>
              <LevelBadge tier={tier} size="sm" showCaption={false} />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16 }}>{label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{desc}</div>
              </div>
            </Card>
          ))}
        </div>
      );
    } else if (step === 3) {
      title = 'Pick a daily goal';
      sub = 'Small and steady wins. You can raise it later.';
      body = (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {DAILY.map(([v, label, desc]) => (
            <Card key={v} as="button" elevation="flat" onClick={() => setDaily(v)}
                  style={{ ...optionCard(daily === v), flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
              <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16 }}>{label}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{desc}</div>
            </Card>
          ))}
        </div>
      );
    } else {
      title = 'Your path is ready';
      sub = null;
      cta = 'Start learning';
      onCta = () => onDone();
      body = (
        <Card tone="brand" pad="lg" style={{ marginTop: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Row k="Goal" v={goal || 'Just for fun'} />
            <Row k="Starting level" v={level ? (level === 'pre' ? 'Brand new' : level.toUpperCase()) : 'Brand new'} />
            <Row k="Daily goal" v={`${daily} min`} />
            <div style={{ height: 1, background: 'var(--ai-100)' }} />
            <div style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.5 }}>
              First stop: <strong style={{ color: 'var(--text-strong)' }}>Hiragana basics</strong>. Let\u2019s take your first step.
            </div>
          </div>
        </Card>
      );
    }

    return (
      <div style={wrap}>
        <Header />
        <div style={{ flex: 1, overflow: 'auto' }}>
          <h2 style={{ fontSize: 28 }}>{title}</h2>
          {sub && <p style={{ color: 'var(--text-muted)', marginTop: 6, marginBottom: 20, fontSize: 15 }}>{sub}</p>}
          {!sub && <div style={{ height: 8 }} />}
          {body}
        </div>
        <Button size="lg" fullWidth onClick={onCta} disabled={!ctaEnabled} style={{ marginTop: 16 }}>{cta}</Button>
      </div>
    );
  };

  function Row({ k, v }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>{k}</span>
        <span style={{ color: 'var(--text-strong)', fontWeight: 700, fontSize: 15 }}>{v}</span>
      </div>
    );
  }
})();

Object.assign(window, { Onboarding });
