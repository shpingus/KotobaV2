// Kotoba — Gate passage ceremony. The verbose improvement recap, shown when the
// learner passes a torii checkpoint (unit complete). Exposes window.GatePassage.

const GatePassage = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const { ToriiGate, Button } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  function Stat({ label, value, icon }) {
    const iconEl = icon === 'xp'
      ? <span style={{ fontFamily: 'var(--font-num)', fontWeight: 900, fontSize: 13, letterSpacing: '-0.01em' }}>XP</span>
      : I(icon, { style: { width: 18, height: 18 } });
    return (
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.14)', borderRadius: 'var(--radius-md)', padding: '14px 6px', textAlign: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.9)', display: 'inline-flex', alignItems: 'center' }}>{iconEl}</span>
        <div style={{ fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 20, color: '#fff', marginTop: 4 }}>{value}</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>{label}</div>
      </div>
    );
  }

  function LevelProgress({ from = 60, to = 68 }) {
    return (
      <div style={{ width: '100%', background: 'rgba(255,255,255,0.14)', borderRadius: 'var(--radius-md)', padding: '14px 16px', boxSizing: 'border-box', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>N5 progress</span>
          <span style={{ fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 14, color: '#fff' }}>
            {from}% <span style={{ opacity: 0.6 }}>→</span> {to}%
          </span>
        </div>
        <div style={{ height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.18)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${to}%`, borderRadius: 999, background: 'var(--accent)', transition: 'width .6s var(--ease-out)' }} />
        </div>
      </div>
    );
  }

  return function GatePassage({ onEnter, xp = 220, accuracy = 92, streak = 29 }) {
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    return (
      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '70px 26px 32px',
        boxSizing: 'border-box', background: 'var(--brand)', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.16, backgroundImage: 'url(../../assets/seigaiha.svg)', backgroundSize: 120 }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: 14 }}>
            Checkpoint · Unit 1
          </div>
          <span style={{ animation: 'kotoba-pop .5s var(--ease-spring) both' }}>
            <ToriiGate size={128} state="passed" plaque="二" />
          </span>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: '#fff', marginTop: 14 }}>Gate passed!</div>
          <div className="jp-display" style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>鳥居をくぐった</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 8 }}>
            Hiragana basics complete — here's how you grew.
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 24, width: '100%' }}>
            <Stat label="XP earned" value={`+${xp}`} icon="xp" />
            <Stat label="Accuracy" value={`${accuracy}%`} icon="target" />
            <Stat label="Streak" value={streak} icon="flame" />
          </div>

          <div style={{ width: '100%', marginTop: 12 }}>
            <LevelProgress from={60} to={68} />
          </div>

          <div style={{
            width: '100%', marginTop: 12, boxSizing: 'border-box',
            display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
            background: 'rgba(255,255,255,0.14)', borderRadius: 'var(--radius-md)', padding: '12px 16px',
          }}>
            <span style={{
              width: 38, height: 38, borderRadius: '50%', flex: 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--accent)', color: '#fff',
            }}>{I('lock-open', { style: { width: 18, height: 18 } })}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#fff' }}>Unit 2 unlocked — First words</div>
              <div className="jp-display" style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>はじめの言葉</div>
            </div>
          </div>

          <div style={{ height: 24 }} />
          <Button fullWidth size="lg" variant="accent" onClick={onEnter}>Enter Unit 2</Button>
        </div>
      </div>
    );
  };
})();

Object.assign(window, { GatePassage });
