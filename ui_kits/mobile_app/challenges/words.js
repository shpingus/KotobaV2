// Kotoba — shared word knowledge store for challenge views.
// Plain JS (no JSX). Exposes window.KotobaWords.
//
// Every word has a per-learner "strength" 0–5. Strength drives the reading aid
// shown wherever Japanese is NOT itself the challenge:
//   strength 0–1  → romaji + furigana (newest words)
//   strength 2–3  → furigana only
//   strength 4–5  → no aid (mastered)
// Strength moves silently: +1 on a correct answer, −1 on a miss.

const KotobaWords = (() => {
  const KEY = 'kotoba-word-strength-v1';

  // parts: segments for furigana ruby — {t} plain kana, {t,r} kanji + reading.
  const WORDS = [
    { id: 'mizu', jp: '水', kana: 'みず', romaji: 'mizu', meaning: 'water', parts: [{ t: '水', r: 'みず' }], level: 'n5', seed: 4 },
    { id: 'hon', jp: '本', kana: 'ほん', romaji: 'hon', meaning: 'book', parts: [{ t: '本', r: 'ほん' }], level: 'n5', seed: 3 },
    { id: 'yama', jp: '山', kana: 'やま', romaji: 'yama', meaning: 'mountain', parts: [{ t: '山', r: 'やま' }], level: 'n5', seed: 5 },
    { id: 'hi-day', jp: '日', kana: 'ひ', romaji: 'hi', meaning: 'day / sun', parts: [{ t: '日', r: 'ひ' }], level: 'n5', seed: 2 },
    { id: 'neko', jp: '猫', kana: 'ねこ', romaji: 'neko', meaning: 'cat', parts: [{ t: '猫', r: 'ねこ' }], level: 'n5', seed: 2 },
    { id: 'inu', jp: '犬', kana: 'いぬ', romaji: 'inu', meaning: 'dog', parts: [{ t: '犬', r: 'いぬ' }], level: 'n5', seed: 3 },
    { id: 'sakana', jp: '魚', kana: 'さかな', romaji: 'sakana', meaning: 'fish', parts: [{ t: '魚', r: 'さかな' }], level: 'n5', seed: 1 },
    { id: 'tori', jp: '鳥', kana: 'とり', romaji: 'tori', meaning: 'bird', parts: [{ t: '鳥', r: 'とり' }], level: 'n5', seed: 1 },
    { id: 'ki-tree', jp: '木', kana: 'き', romaji: 'ki', meaning: 'tree', parts: [{ t: '木', r: 'き' }], level: 'n5', seed: 4 },
    { id: 'hito', jp: '人', kana: 'ひと', romaji: 'hito', meaning: 'person', parts: [{ t: '人', r: 'ひと' }], level: 'n5', seed: 3 },
    { id: 'taberu', jp: '食べる', kana: 'たべる', romaji: 'taberu', meaning: 'to eat', parts: [{ t: '食', r: 'た' }, { t: 'べる' }], level: 'n5', seed: 2 },
    { id: 'nomu', jp: '飲む', kana: 'のむ', romaji: 'nomu', meaning: 'to drink', parts: [{ t: '飲', r: 'の' }, { t: 'む' }], level: 'n5', seed: 2 },
    { id: 'miru', jp: '見る', kana: 'みる', romaji: 'miru', meaning: 'to see', parts: [{ t: '見', r: 'み' }, { t: 'る' }], level: 'n5', seed: 3 },
    { id: 'ookii', jp: '大きい', kana: 'おおきい', romaji: 'ookii', meaning: 'big', parts: [{ t: '大', r: 'おお' }, { t: 'きい' }], level: 'n5', seed: 2 },
    { id: 'chiisai', jp: '小さい', kana: 'ちいさい', romaji: 'chiisai', meaning: 'small', parts: [{ t: '小', r: 'ちい' }, { t: 'さい' }], level: 'n5', seed: 1 },
    { id: 'tomodachi', jp: '友達', kana: 'ともだち', romaji: 'tomodachi', meaning: 'friend', parts: [{ t: '友達', r: 'ともだち' }], level: 'n5', seed: 0 },
    { id: 'sensei', jp: '先生', kana: 'せんせい', romaji: 'sensei', meaning: 'teacher', parts: [{ t: '先生', r: 'せんせい' }], level: 'n5', seed: 1 },
    { id: 'gakkou', jp: '学校', kana: 'がっこう', romaji: 'gakkou', meaning: 'school', parts: [{ t: '学校', r: 'がっこう' }], level: 'n5', seed: 0 },
    { id: 'kyou', jp: '今日', kana: 'きょう', romaji: 'kyou', meaning: 'today', parts: [{ t: '今日', r: 'きょう' }], level: 'n5', seed: 1 },
    { id: 'konnichiwa', jp: 'こんにちは', kana: 'こんにちは', romaji: 'konnichiwa', meaning: 'hello', level: 'n5', seed: 5 },
    { id: 'arigatou', jp: 'ありがとう', kana: 'ありがとう', romaji: 'arigatou', meaning: 'thank you', level: 'n5', seed: 5 },
    { id: 'ohayou', jp: 'おはよう', kana: 'おはよう', romaji: 'ohayou', meaning: 'good morning', level: 'n5', seed: 4 },
    { id: 'sushi', jp: 'すし', kana: 'すし', romaji: 'sushi', meaning: 'sushi', level: 'n5', seed: 4 },
    // Above-level pool (Storm difficulty in Word rain)
    { id: 'densha', jp: '電車', kana: 'でんしゃ', romaji: 'densha', meaning: 'train', parts: [{ t: '電車', r: 'でんしゃ' }], level: 'n4', seed: 0 },
    { id: 'tenki', jp: '天気', kana: 'てんき', romaji: 'tenki', meaning: 'weather', parts: [{ t: '天気', r: 'てんき' }], level: 'n4', seed: 0 },
    { id: 'ongaku', jp: '音楽', kana: 'おんがく', romaji: 'ongaku', meaning: 'music', parts: [{ t: '音楽', r: 'おんがく' }], level: 'n4', seed: 0 },
    { id: 'eiga', jp: '映画', kana: 'えいが', romaji: 'eiga', meaning: 'movie', parts: [{ t: '映画', r: 'えいが' }], level: 'n4', seed: 0 },
  ];

  // Sentence-building items. tokens are the correct order; extras are distractors.
  // Each tile may reference a wordId so reading aids follow the learner's strength.
  const SENTENCES = [
    {
      id: 's-mizu', en: 'I drink water.',
      tokens: [
        { t: '私は', parts: [{ t: '私', r: 'わたし' }, { t: 'は' }], romaji: 'watashi wa' },
        { t: '水を', parts: [{ t: '水', r: 'みず' }, { t: 'を' }], romaji: 'mizu o', wordId: 'mizu' },
        { t: '飲みます', parts: [{ t: '飲', r: 'の' }, { t: 'みます' }], romaji: 'nomimasu', wordId: 'nomu' },
      ],
      extras: [
        { t: '食べます', parts: [{ t: '食', r: 'た' }, { t: 'べます' }], romaji: 'tabemasu', wordId: 'taberu' },
        { t: '犬を', parts: [{ t: '犬', r: 'いぬ' }, { t: 'を' }], romaji: 'inu o', wordId: 'inu' },
      ],
    },
    {
      id: 's-neko', en: 'The cat is small.',
      tokens: [
        { t: '猫は', parts: [{ t: '猫', r: 'ねこ' }, { t: 'は' }], romaji: 'neko wa', wordId: 'neko' },
        { t: '小さい', parts: [{ t: '小', r: 'ちい' }, { t: 'さい' }], romaji: 'chiisai', wordId: 'chiisai' },
        { t: 'です', romaji: 'desu' },
      ],
      extras: [
        { t: '大きい', parts: [{ t: '大', r: 'おお' }, { t: 'きい' }], romaji: 'ookii', wordId: 'ookii' },
        { t: '鳥は', parts: [{ t: '鳥', r: 'とり' }, { t: 'は' }], romaji: 'tori wa', wordId: 'tori' },
      ],
    },
    {
      id: 's-sakana', en: 'I eat fish today.',
      tokens: [
        { t: '今日', parts: [{ t: '今日', r: 'きょう' }], romaji: 'kyou', wordId: 'kyou' },
        { t: '魚を', parts: [{ t: '魚', r: 'さかな' }, { t: 'を' }], romaji: 'sakana o', wordId: 'sakana' },
        { t: '食べます', parts: [{ t: '食', r: 'た' }, { t: 'べます' }], romaji: 'tabemasu', wordId: 'taberu' },
      ],
      extras: [
        { t: '見ます', parts: [{ t: '見', r: 'み' }, { t: 'ます' }], romaji: 'mimasu', wordId: 'miru' },
        { t: '本を', parts: [{ t: '本', r: 'ほん' }, { t: 'を' }], romaji: 'hon o', wordId: 'hon' },
      ],
    },
  ];

  // ── strength store ─────────────────────────────────────────
  const seed = {};
  WORDS.forEach((w) => { seed[w.id] = w.seed; });
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { saved = {}; }
  const strengths = Object.assign({}, seed, saved);
  const subs = new Set();

  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(strengths)); } catch (e) { /* no-op */ }
  }
  function notify() { subs.forEach((fn) => fn()); }

  const byId = {};
  WORDS.forEach((w) => { byId[w.id] = w; });

  const api = {
    WORDS,
    SENTENCES,
    word: (id) => byId[id],
    strength: (id) => (strengths[id] == null ? 0 : strengths[id]),
    // delta: +1 correct, −1 wrong, +2 "too easy" fling
    bump(id, delta) {
      if (!byId[id]) return;
      strengths[id] = Math.max(0, Math.min(5, api.strength(id) + delta));
      persist(); notify();
    },
    reset() {
      WORDS.forEach((w) => { strengths[w.id] = w.seed; });
      persist(); notify();
    },
    subscribe(fn) { subs.add(fn); return () => subs.delete(fn); },

    // Reading-aid decision. Respects the global tweak override on window.KotobaAid.
    // kana-only words can't take furigana, so they fall straight to 'none'.
    aidFor(id) {
      const w = byId[id];
      if (!w) return 'none';
      const kanaOnly = w.jp === w.kana;
      const mode = (window.KotobaAid && window.KotobaAid.mode) || 'auto';
      if (mode === 'none') return 'none';
      if (mode === 'romaji') return 'romaji';
      if (mode === 'furigana') return kanaOnly ? 'none' : 'furigana';
      const s = api.strength(id);
      if (s <= 1) return 'romaji';
      if (s <= 3) return kanaOnly ? 'none' : 'furigana';
      return 'none';
    },

    // learner's known pool (anything seen before, strength >= 1) sorted weakest first
    weakest(n) {
      return WORDS
        .filter((w) => w.level === 'n5')
        .slice()
        .sort((a, b) => api.strength(a.id) - api.strength(b.id))
        .slice(0, n || 8);
    },
    pool(kind) {
      const n5 = WORDS.filter((w) => w.level === 'n5');
      if (kind === 'learned') return n5.filter((w) => api.strength(w.id) >= 2);
      if (kind === 'all-n5') return n5;
      return WORDS; // 'stretch' — includes n4
    },
    dueCount() {
      return WORDS.filter((w) => w.level === 'n5' && api.strength(w.id) <= 3).length;
    },
  };

  return api;
})();

window.KotobaWords = KotobaWords;
