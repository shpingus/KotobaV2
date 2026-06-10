// Kotoba — Practice tab (formerly Review). Strengthens LEARNED words — nothing
// new is taught here. Weakest words surface first; each word's current reading
// aid + strength is visible so the learner can see aids fading as they improve.
// Exposes window.Practice.

const Practice = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const { Button, Card, Badge, SenseiCard, ProgressRing } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  function ModeCard({ icon, title, meta, xp, onClick }) {
    return (
      <button onClick={onClick} style={{
        display: 'flex', alignItems: 'center', gap: 14, width: '100%', textAlign: 'left',
        padding: '14px 16px', borderRadius: 'var(--radius-lg)', cursor: 'pointer',
        background: 'var(--surface-card)', border: '1.5px solid var(--border-default)',
        boxShadow: '0 3px 0 var(--sumi-200)', fontFamily: 'var(--font-body)',
      }}>
        <span style={{
          width: 44, height: 44, borderRadius: 'var(--radius-md)', flex: 'none',
          background: 'var(--brand-soft)', color: 'var(--brand)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>{I(icon, { style: { width: 22, height: 22 } })}</span>
        <span style={{ flex: 1 }}>
          <span style={{ display: 'block', fontWeight: 800, fontSize: 15, color: 'var(--text-strong)' }}>{title}</span>
          <span style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 1 }}>{meta}</span>
        </span>
        <Badge tone="accent" size="sm">{xp}</Badge>
        {I('chevron-right', { style: { width: 18, height: 18, color: 'var(--text-faint)' } })}
      </button>
    );
  }

  return function Practice({ onSRS, onPairs, onListening, onSentences }) {
    KC.useWordTick();
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    const due = KW.dueCount();
    const weak = KW.weakest(4);
    const [w1, w2] = weak;

    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-canvas)', padding: '54px 20px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <h2 style={{ fontSize: 26 }}>Practice</h2>
          <span className="jp-display" style={{ fontSize: 14, color: 'var(--text-muted)' }}>今日の復習</span>
        </div>
        <p style={{ color: 'var(--text-muted)', marginTop: 6, marginBottom: 16, fontSize: 15 }}>
          Strengthen the words you've already met — your weakest come up first.
        </p>

        <SenseiCard
          title={<span><span className="jp">{w1.jp}</span> and <span className="jp">{w2.jp}</span> keep slipping</span>}
          actions={<Button size="sm" variant="accent" onClick={onSRS}>Practice 2 min</Button>}
          style={{ marginBottom: 14 }}
        >
          I put them at the front of today's cards — their reading aids stay on until they stick.
        </SenseiCard>

        <Card tone="brand" pad="lg" style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <ProgressRing value={due} max={KW.WORDS.filter((w) => w.level === 'n5').length} size={64} color="var(--accent)">
            <span style={{ fontSize: 15 }}>{due}</span>
          </ProgressRing>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16 }}>Cards due today</div>
            <div style={{ fontSize: 13, color: 'var(--text-body)' }}>~4 min · swipe right if you know it</div>
          </div>
          <Button size="sm" onClick={onSRS}>Start</Button>
        </Card>

        <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 15, margin: '0 0 12px' }}>Ways to practice</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ModeCard icon="layers" title="Cards" meta={`${due} due · swipe to grade yourself`} xp="+2 / card" onClick={onSRS} />
          <ModeCard icon="puzzle" title="Pair match" meta="Clear the board against the clock" xp="up to +60" onClick={onPairs} />
          <ModeCard icon="headphones" title="Listening" meta="Hear it, tap the word" xp="+40" onClick={onListening} />
          <ModeCard icon="text-quote" title="Sentences" meta="Rebuild sentences from your words" xp="+30" onClick={onSentences} />
        </div>

        <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 15, margin: '26px 0 4px' }}>Weak words</div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 12px' }}>
          Aids fade as a word gets stronger — romaji first, then furigana.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {weak.map((w) => (
            <Card key={w.id} pad="sm" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 64, display: 'flex', justifyContent: 'center' }}>
                <KC.JpWord word={w} size={26} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-strong)' }}>{w.meaning}</div>
                <div style={{ marginTop: 5 }}><KC.StrengthDots id={w.id} /></div>
              </div>
              <KC.AidChip id={w.id} />
            </Card>
          ))}
        </div>
      </div>
    );
  };
})();

Object.assign(window, { Practice });
