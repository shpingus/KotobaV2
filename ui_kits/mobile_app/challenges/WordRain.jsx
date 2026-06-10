// Kotoba — Word rain. Words fall toward the ground line; type their reading
// (romaji or kana) to clear them before they land. Reading IS the test →
// NO reading aids, ever. Difficulty changes speed, simultaneous words and the
// word pool — and multiplies XP. A landed word costs a heart; 0 hearts ends it.
// Exposes window.WordRain.

const WordRain = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const { Button, Badge, IconButton } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const DIFFS = [
    {
      id: 'drizzle', jp: '小雨', name: 'Drizzle', xpPer: 4, mult: '×1',
      speed: 0.05, gap: 3200, maxUp: 2, pool: 'learned', total: 10,
      desc: 'Slow fall · 2 words at once · words you know',
    },
    {
      id: 'rain', jp: '雨', name: 'Rain', xpPer: 6, mult: '×1.5',
      speed: 0.075, gap: 2400, maxUp: 3, pool: 'all-n5', total: 12,
      desc: 'Steady fall · 3 at once · everything you\u2019ve met',
    },
    {
      id: 'storm', jp: '嵐', name: 'Storm', xpPer: 9, mult: '×2',
      speed: 0.105, gap: 1800, maxUp: 4, pool: 'stretch', total: 14,
      desc: 'Fast fall · 4 at once · includes words above your level',
    },
  ];

  // ── setup screen ───────────────────────────────────────────
  function Setup({ diff, setDiff, onStart, onExit }) {
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '54px 18px 0' }}>
          <IconButton label="Back" variant="ghost" size="sm" onClick={onExit}>{I('arrow-left', { style: { width: 22, height: 22 } })}</IconButton>
        </div>
        <div style={{ flex: 1, padding: '12px 24px 0', overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--brand)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flex: 'none',
            }}>{I('cloud-rain', { style: { width: 28, height: 28 } })}</span>
            <div>
              <h2 style={{ fontSize: 26, lineHeight: 1.2 }}>Word rain</h2>
              <div className="jp-display" style={{ fontSize: 14, color: 'var(--text-muted)' }}>言葉の雨</div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', margin: '14px 0 18px', lineHeight: 1.5 }}>
            Type each word's reading before it reaches the ground. No reading aids up there — that's the whole point.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 24 }}>
            {DIFFS.map((d) => {
              const on = diff.id === d.id;
              return (
                <button key={d.id} onClick={() => setDiff(d)} style={{
                  display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
                  padding: '14px 16px', borderRadius: 'var(--radius-lg)', cursor: 'pointer',
                  background: on ? 'var(--brand-soft)' : 'var(--surface-card)',
                  border: `1.5px solid ${on ? 'var(--ai-300)' : 'var(--border-default)'}`,
                  boxShadow: `0 3px 0 ${on ? 'var(--ai-300)' : 'var(--sumi-200)'}`,
                }}>
                  <span className="jp-display" style={{ fontSize: 30, width: 48, textAlign: 'center', color: on ? 'var(--brand-strong)' : 'var(--text-strong)', flex: 'none' }}>{d.jp}</span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: 'block', fontWeight: 800, fontSize: 16, color: 'var(--text-strong)' }}>{d.name}</span>
                    <span style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{d.desc}</span>
                  </span>
                  <Badge tone={on ? 'accent' : 'neutral'} solid={on} size="sm">{d.mult} XP</Badge>
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ padding: '12px 24px 36px' }}>
          <Button fullWidth size="lg" variant="accent" onClick={onStart} icon={I('play', { style: { width: 18, height: 18 } })}>
            Start · up to +{diff.xpPer * diff.total} XP
          </Button>
        </div>
      </div>
    );
  }

  // ── the game ───────────────────────────────────────────────
  function Game({ diff, onExit, onOver }) {
    const [, setTick] = React.useState(0);
    const [hearts, setHearts] = React.useState(5);
    const [score, setScore] = React.useState({ cleared: 0, missed: 0, combo: 0, best: 0 });
    const [typed, setTyped] = React.useState('');
    const [shake, setShake] = React.useState(false);
    const world = React.useRef({ falling: [], spawned: 0, lastSpawn: 0, uid: 0, overSent: false });
    const inputRef = React.useRef(null);
    const heartsRef = React.useRef(5);
    const scoreRef = React.useRef(score);
    scoreRef.current = score;

    const speedMult = (window.KotobaAid && window.KotobaAid.rainSpeed) || 1;

    React.useEffect(() => { window.lucide && window.lucide.createIcons(); }, []);

    React.useEffect(() => {
      const pool = KW.pool(diff.pool);
      let raf, last = performance.now();
      const step = (now) => {
        const w = world.current;
        const dt = Math.min(50, now - last); last = now;
        // spawn
        if (w.spawned < diff.total && w.falling.length < diff.maxUp && now - w.lastSpawn > diff.gap / speedMult) {
          const word = pool[(w.spawned * 7 + 3) % pool.length];
          if (!w.falling.some((f) => f.word.id === word.id)) {
            w.falling.push({ uid: ++w.uid, word, x: 8 + ((w.spawned * 37) % 60), y: -0.08, state: 'falling' });
            w.spawned++; w.lastSpawn = now;
          } else { w.lastSpawn = now - diff.gap / speedMult / 2; }
        }
        // fall
        w.falling.forEach((f) => {
          if (f.state !== 'falling') return;
          f.y += (diff.speed * speedMult * dt) / 1000;
          if (f.y >= 0.92) {
            f.state = 'miss';
            heartsRef.current = Math.max(0, heartsRef.current - 1);
            setHearts(heartsRef.current);
            setScore((s) => ({ ...s, missed: s.missed + 1, combo: 0 }));
            setTimeout(() => { w.falling = w.falling.filter((x) => x.uid !== f.uid); }, 500);
          }
        });
        const doneSpawning = w.spawned >= diff.total && w.falling.filter((f) => f.state === 'falling').length === 0;
        if ((heartsRef.current <= 0 || doneSpawning) && !w.overSent) {
          w.overSent = true;
          setTimeout(() => onOver({ ...scoreRef.current, hearts: heartsRef.current }), 600);
        }
        setTick((t) => t + 1);
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [diff]);

    const tryClear = (value, fromEnter) => {
      const v = value.trim().toLowerCase();
      if (!v) return;
      const w = world.current;
      const hit = w.falling.find((f) => f.state === 'falling' && (f.word.romaji === v || f.word.kana === v));
      if (hit) {
        hit.state = 'clear';
        setScore((s) => {
          const combo = s.combo + 1;
          return { cleared: s.cleared + 1, missed: s.missed, combo, best: Math.max(s.best, combo) };
        });
        KW.bump(hit.word.id, 1);
        setTimeout(() => { w.falling = w.falling.filter((x) => x.uid !== hit.uid); }, 350);
        setTyped('');
      } else if (fromEnter) {
        setShake(true); setTimeout(() => setShake(false), 400);
        setTyped('');
      }
    };

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--ai-100) 0%, var(--ai-50) 30%, var(--bg-canvas) 75%)' }}>
        {/* HUD */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '54px 18px 8px', position: 'relative', zIndex: 5 }}>
          <IconButton label="Exit" variant="ghost" size="sm" onClick={onExit}>{I('x', { style: { width: 22, height: 22 } })}</IconButton>
          <span style={{ flex: 1, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Badge tone="brand" solid size="sm">{diff.name}</Badge>
            {score.combo >= 3 && (
              <span key={score.combo} style={{
                fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 13, color: 'var(--accent)',
                animation: 'kotoba-pop .3s var(--ease-spring) both',
              }}>コンボ ×{score.combo}</span>
            )}
          </span>
          <span style={{ fontFamily: 'var(--font-num)', fontWeight: 800, color: 'var(--brand)', fontSize: 14 }}>
            +{score.cleared * diff.xpPer} XP
          </span>
          <KC.Hearts count={hearts} />
        </div>

        {/* sky */}
        <div style={{ flex: 1, position: 'relative' }}>
          {world.current.falling.map((f) => (
            <div key={f.uid} style={{
              position: 'absolute', left: `${f.x}%`, top: `${f.y * 100}%`,
              padding: '8px 14px', borderRadius: 'var(--radius-md)',
              background: f.state === 'miss' ? 'var(--danger-soft)' : f.state === 'clear' ? 'var(--success-soft)' : 'var(--surface-card)',
              border: `1.5px solid ${f.state === 'miss' ? 'var(--beni-400)' : f.state === 'clear' ? 'var(--wakaba-400)' : 'var(--border-default)'}`,
              boxShadow: 'var(--shadow-md)',
              transform: f.state === 'clear' ? 'scale(1.25)' : 'none',
              opacity: f.state === 'falling' ? 1 : f.state === 'clear' ? 0 : 0.85,
              transition: f.state !== 'falling' ? 'transform .3s var(--ease-out), opacity .35s var(--ease-out)' : 'none',
            }}>
              <span className="jp-display" style={{ fontSize: 24, color: 'var(--text-strong)' }}>{f.word.jp}</span>
              {f.state === 'miss' && (
                <span style={{ display: 'block', fontFamily: 'var(--font-num)', fontSize: 11, fontWeight: 700, color: 'var(--beni-700)', textAlign: 'center' }}>{f.word.romaji}</span>
              )}
            </div>
          ))}
          {/* ground line */}
          <div style={{
            position: 'absolute', left: 0, right: 0, top: '92%', height: 2.5,
            background: 'var(--accent)', opacity: 0.7,
            boxShadow: '0 0 12px var(--kaki-300)',
          }}></div>
        </div>

        {/* input pinned above keyboard */}
        <div style={{ flex: 'none', padding: '12px 20px 40px', background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-lg)' }}>
          <input
            ref={inputRef} autoFocus value={typed} placeholder="Type the reading… (romaji)"
            onChange={(e) => { setTyped(e.target.value); tryClear(e.target.value, false); }}
            onKeyDown={(e) => { if (e.key === 'Enter') tryClear(typed, true); }}
            style={{
              width: '100%', boxSizing: 'border-box', height: 52,
              borderRadius: 'var(--radius-md)', border: `1.5px solid ${shake ? 'var(--beni-400)' : 'var(--border-default)'}`,
              background: 'var(--bg-canvas)', padding: '0 16px',
              fontFamily: 'var(--font-num)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)',
              outline: 'none', animation: shake ? 'kotoba-shake .4s' : 'none',
            }}
          />
        </div>
      </div>
    );
  }

  // ── wrapper ────────────────────────────────────────────────
  return function WordRain({ onExit, onDone }) {
    const [diff, setDiff] = React.useState(DIFFS[0]);
    const [phase, setPhase] = React.useState('setup'); // setup | play | over
    const [result, setResult] = React.useState(null);

    if (phase === 'setup') return <Setup diff={diff} setDiff={setDiff} onExit={onExit} onStart={() => setPhase('play')} />;
    if (phase === 'play') return <Game diff={diff} onExit={onExit} onOver={(r) => { setResult(r); setPhase('over'); }} />;

    const survived = result.hearts > 0;
    return (
      <window.KotobaChallenge.CompleteScreen
        title={survived ? 'The rain has passed' : 'The storm won this time'}
        jp={survived ? 'お見事' : 'また挑戦しよう'}
        icon={survived ? 'cloud-rain' : 'umbrella'}
        tone={survived ? 'var(--brand)' : 'var(--sumi-700)'}
        xp={result.cleared * diff.xpPer}
        stats={[
          { icon: 'check', label: `${result.cleared} cleared` },
          { icon: 'flame', label: `best ×${result.best}` },
        ]}
        onDone={onDone}
      />
    );
  };
})();

Object.assign(window, { WordRain });
