// Kotoba — Boss battle (intro → quiz battle → victory). Optional challenge:
// correct answers strike the oni; wrong answers cost a heart. Calm, not scary.
// Exposes window.BossBattle.

const BossBattle = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const { BossNode, Companion, KanaTile, Button, IconButton, PowerLevel, Badge } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const QUESTIONS = [
    { prompt: 'Strike with the reading of', word: '川', gloss: 'river',
      options: [{ t: 'kawa', ok: true }, { t: 'yama' }, { t: 'kana' }, { t: 'kawi' }] },
    { prompt: 'Strike with the kana for', word: 'sa', gloss: null,
      options: [{ t: 'き' }, { t: 'さ', ok: true }, { t: 'ち' }, { t: 'せ' }] },
    { prompt: 'Strike with the meaning of', word: '火', gloss: 'hi',
      options: [{ t: 'water' }, { t: 'tree' }, { t: 'fire', ok: true }, { t: 'gold' }] },
  ];
  const BOSS_HP = 3;

  function HPBar({ value, max, color, label }) {
    return (
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 4 }}>
          <span>{label}</span><span className="num">{value}/{max}</span>
        </div>
        <div style={{ height: 10, borderRadius: 999, background: 'var(--surface-sunken)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(value / max) * 100}%`, background: color, borderRadius: 999, transition: 'width .35s var(--ease-out)' }} />
        </div>
      </div>
    );
  }

  return function BossBattle({ onExit, onWin }) {
    const [phase, setPhase] = React.useState('intro');   // intro | battle | victory
    const [qi, setQi] = React.useState(0);
    const [bossHp, setBossHp] = React.useState(BOSS_HP);
    const [hearts, setHearts] = React.useState(3);
    const [sel, setSel] = React.useState(null);
    const [checked, setChecked] = React.useState(false);
    const [shake, setShake] = React.useState(false);

    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

    if (phase === 'intro') {
      return (
        <div style={{
          height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '70px 26px 32px', boxSizing: 'border-box', textAlign: 'center',
          background: 'linear-gradient(180deg, var(--torii-soft), var(--bg-canvas) 55%)',
        }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--torii)', textTransform: 'uppercase' }}>Boss challenge · optional</div>
          <h2 style={{ fontSize: 28, marginTop: 8 }}>Hiragana Oni</h2>
          <div className="jp-display" style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 2 }}>ひらがなの鬼</div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 34, margin: '30px 0 22px' }}>
            <div>
              <NS.Companion stage={2} size={74} floating />
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand)', marginTop: 6 }}>Yūki · 49</div>
            </div>
            <div className="jp-display" style={{ fontSize: 22, color: 'var(--text-faint)', paddingBottom: 34 }}>VS</div>
            <div>
              <BossNode size="lg" flag={null} style={{ pointerEvents: 'none' }} />
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--torii)', marginTop: 6 }}>Oni · 12</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 26 }}>
            <Badge tone="warning">Reward: +150 XP</Badge>
            <Badge tone="brand">Power +2</Badge>
          </div>
          <Button size="lg" fullWidth variant="danger" style={{ background: 'var(--torii)' }} onClick={() => setPhase('battle')}>Begin battle</Button>
          <Button variant="ghost" onClick={onExit} style={{ marginTop: 8 }}>Not yet</Button>
        </div>
      );
    }

    if (phase === 'victory') {
      return (
        <div style={{
          height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '70px 28px 32px', boxSizing: 'border-box', textAlign: 'center',
          background: 'var(--ai-700)', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.14, backgroundImage: 'url(../../assets/seigaiha.svg)', backgroundSize: 120 }} />
          <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <NS.ToriiGate size={130} plaque="勝" />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: '#fff', marginTop: 14 }}>Oni defeated!</div>
            <div className="jp-display" style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>見事な勝利</div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <Badge tone="warning" solid>+150 XP</Badge>
              <Badge tone="brand" solid style={{ background: 'rgba(255,255,255,0.2)' }}>Power 49 → 51</Badge>
            </div>
            <div style={{ height: 30 }} />
            <Button fullWidth size="lg" variant="accent" onClick={onWin}>Claim reward</Button>
          </div>
        </div>
      );
    }

    // battle
    const q = QUESTIONS[qi % QUESTIONS.length];
    const tileState = (i) => {
      if (!checked) return sel === i ? 'selected' : 'default';
      if (q.options[i].ok) return 'correct';
      if (sel === i) return 'wrong';
      return 'default';
    };
    const onCheck = () => {
      if (sel == null) return;
      setChecked(true);
      if (q.options[sel].ok) {
        setShake(true);
        setTimeout(() => setShake(false), 450);
        setBossHp((h) => h - 1);
      } else {
        setHearts((h) => Math.max(0, h - 1));
      }
    };
    const onNext = () => {
      if (bossHp <= 0) { setPhase('victory'); return; }
      setQi(qi + 1); setSel(null); setChecked(false);
    };

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)' }}>
        {/* battle header */}
        <div style={{ padding: '54px 18px 10px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--torii-soft)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconButton label="Retreat" variant="ghost" size="sm" onClick={onExit}>{I('flag', { style: { width: 20, height: 20 } })}</IconButton>
            <HPBar value={hearts} max={3} color="var(--brand)" label="Yūki" />
            <span style={{
              display: 'inline-block',
              animation: shake ? 'kotoba-boss-shake .4s var(--ease-out)' : 'none',
            }}><NS.PixelOni size={40} /></span>
            <HPBar value={bossHp} max={BOSS_HP} color="var(--torii)" label="Oni" />
          </div>
        </div>

        <div style={{ flex: 1, padding: '22px 24px 0', overflow: 'auto' }}>
          <h2 style={{ fontSize: 24, lineHeight: 1.3 }}>
            {q.prompt} <span className="jp-display" style={{ color: 'var(--torii)' }}>{q.word}</span>
            {q.gloss && <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> ({q.gloss})</span>}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13, marginTop: 22, paddingBottom: 20 }}>
            {q.options.map((o, i) => (
              <KanaTile key={i} glyph={o.t} size="sm" state={tileState(i)} interactive={!checked}
                        onClick={() => !checked && setSel(i)} style={{ width: '100%', boxSizing: 'border-box' }} />
            ))}
          </div>
        </div>

        <div style={{ padding: '12px 24px 36px' }}>
          {!checked
            ? <Button fullWidth size="lg" style={{ background: 'var(--torii)' }} onClick={onCheck} disabled={sel == null}>Strike</Button>
            : <Button fullWidth size="lg" variant={q.options[sel]?.ok ? 'success' : 'secondary'} onClick={onNext}>{bossHp <= 0 ? 'Finish him!' : 'Next'}</Button>}
        </div>
      </div>
    );
  };
})();

Object.assign(window, { BossBattle });
