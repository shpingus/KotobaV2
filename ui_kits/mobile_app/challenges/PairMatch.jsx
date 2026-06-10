// Kotoba — Pair match: clear the board by matching word ↔ meaning before the
// timer runs out. Matching IS the test → no reading aids on tiles.
// Mismatch costs 3 seconds. Exposes window.PairMatch.

const PairMatch = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const TIME = 60;
  const PENALTY = 3;

  function buildBoard() {
    const words = KW.weakest(12).slice(0, 6);
    const tiles = [];
    words.forEach((w) => {
      tiles.push({ key: w.id + '-jp', wordId: w.id, kind: 'jp', label: w.jp });
      tiles.push({ key: w.id + '-en', wordId: w.id, kind: 'en', label: w.meaning });
    });
    return tiles.sort((a, b) => a.key.split('').reverse().join('').localeCompare(b.key.split('').reverse().join('')));
  }

  return function PairMatch({ onExit, onDone }) {
    const [tiles] = React.useState(buildBoard);
    const [matched, setMatched] = React.useState(() => new Set());
    const [sel, setSel] = React.useState(null);
    const [wrong, setWrong] = React.useState(null); // [k1, k2]
    const [timeLeft, setTimeLeft] = React.useState(TIME);
    const [over, setOver] = React.useState(false);

    const cleared = matched.size === tiles.length;

    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    React.useEffect(() => {
      if (cleared || over) return;
      const iv = setInterval(() => setTimeLeft((t) => {
        if (t <= 0.1) { setOver(true); return 0; }
        return t - 0.1;
      }), 100);
      return () => clearInterval(iv);
    }, [cleared, over]);

    const matches = matched.size / 2;
    if (cleared) {
      return <KC.CompleteScreen title="Board cleared!" jp="完璧" icon="puzzle"
        xp={30 + Math.round(timeLeft)}
        stats={[{ icon: 'timer', label: `${Math.round(timeLeft)}s left` }]} onDone={onDone} />;
    }
    if (over) {
      return <KC.CompleteScreen title="Time's up" jp="また挑戦しよう" icon="clock" tone="var(--sumi-700)"
        xp={matches * 4}
        stats={[{ icon: 'puzzle', label: `${matches} / ${tiles.length / 2} pairs` }]} onDone={onDone} />;
    }

    const tap = (t) => {
      if (matched.has(t.key) || wrong) return;
      if (!sel) { setSel(t.key); return; }
      if (sel === t.key) { setSel(null); return; }
      const a = tiles.find((x) => x.key === sel);
      if (a.wordId === t.wordId && a.kind !== t.kind) {
        setMatched((m) => new Set([...m, a.key, t.key]));
        setSel(null);
      } else {
        setWrong([sel, t.key]);
        setSel(null);
        setTimeLeft((x) => Math.max(0, x - PENALTY));
        setTimeout(() => setWrong(null), 450);
      }
    };

    const tileStyle = (t) => {
      const isSel = sel === t.key;
      const isWrong = wrong && wrong.includes(t.key);
      const isMatched = matched.has(t.key);
      let bg = 'var(--surface-card)', border = 'var(--border-default)', edge = 'var(--sumi-200)', color = 'var(--text-strong)';
      if (isSel) { bg = 'var(--brand-soft)'; border = 'var(--ai-300)'; edge = 'var(--ai-300)'; color = 'var(--brand-strong)'; }
      if (isWrong) { bg = 'var(--danger-soft)'; border = 'var(--beni-400)'; edge = 'var(--beni-400)'; color = 'var(--beni-700)'; }
      return {
        minHeight: 72, padding: '8px 6px', borderRadius: 'var(--radius-md)',
        background: bg, border: `1.5px solid ${border}`,
        boxShadow: isMatched ? 'none' : `0 3px 0 ${edge}`,
        color, cursor: isMatched ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        opacity: isMatched ? 0 : 1, pointerEvents: isMatched ? 'none' : 'auto',
        transform: isMatched ? 'scale(0.7)' : 'none',
        transition: 'opacity .3s var(--ease-out), transform .3s var(--ease-out)',
        animation: isWrong ? 'kotoba-shake .4s' : 'none',
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14,
      };
    };

    const urgency = timeLeft / TIME;

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)', position: 'relative' }}>
        <KC.ChallengeTopBar onExit={onExit} progress={(matches / (tiles.length / 2)) * 100}
          right={
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-num)', fontWeight: 800,
              color: urgency < 0.25 ? 'var(--danger)' : 'var(--brand)',
            }}>
              {I('timer', { style: { width: 18, height: 18 } })}{Math.ceil(timeLeft)}s
            </span>
          } />
        <div style={{ padding: '14px 24px 0' }}>
          <h2 style={{ fontSize: 22, lineHeight: 1.3, color: 'var(--text-strong)' }}>Match the pairs</h2>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>Word ↔ meaning. A miss costs {PENALTY} seconds.</p>
        </div>
        <div style={{ flex: 1, padding: '18px 24px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, alignContent: 'start' }}>
          {tiles.map((t) => (
            <button key={t.key} onClick={() => tap(t)} style={tileStyle(t)}>
              {t.kind === 'jp'
                ? <span className="jp-display" style={{ fontSize: t.label.length > 2 ? 19 : 27 }}>{t.label}</span>
                : t.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
})();

Object.assign(window, { PairMatch });
