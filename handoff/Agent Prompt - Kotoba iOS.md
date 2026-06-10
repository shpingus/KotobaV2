# Build "Kotoba" — a native iOS Japanese-learning app from the Kotoba Design System

You are building a **brand-new native iOS app from scratch**. Treat it as a greenfield product — it is *not* a port of any existing codebase. Attached is `kotoba-design-system.zip`: a complete design system (tokens, components, brand guidelines, and a full interactive mobile UI kit) that defines exactly what the app should look, feel, and sound like. Your job is to translate it faithfully into SwiftUI and build the product around it.

A later phase (Phase 6) will import Japanese language packs from an older app. Design the content layer so that import is a data-conversion task, not a refactor.

---

## 1 · First: learn the design system

Unzip `kotoba-design-system.zip` into the repo at `design/kotoba-design-system/` and keep it there as the **read-only source of truth**. Before writing any code:

1. **Read `readme.md` top to bottom.** It defines the brand (Kotoba 言葉), the voice ("warm coach, never fear-based", sentence case everywhere), the color families (Ai indigo = brand, Kaki persimmon = energy/streaks, Wakaba = success, Shu vermillion = torii/bosses, Sumi = ink neutrals, plus the JLPT tier scale), typography, spacing, elevation, motion, the RPG layer, and the adaptive "sensei" layer. Internalize the CONTENT FUNDAMENTALS section — every string in the app must follow it.
2. **Read `SKILL.md`** for the quick orientation.
3. **Read `tokens/*.css`** (`colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`). These are the canonical token values.
4. **Read every `components/**/<Name>.prompt.md` and its sibling `.jsx`.** The JSX files are *reference implementations* — they define exact visual specs (the 3-D press edge, pixel-sprite matrices for the companion and oni, LessonNode states, torii geometry). You will re-implement them in SwiftUI, not run them.
5. **Open `ui_kits/mobile_app/*.jsx`** (Onboarding, HomePath, Lesson, BossBattle, GatePassage, CharacterSheet, Profile). These are the screen designs. They are your screen-by-screen spec — match layout, hierarchy, spacing, and copy register.
6. **Copy what's bundleable:** the SVGs in `assets/` (logo, mark, reversed wordmark, seigaiha texture, torii) become app assets. The four Google Fonts (Space Grotesk, Plus Jakarta Sans, Zen Maru Gothic, Zen Kaku Gothic New) must be downloaded, bundled, and registered in the app — no runtime font fetching.

**Key translation rule:** the CSS custom properties become a Swift token layer (see §3). Never hardcode a hex value, radius, or duration in feature code — always go through the token layer, and keep a comment mapping each Swift token to its CSS variable name (e.g. `/// --ai-600`) so future design-system updates are mechanical.

The runtime namespace `MichiDesignSystem_2b01f5` you'll see in the bundle/HTML is an internal web artifact — ignore it. The brand and all naming in your codebase is **Kotoba**.

---

## 2 · Product scope (v1)

Native iOS app, **SwiftUI, iOS 17+, Swift 5.10+**, no backend — fully local-first. Screens, in build order:

1. **Onboarding** — goal/level intake, meet the kotodama companion (Yūki).
2. **Home / Path** — the stepping-stone journey map: lesson nodes with states (done / current-pulsing / locked), unit torii checkpoints, optional boss encounters beside the path, streak flame, XP, companion floating at the current node.
3. **Lesson flow** — exercise screens (kana tiles, multiple choice, typed answers), correct/wrong states per the design system (wakaba/beni fills, calm corrections: *"Not quite — the reading is mizu"*), end-of-lesson summary with XP gain.
4. **Boss battle** — quiz-battle vs. the pixel oni: correct answers strike (HP bar + shake), wrong answers cost a heart. Optional, never blocks the path.
5. **Gate passage / tier-up** — torii celebration screens for unit completion and JLPT tier promotion.
6. **Character sheet ("Spirit")** — companion evolution stage, four stats (Vocabulary 語彙, Grammar 文法, Listening 聴解, Reading 読解), Power level 言力, skill radar, quests.
7. **Profile** — streak history, tier ladder (Pre-N5 → N1), settings.
8. **Sensei moments** — adaptive insight cards surfaced on Home ("You mix up ね and ぬ — practice 2 min"). v1 uses simple heuristics over answer history (most-confused pairs, weakest stat); the architecture should allow swapping in an LLM later behind the same interface.

If anything in the UI kit conflicts with these notes, the UI kit wins for visuals and the readme wins for voice/behavior.

---

## 3 · Architecture — local Swift packages, one app shell

Use a single Xcode project with **local SPM packages**. Each package has one job; dependencies point in one direction only:

```
KotobaApp (app target — composition root, navigation, DI wiring only)
 ├── Features/        (one package per screen-family; depends on ↓)
 │     FeatureOnboarding, FeaturePath, FeatureLesson, FeatureBattle,
 │     FeatureSpirit, FeatureProfile, FeatureSensei
 ├── LearningEngine   (pure logic: SRS scheduling, XP/levels, streaks,
 │                     stats & Power aggregation, quest progress,
 │                     boss battle rules, sensei heuristics — zero UI imports)
 ├── ContentKit       (language-pack schema, loading, validation — see §4)
 ├── Persistence      (learner state: progress, streaks, answer history;
 │                     versioned schema, simple forward migrations)
 └── KotobaDesignSystem (tokens, fonts, components, sprites — zero business logic)
```

**KotobaDesignSystem package contents:**
- `Tokens/` — `KotobaColor`, `KotobaFont`, `KotobaSpacing`, `KotobaRadius`, `KotobaShadow`, `KotobaMotion`, each file a direct translation of the matching `tokens/*.css`. Expose *semantic* names (`.brand`, `.accent`, `.textBody`, `.surfaceCard`, `.tier(.n4)`…) and keep raw ramps internal — exactly like the CSS guidance.
- `Components/` — one file per component, mirroring the design system's inventory: `KotobaButton` (with the signature tactile press: solid darker bottom edge, translate-down on press), `IconButton`, `Badge`, `Tag`, `Card`, `Avatar`, `Input`, `ProgressRing`, `StreakCounter`, `XPBar`, `LevelBadge`, `LessonNode`, `KanaTile`, `Companion` + `PixelSprite` (render the pixel matrices from the JSX as crisp shapes — copy the matrices verbatim), `ToriiGate`, `StatBar`, `PowerLevel`, `QuestCard`, `BossNode` + `PixelOni`, `SenseiCard`, `SenseiChip`, `SkillRadar`.
- `Gallery/` — a debug-only screen that renders every component in every state. Build it **first** and keep it green; it's your living style guide and the fastest way to verify fidelity against the UI-kit HTML.

**Motion & feel:** purposeful, slightly springy. Calm ease-out (~220 ms) for UI; spring/overshoot reserved for rewards (level-ups, correct answers, the current-node pulse). Pair the tactile press with subtle haptics (`.impact(.light)` on press, `.success` notification on lesson complete). Respect Reduce Motion: disable the pulse loop and entrance springs.

---

## 4 · ContentKit — Japanese-only now, multi-language-ready by data shape

This is the most important architectural constraint. **Ship only Japanese**, but make language a *data dimension*, not a code branch:

- **Canonical pack schema (JSON):** `LanguagePack { id, languageCode: "ja", version, courses → units → lessons → exercises, vocabulary, grammarNotes }`. Every content entity carries the pack id. Define the schema as `Codable` structs in ContentKit with a strict validator (a CLI/test that fails on dangling references, empty lessons, duplicate ids).
- **Exercise types are language-neutral** (multiple choice, match pairs, type-the-answer, listen-and-pick, cloze). Language-specific *presentation* lives in small adapters: a `ScriptSupport` protocol (rendering rich text with annotations, input handling) with one implementation, `JapaneseScriptSupport` (furigana/ruby text, kana vs. kanji display rules, romaji support toggle, the Zen fonts). Adding Spanish later = new pack JSON + a trivial adapter — **no engine or UI rewrites**.
- **Do NOT over-abstract.** No plugin systems, no dynamic language registries, no generics gymnastics. One enum `SupportedLanguage { case japanese }`, one adapter, clean seams. The test: "could an agent add language #2 in a day without touching LearningEngine or Features?" Yes → done.
- **Packs are bundled resources** loaded and validated at startup, decoupled from learner state (Persistence stores progress *against content ids*, never embeds content). This is precisely what makes Phase 6 (importing the old app's packs) a pure data task.
- Ship a small **hand-written sample pack** (Pre-N5: ~2 units of hiragana + greetings) so every feature is buildable and testable before the real packs arrive.

---

## 5 · Coding principles (non-negotiable)

This codebase is built and maintained by agents. Optimize for *context engineering* — any file should be understandable and safely editable in isolation:

1. **One concern per file, ~200 lines max.** One primary type per file. If a view grows, split subviews into sibling files, not nested mega-bodies.
2. **Self-explanatory over commented.** Names carry the meaning; add a 1–3 line doc comment at the top of each file saying what it owns and what it deliberately doesn't. Comment *why*, never *what*.
3. **No legacy, ever.** Rapid change is the norm: delete dead code immediately, no deprecation shims, no "v2" suffixes, no backwards-compat layers, no commented-out blocks. The only compatibility surface is the Persistence schema (versioned, forward-migrated) and the pack JSON schema (versioned).
4. **Pure logic stays pure.** LearningEngine and ContentKit have no SwiftUI/UIKit imports and are fully unit-tested (SRS intervals, XP/level math, streak edge cases incl. timezones, stat/Power aggregation, battle rules, sensei heuristics). Features get `#Preview`s for every state instead of UI tests.
5. **Unidirectional state.** `@Observable` models per feature; learner state flows from Persistence through the engine into views; views send intents back. No singletons except a composition root.
6. **No stringly-typed anything.** Ids are typed wrappers; navigation uses typed routes; copy lives in a strings catalog from day one (UI copy is English with Japanese as *content*, per the readme).
7. **Conventions over cleverness.** Standard SwiftUI patterns; no third-party dependencies unless something is genuinely painful without one (justify in the PR/commit message if so).
8. **Every commit compiles and the Gallery renders.** Small, focused commits with messages explaining intent.

---

## 6 · Build phases

Work in this order; each phase ends in a runnable app:

- **Phase 0 — Scaffold.** Xcode project, package graph, fonts bundled & registered, asset catalog (logo/mark/seigaiha/torii from `assets/`), CI-able test plan.
- **Phase 1 — Design system.** Full token layer + all components + the Gallery screen. Verify side-by-side against `ui_kits/mobile_app/index.html` and the component cards before moving on.
- **Phase 2 — Content & engine.** Pack schema + validator + sample Japanese pack; LearningEngine core (XP, streaks, SRS, stats/Power) with tests; Persistence.
- **Phase 3 — Core loop.** Onboarding → Home path → Lesson → results. This is the app's heart: node states, the pulsing current node, XP/streak feedback, calm error handling.
- **Phase 4 — RPG layer.** Companion (evolution stages on the path & Spirit tab), quests, boss battles, torii gate passages, tier-up celebrations.
- **Phase 5 — Adaptive layer.** Answer-history analytics → sensei heuristics → SenseiCard insights and "Tuned for you" sets, behind a `SenseiInsightProvider` protocol (LLM-swappable later).
- **Phase 6 — Real content import.** I will provide the old app's Japanese language packs. Write a standalone converter (Swift CLI or script) from the old format to the canonical pack schema: map fields explicitly, run the validator, snapshot-test a converted sample, and report anything that doesn't map cleanly **instead of guessing**. No app-code changes should be needed — if they are, the schema work in Phase 2 was wrong; fix it there.

---

## 7 · Definition of done (per phase)

- Builds clean, all tests pass, Gallery renders every component state.
- Visual fidelity: screens match the UI kit (spacing, radii, the press edge, tier colors, type scale — minimum 24 pt-equivalent hierarchy discipline, 48 pt tap targets).
- Voice fidelity: every user-facing string follows CONTENT FUNDAMENTALS (sentence case, encouraging, specific numbers, never fear-based).
- No file over ~200 lines, no TODOs left behind, no dead code (Expect engine files / when vital)

Start with Phase 0 and present the package graph and token-layer plan before writing feature code. Ask me before adding any screen, content, or dependency not specified here.
