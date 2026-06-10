// Kotoba — shared chrome for all challenge views.
// Exposes window.KotobaChallenge = { JpWord, Hearts, ChallengeTopBar, FeedbackSheet,
//   CompleteScreen, StrengthDots, AidChip, useWordTick, useHearts, speakJa }

const KotobaChallenge = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const { Button, IconButton } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  // re-render when any word strength changes
  function useWordTick() {
    const [, setT] = React.useState(0);
    React.useEffect(() => KW.subscribe(() => setT((t) => t + 1)), []);
  }

  // ── JpWord — Japanese with the learner's current reading aid ──
  // challenge=true forces aids off (the word IS the test).
  function JpWord({ word, size = 30, challenge = false, color = 'var(--text-strong)', style = {} }) {
    useWordTick();
    const w = typeof word === 'string' ? KW.word(word) : word;
    if (!w) return null;
    const aid = challenge ? 'none' : KW.aidFor(w.id || '');
    const kanaOnly = w.jp === w.kana;
    const showRuby = (aid === 'furigana' || aid === 'romaji') && !kanaOnly && w.parts;
    const showRomaji = aid === 'romaji';
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, ...style }}>
        <span className="jp-display" style={{ fontSize: size, color, lineHeight: 1.25 }}>
          {showRuby
            ? w.parts.map((p, i) => p.r
              ? <ruby key={i}>{p.t}<rt style={{ fontSize: Math.max(10, size * 0.32), color: 'var(--text-muted)', fontWeight: 500 }}>{p.r}</rt></ruby>
              : <span key={i}>{p.t}</span>)
            : w.jp}
        </span>
        {showRomaji && (
          <span style={{ fontFamily: 'var(--font-num)', fontWeight: 700, fontSize: Math.max(11, size * 0.38), color: 'var(--brand-strong)', marginTop: 5 }}>
            {w.romaji}
          </span>
        )}
      </span>
    );
  }

  // Tile token version (for sentence tiles) — inline, ruby only
  function JpToken({ token, size = 20, challenge = false }) {
    useWordTick();
    const aid = token.wordId && !challenge ? KW.aidFor(token.wordId) : 'none';
    const showRuby = aid !== 'none' && token.parts;
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="jp-display" style={{ fontSize: size, lineHeight: 1.3 }}>
          {showRuby
            ? token.parts.map((p, i) => p.r
              ? <ruby key={i}>{p.t}<rt style={{ fontSize: Math.max(9, size * 0.42), color: 'var(--text-muted)', fontWeight: 500 }}>{p.r}</rt></ruby>
              : <span key={i}>{p.t}</span>)
            : token.t}
        </span>
        {aid === 'romaji' && (
          <span style={{ fontFamily: 'var(--font-num)', fontWeight: 600, fontSize: 10, color: 'var(--brand-strong)', marginTop: 2 }}>{token.romaji}</span>
        )}
      </span>
    );
  }

  // ── hearts ─────────────────────────────────────────────────
  function useHearts(start = 5) {
    const [hearts, setHearts] = React.useState(start);
    const lose = React.useCallback(() => setHearts((h) => Math.max(0, h - 1)), []);
    return [hearts, lose];
  }

  function Hearts({ count }) {
    const on = !(window.KotobaAid && window.KotobaAid.hearts === false);
    if (!on) return null;
    return (
      <span key={count} style={{
        display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--accent)',
        fontFamily: 'var(--font-num)', fontWeight: 800,
        animation: count < 5 ? 'kotoba-pop .35s var(--ease-spring) both' : 'none',
      }}>
        {I('heart', { fill: count > 0 ? 'var(--accent)' : 'none', style: { width: 18, height: 18 } })}{count}
      </span>
    );
  }

  // ── top bar: exit · progress · hearts ──────────────────────
  function ChallengeTopBar({ onExit, progress = 0, hearts, right }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '54px 18px 8px', flex: 'none' }}>
        <IconButton label="Exit" variant="ghost" size="sm" onClick={onExit}>{I('x', { style: { width: 22, height: 22 } })}</IconButton>
        <div style={{ flex: 1, height: 12, borderRadius: 999, background: 'var(--surface-sunken)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, borderRadius: 999, background: 'linear-gradient(90deg,var(--kaki-400),var(--accent))', transition: 'width .3s var(--ease-out)' }} />
        </div>
        {right != null ? right : <Hearts count={hearts} />}
      </div>
    );
  }

  // ── feedback sheet (correct / wrong) ───────────────────────
  function FeedbackSheet({ correct, detail, onNext, last = false, nextLabel }) {
    const ok = correct;
    return (
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 20,
        background: ok ? 'var(--success-soft)' : 'var(--danger-soft)',
        borderTopLeftRadius: 'var(--radius-xl)', borderTopRightRadius: 'var(--radius-xl)',
        padding: '22px 24px 40px', boxShadow: 'var(--shadow-xl)',
        animation: 'kotoba-sheet-up .28s var(--ease-emphas) both',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <span style={{
            width: 40, height: 40, borderRadius: '50%', display: 'inline-flex', flex: 'none',
            alignItems: 'center', justifyContent: 'center', color: '#fff',
            background: ok ? 'var(--success)' : 'var(--danger)',
          }}>{I(ok ? 'check' : 'x', { style: { width: 24, height: 24 } })}</span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: ok ? 'var(--wakaba-700)' : 'var(--beni-700)' }}>
              {ok ? 'Nice!' : 'Not quite'}
            </div>
            <div style={{ fontSize: 14, color: ok ? 'var(--wakaba-700)' : 'var(--beni-700)' }}>{detail}</div>
          </div>
        </div>
        <Button fullWidth size="lg" variant={ok ? 'success' : 'danger'} onClick={onNext}>
          {nextLabel || (last ? 'Finish' : 'Continue')}
        </Button>
      </div>
    );
  }

  // ── completion screen ──────────────────────────────────────
  function CompleteScreen({ title, jp = 'よくできました', xp = 40, stats = [], onDone, icon = 'check', tone = 'var(--brand)' }) {
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    return (
      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '70px 28px 32px',
        boxSizing: 'border-box', background: tone, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.16, backgroundImage: 'url(../../assets/seigaiha.svg)', backgroundSize: 120 }}></div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{
            width: 92, height: 92, borderRadius: '50%', background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--glow-accent)', animation: 'kotoba-pop .5s var(--ease-spring) both',
          }}>{I(icon, { style: { width: 44, height: 44, color: 'var(--success)' } })}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 30, color: '#fff', marginTop: 20 }}>{title}</div>
          <div className="jp-display" style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>{jp}</div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 18, flexWrap: 'wrap', justifyContent: 'center',
            padding: '9px 18px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.16)',
            color: '#fff', fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 16,
          }}>
            <span>+{xp} XP</span>
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <span style={{ opacity: 0.55 }}>·</span>
                {s.icon && I(s.icon, { style: { width: 16, height: 16 } })}
                <span>{s.label}</span>
              </React.Fragment>
            ))}
          </div>
          <div style={{ height: 30 }}></div>
          <Button fullWidth size="lg" variant="accent" onClick={onDone}>Continue</Button>
        </div>
      </div>
    );
  }

  // ── small bits ─────────────────────────────────────────────
  function StrengthDots({ id }) {
    useWordTick();
    const s = KW.strength(id);
    return (
      <span style={{ display: 'inline-flex', gap: 3 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: i < s ? (s >= 4 ? 'var(--success)' : 'var(--accent)') : 'var(--sumi-200)',
          }}></span>
        ))}
      </span>
    );
  }

  function AidChip({ id }) {
    useWordTick();
    const aid = KW.aidFor(id);
    const label = aid === 'romaji' ? 'romaji' : aid === 'furigana' ? 'furigana' : 'no aid';
    const tone = aid === 'none'
      ? { background: 'var(--success-soft)', color: 'var(--wakaba-700)' }
      : { background: 'var(--surface-sunken)', color: 'var(--text-muted)' };
    return (
      <span style={{
        fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 999,
        letterSpacing: '0.02em', ...tone,
      }}>{label}</span>
    );
  }

  // ── speech (listening challenge) ───────────────────────────
  function speakJa(text, { rate = 0.85 } = {}) {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP'; u.rate = rate;
      const v = window.speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith('ja'));
      if (v) u.voice = v;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) { /* unsupported — UI still works */ }
  }

  return { JpWord, JpToken, Hearts, ChallengeTopBar, FeedbackSheet, CompleteScreen, StrengthDots, AidChip, useWordTick, useHearts, speakJa };
})();

window.KotobaChallenge = KotobaChallenge;
