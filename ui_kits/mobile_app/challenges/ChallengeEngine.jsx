// Kotoba — ChallengeEngine: one runner for every lesson/drill exercise type.
//   mc-reading  "Which character reads mizu?"  (options ARE the test → no aids)
//   mc-gloss    "What does 猫 mean?"            (prompt gets reading aids)
//   mc-meaning  "Which word means 'fish'?"      (options get reading aids)
//   sentence    arrange Japanese tiles          (tiles get reading aids)
//   listen      hear it, tap the word           (sound→word is the test → no aids)
// Lessons on the path and practice drills all run through this.
// Exposes window.ChallengeEngine.

const ChallengeEngine = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const KW = window.KotobaWords;
  const KC = window.KotobaChallenge;
  const { Button, KanaTile, SenseiChip } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  // ── item builders ──────────────────────────────────────────
  const others = (id, n) => KW.WORDS.filter((w) => w.level === 'n5' && w.id !== id).slice(0, 12)
    .sort((a, b) => (a.id + id).localeCompare(b.id + id)).slice(0, n);
  const shuffleish = (arr, salt) => arr.slice().sort((a, b) => ((a.t || a.id) + salt).localeCompare((b.t || b.id) + salt));

  function mcItem(type, id) {
    const w = KW.word(id);
    const opts = shuffleish([{ ...w, ok: true }, ...others(id, 3)], id);
    return { type, wordId: id, word: w, options: opts };
  }
  const sentenceItem = (sid) => {
    const s = KW.SENTENCES.find((x) => x.id === sid);
    return { type: 'sentence', sentence: s, bank: shuffleish([...s.tokens, ...s.extras], sid) };
  };

  const PRESETS = {
    lesson: () => [
      mcItem('mc-reading', 'mizu'),
      mcItem('mc-gloss', 'tori'),
      sentenceItem('s-mizu'),
      mcItem('listen', 'neko'),
      mcItem('mc-meaning', 'sakana'),
    ],
    sentences: () => KW.SENTENCES.map((s) => sentenceItem(s.id)),
    listening: () => ['neko', 'sakana', 'tori', 'mizu'].map((id) => mcItem('listen', id)),
    weak: () => KW.weakest(5).map((w, i) => mcItem(i % 2 ? 'mc-meaning' : 'mc-gloss', w.id)),
  };

  // ── option row (English answers) ───────────────────────────
  function ChoiceRow({ children, state = 'default', onClick, disabled }) {
    const tones = {
      default: { bg: 'var(--surface-card)', border: 'var(--border-default)', edge: 'var(--sumi-200)', color: 'var(--text-strong)' },
      selected: { bg: 'var(--brand-soft)', border: 'var(--ai-300)', edge: 'var(--ai-300)', color: 'var(--brand-strong)' },
      correct: { bg: 'var(--success-soft)', border: 'var(--wakaba-400)', edge: 'var(--wakaba-400)', color: 'var(--wakaba-700)' },
      wrong: { bg: 'var(--danger-soft)', border: 'var(--beni-400)', edge: 'var(--beni-400)', color: 'var(--beni-700)' },
    };
    const t = tones[state];
    return (
      <button onClick={onClick} disabled={disabled} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
        minHeight: 52, padding: '12px 16px', borderRadius: 'var(--radius-md)',
        background: t.bg, border: `1.5px solid ${t.border}`, boxShadow: `0 3px 0 ${t.edge}`,
        color: t.color, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16,
        cursor: disabled ? 'default' : 'pointer', transition: 'transform .1s, box-shadow .1s',
      }}>{children}</button>
    );
  }

  // ── per-type bodies ────────────────────────────────────────
  function MCBody({ item, sel, setSel, checked }) {
    const glyphOptions = item.type !== 'mc-gloss';
    const state = (i) => {
      if (!checked) return sel === i ? 'selected' : 'default';
      if (item.options[i].ok) return 'correct';
      if (sel === i) return 'wrong';
      return 'default';
    };
    // prompt
    let prompt, promptEl = null;
    if (item.type === 'mc-reading') {
      prompt = 'Which character reads…';
      promptEl = (
        <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10, padding: '10px 20px', borderRadius: 'var(--radius-md)', background: 'var(--brand-soft)', border: '1px solid var(--ai-200)' }}>
          <span style={{ fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 30, lineHeight: 1, color: 'var(--brand-strong)' }}>{item.word.romaji}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)' }}>{item.word.meaning}</span>
        </div>
      );
    } else if (item.type === 'mc-gloss') {
      prompt = 'What does this mean?';
      promptEl = (
        <div style={{ display: 'inline-flex', padding: '14px 26px', borderRadius: 'var(--radius-md)', background: 'var(--brand-soft)', border: '1px solid var(--ai-200)' }}>
          <KC.JpWord word={item.word} size={40} color="var(--brand-strong)" />
        </div>
      );
    } else if (item.type === 'mc-meaning') {
      prompt = `Which word means “${item.word.meaning}”?`;
    } else {
      prompt = 'What did you hear?';
      promptEl = <ListenPrompt word={item.word} />;
    }

    return (
      <React.Fragment>
        <h2 style={{ fontSize: 22, marginTop: 12, lineHeight: 1.3, color: 'var(--text-strong)' }}>{prompt}</h2>
        {promptEl && <div style={{ marginTop: 12 }}>{promptEl}</div>}
        {glyphOptions ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 24, paddingBottom: 24 }}>
            {item.options.map((o, i) => {
              // mc-meaning: reading is NOT the test → show the learner's aid.
              // mc-reading / listen: reading IS the test → reveal only after check.
              const aid = item.type === 'mc-meaning' && !checked ? KW.aidFor(o.id) : 'none';
              const reading = checked ? o.romaji : aid === 'romaji' ? o.romaji : aid === 'furigana' ? o.kana : undefined;
              return (
                <KanaTile key={o.id} glyph={o.jp} reading={reading} size="lg"
                  state={state(i)} interactive={!checked}
                  onClick={() => !checked && setSel(i)}
                  style={{ width: '100%', boxSizing: 'border-box', minHeight: 120, justifyContent: 'center' }} />
              );
            })}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, paddingBottom: 24 }}>
            {item.options.map((o, i) => (
              <ChoiceRow key={o.id} state={state(i)} disabled={checked} onClick={() => !checked && setSel(i)}>{o.meaning}</ChoiceRow>
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }

  function ListenPrompt({ word }) {
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
      const t = setTimeout(() => KC.speakJa(word.kana), 350);
      return () => clearTimeout(t);
    }, [word.id]);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => KC.speakJa(word.kana)} aria-label="Play word" style={{
          width: 84, height: 84, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: 'var(--brand)', color: '#fff', boxShadow: '0 4px 0 var(--ai-800), var(--shadow-md)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{I('volume-2', { style: { width: 36, height: 36 } })}</button>
        <button onClick={() => KC.speakJa(word.kana, { rate: 0.5 })} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 16px',
          borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--border-default)',
          background: 'var(--surface-card)', boxShadow: '0 3px 0 var(--sumi-200)',
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--text-body)', cursor: 'pointer',
        }}>{I('snail', { style: { width: 18, height: 18 } })} Slower</button>
      </div>
    );
  }

  function SentenceBody({ item, sel, setSel, checked }) {
    const placed = sel || []; // array of bank indices in order
    const bank = item.bank;
    const toggle = (bi) => {
      if (checked) return;
      setSel(placed.includes(bi) ? placed.filter((x) => x !== bi) : [...placed, bi]);
    };
    const tile = (tok, on, state, key, onClick) => {
      const tones = {
        default: on
          ? { bg: 'var(--brand-soft)', border: 'var(--ai-300)', edge: 'var(--ai-300)' }
          : { bg: 'var(--surface-card)', border: 'var(--border-default)', edge: 'var(--sumi-200)' },
        correct: { bg: 'var(--success-soft)', border: 'var(--wakaba-400)', edge: 'var(--wakaba-400)' },
        wrong: { bg: 'var(--danger-soft)', border: 'var(--beni-400)', edge: 'var(--beni-400)' },
      };
      const t = tones[state] || tones.default;
      return (
        <button key={key} onClick={onClick} disabled={checked} style={{
          padding: '8px 13px', borderRadius: 'var(--radius-md)', cursor: checked ? 'default' : 'pointer',
          background: t.bg, border: `1.5px solid ${t.border}`, boxShadow: `0 3px 0 ${t.edge}`,
          color: 'var(--text-strong)', minHeight: 48,
        }}>
          <KC.JpToken token={tok} size={19} />
        </button>
      );
    };
    const rowState = !checked ? 'default' : isSentenceCorrect(item, placed) ? 'correct' : 'wrong';
    return (
      <React.Fragment>
        <h2 style={{ fontSize: 22, marginTop: 12, lineHeight: 1.3, color: 'var(--text-strong)' }}>Build the sentence</h2>
        <div style={{ display: 'inline-flex', marginTop: 12, padding: '10px 20px', borderRadius: 'var(--radius-md)', background: 'var(--brand-soft)', border: '1px solid var(--ai-200)', fontWeight: 700, fontSize: 18, color: 'var(--brand-strong)' }}>
          {item.sentence.en}
        </div>
        {/* answer row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'flex-start', alignContent: 'flex-start',
          minHeight: 78, marginTop: 22, padding: '10px 4px',
          borderBottom: '2px dashed var(--border-default)',
        }}>
          {placed.length === 0 && <span style={{ fontSize: 14, color: 'var(--text-faint)', fontWeight: 600, padding: '14px 4px' }}>Tap the tiles below in order…</span>}
          {placed.map((bi) => tile(bank[bi], true, rowState, 'a' + bi, () => toggle(bi)))}
        </div>
        {/* bank */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22, paddingBottom: 24 }}>
          {bank.map((tok, bi) => placed.includes(bi)
            ? <span key={'g' + bi} style={{ padding: '8px 13px', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', border: '1.5px dashed var(--border-subtle)', color: 'transparent', minHeight: 48, boxSizing: 'border-box' }}><KC.JpToken token={tok} size={19} challenge /></span>
            : tile(tok, false, 'default', 'b' + bi, () => toggle(bi)))}
        </div>
      </React.Fragment>
    );
  }

  // ── correctness ────────────────────────────────────────────
  function isSentenceCorrect(item, placed) {
    const want = item.sentence.tokens.map((t) => t.t);
    const got = (placed || []).map((bi) => item.bank[bi].t);
    return want.length === got.length && want.every((t, i) => t === got[i]);
  }
  function isCorrect(item, sel) {
    if (item.type === 'sentence') return isSentenceCorrect(item, sel);
    return sel != null && item.options[sel].ok;
  }
  function canCheck(item, sel) {
    if (item.type === 'sentence') return (sel || []).length > 0;
    return sel != null;
  }
  function wrongDetail(item) {
    if (item.type === 'sentence') {
      const s = item.sentence.tokens.map((t) => t.t).join('');
      return <React.Fragment>The answer is <strong className="jp">{s}</strong></React.Fragment>;
    }
    const a = item.options.find((o) => o.ok);
    return <React.Fragment>The answer is <strong className="jp">{a.jp}</strong> — <em>{a.romaji}</em>, “{a.meaning}”.</React.Fragment>;
  }
  function bumpFor(item, ok) {
    const d = ok ? 1 : -1;
    if (item.type === 'sentence') {
      item.sentence.tokens.forEach((t) => t.wordId && KW.bump(t.wordId, d));
    } else if (item.wordId) KW.bump(item.wordId, d);
  }

  // ── the engine ─────────────────────────────────────────────
  return function ChallengeEngine({ preset = 'lesson', title, completeTitle = 'Lesson complete!', onExit, onDone, sensei = false }) {
    const items = React.useMemo(() => PRESETS[preset](), [preset]);
    const [qi, setQi] = React.useState(0);
    const [sel, setSel] = React.useState(null);
    const [checked, setChecked] = React.useState(false);
    const [correctCount, setCorrectCount] = React.useState(0);
    const [hearts, loseHeart] = KC.useHearts(5);
    const [done, setDone] = React.useState(false);

    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

    if (done) {
      const acc = Math.round((correctCount / items.length) * 100);
      return <KC.CompleteScreen title={completeTitle} xp={correctCount * 10} stats={[{ icon: 'target', label: `${acc}%` }]} onDone={onDone} />;
    }

    const item = items[qi];
    const ok = checked && isCorrect(item, sel);

    const onCheck = () => {
      const good = isCorrect(item, sel);
      setChecked(true);
      bumpFor(item, good);
      if (good) setCorrectCount((c) => c + 1);
      else loseHeart();
    };
    const onNext = () => {
      if (qi + 1 >= items.length) { setDone(true); return; }
      setQi(qi + 1); setSel(null); setChecked(false);
    };

    const Body = item.type === 'sentence' ? SentenceBody : MCBody;
    const progress = ((qi + (checked ? 1 : 0)) / items.length) * 100;

    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-canvas)', position: 'relative' }}>
        <KC.ChallengeTopBar onExit={onExit} progress={progress} hearts={hearts} />
        <div style={{ flex: 1, padding: '20px 24px 0', overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
              {title || `Question ${qi + 1} of ${items.length}`}{title && ` · ${qi + 1}/${items.length}`}
            </div>
            {sensei && qi === 0 && <SenseiChip />}
          </div>
          <Body item={item} sel={sel} setSel={setSel} checked={checked} />
        </div>
        {!checked && (
          <div style={{ padding: '12px 24px 36px' }}>
            <Button fullWidth size="lg" onClick={onCheck} disabled={!canCheck(item, sel)}>Check</Button>
          </div>
        )}
        {checked && (
          <KC.FeedbackSheet correct={ok}
            detail={ok ? 'That’s correct.' : wrongDetail(item)}
            onNext={onNext} last={qi + 1 >= items.length} />
        )}
      </div>
    );
  };
})();

Object.assign(window, { ChallengeEngine });
