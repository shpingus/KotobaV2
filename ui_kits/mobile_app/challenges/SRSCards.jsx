// Kotoba — SRS card deck. Swipe right = knew it (+1), swipe right WITHOUT
// flipping = too easy (+2), swipe left = didn't know (−1, card returns later).
// Tap to flip. The front is the test → no reading aids; the back shows everything.
// Exposes window.SRSCards.

const SRSCards = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const { Button, Badge } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const SWIPE_AT = 90;

  function glyphSize(jp) {
    if (jp.length <= 1) return 96;
    if (jp.length <= 3) return 64;
    return 42;
  }

  function CardFace({ word, back }) {
    if (!back) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 18 }}>
          <span className="jp-display" style={{ fontSize: glyphSize(word.jp), color: 'var(--text-strong)', lineHeight: 1.15, textAlign: 'center' }}>{word.jp}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-faint)' }}>
            {I('rotate-cw', { style: { width: 14, height: 14 } })} Tap to flip
          </span>
        </div>
      );
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 6, padding: '0 24px', textAlign: 'center' }}>
        <span className="jp-display" style={{ fontSize: Math.min(glyphSize(word.jp), 56), color: 'var(--brand-strong)', lineHeight: 1.15 }}>{word.jp}</span>
        {word.kana !== word.jp && <span className="jp-display" style={{ fontSize: 22, color: 'var(--text-body)', marginTop: 6 }}>{word.kana}</span>}
        <span style={{ fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 18, color: 'var(--brand)' }}>{word.romaji}</span>
        <div style={{ width: 44, height: 1.5, background: 'var(--border-default)', margin: '12px 0' }}></div>
        <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-strong)' }}>{word.meaning}</span>
      </div>
    );
  }

  return function SRSCards({ onExit, onDone }) {
    const [queue, setQueue] = React.useState(() => KW.weakest(8).map((w) => ({ id: w.id, again: 0 })));
    const total0 = React.useRef(queue.length);
    const [resolved, setResolved] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const [drag, setDrag] = React.useState(null); // {dx}
    const [leaving, setLeaving] = React.useState(null); // 'left' | 'right'
    const [counts, setCounts] = React.useState({ easy: 0, knew: 0, again: 0 });
    const start = React.useRef(null);

    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

    const card = queue[0];
    const done = !card;
    const xp = counts.knew * 2 + counts.easy * 3;

    if (done) {
      return (
        <KC.CompleteScreen
          title="Review complete!"
          jp="お疲れさま"
          xp={xp}
          icon="layers"
          stats={[
            { icon: 'zap', label: `${counts.easy} too easy` },
            { icon: 'check', label: `${counts.knew} knew` },
            { icon: 'rotate-ccw', label: `${counts.again} again` },
          ]}
          onDone={onDone}
        />
      );
    }

    const word = KW.word(card.id);

    const commit = (dir) => {
      setLeaving(dir);
      setDrag(null);
      const wasFlipped = flipped;
      setTimeout(() => {
        setQueue((q) => {
          const [top, ...rest] = q;
          if (dir === 'left' && top.again < 1) return [...rest, { ...top, again: top.again + 1 }];
          return rest;
        });
        setResolved((r) => r + (dir === 'right' || card.again >= 1 ? 1 : 0));
        setCounts((c) => dir === 'left'
          ? { ...c, again: c.again + 1 }
          : wasFlipped ? { ...c, knew: c.knew + 1 } : { ...c, easy: c.easy + 1 });
        KW.bump(card.id, dir === 'left' ? -1 : wasFlipped ? 1 : 2);
        setFlipped(false);
        setLeaving(null);
      }, 260);
    };

    const onPointerDown = (e) => {
      if (leaving) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      start.current = { x: e.clientX, y: e.clientY, moved: false };
    };
    const onPointerMove = (e) => {
      if (!start.current || leaving) return;
      const dx = e.clientX - start.current.x;
      if (Math.abs(dx) > 6) start.current.moved = true;
      setDrag({ dx });
    };
    const onPointerUp = () => {
      if (!start.current || leaving) return;
      const dx = drag ? drag.dx : 0;
      if (dx > SWIPE_AT) commit('right');
      else if (dx < -SWIPE_AT) commit('left');
      else {
        if (!start.current.moved) setFlipped((f) => !f);
        setDrag(null);
      }
      start.current = null;
    };

    const dx = leaving ? (leaving === 'right' ? 520 : -520) : drag ? drag.dx : 0;
    const rot = dx / 18;
    const rightLabel = flipped ? 'Knew it' : 'Too easy';
    const remaining = queue.length;
    const progress = (resolved / Math.max(1, resolved + remaining)) * 100;

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)', position: 'relative', overflow: 'hidden' }}>
        <KC.ChallengeTopBar onExit={onExit} progress={progress} hearts={5} />
        <div style={{ padding: '10px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
            {remaining} card{remaining === 1 ? '' : 's'} left
          </div>
          <Badge tone="neutral" size="sm">{card.again > 0 ? 'seen again' : `strength ${KW.strength(card.id)}/5`}</Badge>
        </div>

        {/* deck */}
        <div style={{ flex: 1, position: 'relative', margin: '14px 24px 10px' }}>
          {/* under-cards */}
          {queue.slice(1, 3).map((c, i) => (
            <div key={c.id + '-' + c.again} style={{
              position: 'absolute', inset: 0, borderRadius: 'var(--radius-xl)',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
              transform: `translateY(${(i + 1) * 12}px) scale(${1 - (i + 1) * 0.04})`,
              transition: 'transform .25s var(--ease-out)',
            }}></div>
          ))}
          {/* top card */}
          <div
            onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}
            style={{
              position: 'absolute', inset: 0, touchAction: 'none', cursor: 'grab',
              transform: `translateX(${dx}px) rotate(${rot}deg)`,
              transition: drag ? 'none' : 'transform .26s var(--ease-out)',
              perspective: 900, zIndex: 2,
            }}
          >
            <div style={{
              position: 'relative', width: '100%', height: '100%',
              transformStyle: 'preserve-3d', transition: 'transform .45s var(--ease-spring)',
              transform: flipped ? 'rotateY(180deg)' : 'none',
            }}>
              {[false, true].map((back) => (
                <div key={back ? 'b' : 'f'} style={{
                  position: 'absolute', inset: 0, borderRadius: 'var(--radius-xl)',
                  background: back ? 'var(--brand-soft)' : 'var(--surface-card)',
                  border: back ? '1.5px solid var(--ai-200)' : '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-lg)',
                  backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                  transform: back ? 'rotateY(180deg)' : 'none',
                }}>
                  <CardFace word={word} back={back} />
                </div>
              ))}
            </div>
            {/* swipe verdict badges */}
            <div style={{
              position: 'absolute', top: 22, left: 20, padding: '7px 14px', borderRadius: 'var(--radius-pill)',
              background: 'var(--success)', color: '#fff', fontWeight: 800, fontSize: 15,
              transform: 'rotate(-8deg)', opacity: Math.min(1, Math.max(0, dx) / SWIPE_AT), pointerEvents: 'none',
            }}>{rightLabel}{!flipped && ' +2'}</div>
            <div style={{
              position: 'absolute', top: 22, right: 20, padding: '7px 14px', borderRadius: 'var(--radius-pill)',
              background: 'var(--danger)', color: '#fff', fontWeight: 800, fontSize: 15,
              transform: 'rotate(8deg)', opacity: Math.min(1, Math.max(0, -dx) / SWIPE_AT), pointerEvents: 'none',
            }}>Again</div>
          </div>
        </div>

        {/* swipe hints / buttons */}
        <div style={{ display: 'flex', gap: 12, padding: '6px 24px 36px', alignItems: 'center' }}>
          <Button variant="secondary" fullWidth size="md" onClick={() => commit('left')}
            icon={I('rotate-ccw', { style: { width: 16, height: 16 } })}>Again</Button>
          <Button variant="success" fullWidth size="md" onClick={() => commit('right')}
            icon={I(flipped ? 'check' : 'zap', { style: { width: 16, height: 16 } })}>{rightLabel}</Button>
        </div>
      </div>
    );
  };
})();

Object.assign(window, { SRSCards });
