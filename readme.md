# Kotoba Design System

> **Kotoba (言葉)** — "words / language." A modern brand for a Japanese-language learning app, built around one idea: **every word is a step, and every step is visible.** A path metaphor unifies the whole product — a stepping-stone *journey map*, daily *streak flames* as steps taken, and the JLPT *tier ladder* (Pre-N5 → N5 → N1) as milestones along the road that deepen in colour as you climb toward the indigo summit. You collect kotoba — words — one step at a time.

This is a **from-scratch brand** — there was no prior codebase, Figma file, or existing identity to reference. The direction was set from a brief: *"a Japanese language learning app… modern, encourages the user to advance and feel a sense of progress,"* plus answers confirming a journey/path + streaks + JLPT-tier progress model, light-first, with room for a mascot later.

> **Naming note:** the app is **Kotoba**. The compiler-generated component namespace is `window.MichiDesignSystem_2b01f5` — a fixed internal technical handle from the project's original working title; it is **not** brand-facing and should be ignored when reading the brand. All identity, copy, and assets use *Kotoba*.

---

## Sources & provenance

- **Brief:** new brand for a Japanese language learning app — *modern, progress-forward.*
- **Confirmed direction (intake):** progress shown as a path/stepping-stone map + daily streak flames + JLPT tiers (Pre-N5 → N1, with sub-tier progress); light-first; mascot optional/later; surfaces = mobile app (onboarding, home/path, lesson, profile).
- **No external assets were provided.** All foundations, the logo, and the seigaiha motif are original to this system. Fonts are Google Fonts (see Typography). **If/when real brand assets, a mascot, or final fonts exist, drop them into `assets/` and `tokens/fonts.css` to replace the placeholders.**

---

## Brand in one breath

| | |
|---|---|
| **Name** | Kotoba (言葉) — "words / language" |
| **Promise** | Progress you can see. Every session adds words and moves you one stone further. |
| **Tagline** | *Every step forward.* / *毎日一歩ずつ* (a little, every day) |
| **Personality** | Encouraging, calm-but-energetic, modern, quietly Japanese. A patient coach, not a drill sergeant. |
| **Anti-personality** | Childish, gamified-to-distraction, shouty, corporate, cold. |

---

## CONTENT FUNDAMENTALS — how Kotoba writes

**Voice:** a warm, encouraging coach who is *on your side*. Kotoba celebrates small wins and never shames a missed day.

**Person & address.** Talk to the learner as **"you."** Kotoba refers to itself rarely and never as "I" — it's "we" only when truly needed (support). Most UI is imperative and learner-centred: *"Begin lesson," "Pick up where you left off," "You're on a 28-day streak."*

**Tone & register.** Friendly and plain. Short sentences. Active voice. Encouraging without being saccharine. We state progress as fact (*"N5 — 60% complete"*) and let the achievement speak; we don't pile on exclamation marks.

**Casing.** **Sentence case everywhere** — buttons, titles, menu items (*"Begin lesson,"* not *"Begin Lesson"*). The only ALL-CAPS use is tiny eyebrow/overline labels and the `START` bubble on the current path node, always with wide tracking. JLPT levels are written **N5 … N1** (capital N, no space); foundational level is **Pre-N5**.

**Japanese in copy.** Japanese appears as *content* (the thing being learned) and occasionally as flavour (a section header like 今日の復習 "today's review"). When Japanese is used as flavour for non-learners, pair it with English. Show furigana/romaji as support, never as a crutch in advanced contexts.

**Numbers & stats.** Friendly and specific, never vanity-padded. *"3 / 5 lessons," "+40 XP," "28-day streak," "12 cards to review."* Use tabular numerals (the `.num` helper / `--font-num`). Avoid decorative stat-walls — every number must mean something to the learner.

**Encouragement examples (the Kotoba register):**
- ✅ *"Nice — that's 5 in a row."* / *"You're almost there: 2 more to finish N5."* / *"Missed yesterday? No problem — pick up where you left off."*
- 🚫 *"AMAZING JOB!!! 🎉🎉🎉"* / *"You FAILED the quiz."* / *"Don't lose your streak!!!"* (fear-based)

**Error & empty states.** Calm and constructive. A wrong answer says *"Not quite — the reading is *mizu*,"* shows the correct answer, and moves on. Empty states point at the next step: *"No reviews due. Start a new lesson?"*

**Emoji.** Used **sparingly and purposefully** — never as decoration. The flame 🔥 is acceptable shorthand for streaks in dense contexts, but the preferred treatment is the `StreakCounter` component (a real flame icon). Avoid emoji confetti and emoji bullet lists.

---

## VISUAL FOUNDATIONS

### Colour
Light-first, built on five named families rooted in traditional Japanese colour names, plus a six-step tier scale.

- **Ai 藍 (indigo) — the brand.** Trust, focus, the "summit." Primary actions, navigation, brand surfaces. `--brand` = `--ai-600` (#3D4CA0). This is a true blue-indigo, deliberately **not** the over-used AI blue-purple gradient.
- **Kaki 柿 (persimmon) — energy.** Streaks, flames, high-energy CTAs, the "next goal." `--accent` = `--kaki-500` (#F15F2C).
- **Wakaba 若葉 (green) — growth.** Success, correctness, "you advanced." `--success` = `--wakaba-500`.
- **Kihada (gold)** = warnings / at-risk streaks / the **Power medallion**. **Beni 紅 (rose)** = errors / wrong answers.
- **Shu 朱 (vermillion) — the torii red.** Gates, boss encounters, and the RPG layer. `--torii` = `--shu-500` (#C93A1D), `--torii-deep` = `--shu-700`. Distinct from Kaki (warmer, energy) and Beni (pinker, errors): Shu marks **passage and challenge**.
- **Sumi 墨 (ink) — neutrals.** Text and surfaces, carrying a faint indigo cast so the light UI feels cohesive rather than cold-grey.
- **Tier scale** (`--tier-pre … --tier-n1`): the JLPT path. Each level owns a belt-style colour that **brightens then deepens** as the learner climbs — sky → green → gold → persimmon → rose → indigo (the N1 summit ties back to the brand). Used by `LevelBadge` and the path map.

Always reference **semantic aliases** (`--brand`, `--text-body`, `--surface-card`, `--success`…) in product, not raw ramp steps.

### Typography
- **Display & numerals — Space Grotesk** (`--font-display`, `--font-num`). Crisp, characterful, with great figures — perfect for headlines, level numbers, and XP/streak stats. Tracking tightened (`-0.02em`) on large sizes.
- **Body & UI — Plus Jakarta Sans** (`--font-body`). Warm, friendly, highly legible at small sizes.
- **Japanese display — Zen Maru Gothic** (`--font-jp-display`). Rounded, friendly gothic for big kana on lesson/study tiles.
- **Japanese body — Zen Kaku Gothic New** (`--font-jp`). Clean modern gothic for reading content; line-height 1.7 for comfort.
- ⚠️ **Font substitution flag:** all four are **Google Fonts**, loaded via CDN `@import` in `tokens/fonts.css` (no licensed binaries are bundled). They were chosen as strong defaults, not as matches to a pre-existing brand font. If Kotoba adopts a licensed display or Japanese face, replace the `@import`s with `@font-face` rules pointing at the binaries in `assets/`.

### Spacing & layout
4px base unit (`--space-1` = 4 … `--space-10` = 64). Mobile app canvas is **420px** (`--app-width`); screen gutter is `--space-5` (20px). Minimum tap target **48px** (`--tap-min`). Generous vertical rhythm — the UI breathes.

### Shape, borders & corners
Friendly, rounded, modern. Cards use `--radius-lg` (20px); primary buttons and chips are **fully rounded pills** (`--radius-pill`). Borders are hairline (`1–1.5px`) in `--border-subtle/-default`; brand-tinted borders appear on focus and selected states.

### Elevation & shadows
Soft, **indigo-tinted** shadows (not neutral grey) so the light UI stays airy: `--shadow-xs … --shadow-xl`. Focal/celebratory moments use **coloured glows** (`--glow-accent`, `--glow-brand`, `--glow-success`). Cards = subtle `--shadow-sm`, lifting to `--shadow-lg` on hover for interactive cards.

### The signature: tactile "press"
Primary buttons, lesson nodes, and study tiles sit on a **solid darker bottom edge** (`box-shadow: 0 4px 0 <edge>`). On `:active` they translate down by `--press-depth` and the edge collapses — a satisfying physical "click" that makes every interaction feel like a real step taken. This is Kotoba's most recognisable interaction motif. `ghost` variants opt out.

### Motion
Purposeful and a little springy. Default UI eases out calmly (`--ease-out`, ~220ms). **Rewards overshoot** — level-ups, correct answers, and the current-node pulse use `--ease-spring` (a gentle back/bounce). The current lesson node pulses an accent ring (1.8s loop) so the next step is always obvious. No infinite decorative loops on content; all entrance animation respects `prefers-reduced-motion`.

### States
- **Hover:** subtle `brightness(1.04)` on filled controls; surface-sunken fill on ghost/neutral; interactive cards lift `-3px`.
- **Press:** filled controls compress (translateY + edge collapse); icon buttons scale to `0.92`.
- **Focus:** 4px soft indigo ring (`--ring`), never removed.
- **Selected:** brand-soft fill + brand-tinted border.
- **Correct / wrong:** wakaba-soft / beni-soft fills with matching edge.

### Backgrounds & texture
Surfaces are clean and light (`--bg-canvas` = sumi-50, cards = white). The brand's one decorative texture is **seigaiha (青海波)** — the traditional concentric-wave pattern — used at low opacity over indigo surfaces (hero strips, celebration screens). Imagery, when used, should be **warm and bright** (natural light, real settings); avoid cold or heavily-filtered photography. No gradient-mesh backgrounds; the only gradients are the small fills inside XP bars.

---

## THE RPG LAYER — balanced, never blocking

Kotoba's edge over streak-only apps: learning is a journey with a **character, stats, quests, and optional bosses**. The rule is *balanced* — the RPG is a visible layer of motivation, but the learning UI stays calm, and **nothing RPG ever blocks the main path**.

- **The kotodama (言靈, "word spirit")** — the learner's companion, a pixel-art chibi spirit (`Companion`, 3 evolution stages: newborn → scarf traveler → gold-touched guardian). It floats beside the current lesson node, walks the map with you, fights beside you in boss battles, and evolves at Power thresholds. Pixel sprites are rendered **in code** from matrices (crisp SVG rects) — the visual language is friendly 12×13 pixel art using brand colors only. The default companion is named **Yūki (勇気, courage)**; companions are meant to become personalized per learner.
- **Stats — real skills, RPG-styled.** Four canonical stats: **Vocabulary 語彙 · Grammar 文法 · Listening 聴解 · Reading 読解** (`StatBar`), aggregated into one **Power level 言力** (`PowerLevel`, the gold 力 medallion). Stats grow from actual practice; Power gates optional boss challenges ("POWER 60+").
- **Quests** (`QuestCard`) — optional momentum goals woven into the path ("Learn 20 food words · +80 XP"). Rewards in gold chips. Never fear-based.
- **Bosses** (`BossNode`, the pixel **oni**) — optional encounters placed *beside* the path and in the challenge list. Defeating one is a quiz-battle: correct answers strike the oni (HP bar + shake), wrong answers cost a heart. Reward: XP + Power. Bosses are side-quests; the map never requires them.
- **Torii gates** (`ToriiGate`) — the marker of **passage**. Three roles: (1) **unit checkpoints** on the map — you walk through a vermillion torii when a unit is complete (locked/grey until then); (2) **grand JLPT tier gates** — a large torii with the level plaque ("N4") marks each tier-up; (3) **celebration moments** — victory screens hang a 勝 plaque. The gaku (hanging plaque) carries unit numerals (一, 二…) or tier labels.

---

## THE ADAPTIVE LAYER — the sensei

The "smart" differentiator: Kotoba *notices* and *adapts*. In UI this is one consistent voice — **the sensei** — expressed through:

- **`SenseiCard`** — an insight + a crafted action: *"You mix up ね and ぬ — I made a short set focused on the loop endings."* Always specific (what was noticed), kind (no shame), and actionable (one button, time-boxed: "Practice 2 min"). Japanese characters in sensei copy get white highlight chips (`.jp` spans).
- **`SenseiChip`** — a small sparkle chip ("Tuned for you") marking adaptively-generated lessons and sets.
- **`SkillRadar`** — the 4-axis skill radar; the dent shows the weakness, and the weakest vertex is automatically marked in torii red. Sensei points at the dent.
- **Writing for sensei:** first person is allowed here only ("I made a short set") — the sensei is a character, not the app. Insights name concrete confusions (ね/ぬ), cite real evidence ("from your last three sessions"), and time-box the fix. Future: full LLM conversations in Japanese — design them as chat with the sensei or with the kotodama.

---

## ICONOGRAPHY

- **System:** **Lucide** (rounded-line icons, ~2px stroke) — modern, friendly, and a clean match for the geometry of Space Grotesk + Plus Jakarta Sans. Loaded from CDN in cards/kits (`https://unpkg.com/lucide`); in production, install the `lucide-react` package.
- ⚠️ **Substitution flag:** Lucide is a chosen default, not an imported brand set. If Kotoba commissions a custom icon set, document it here and place SVGs in `assets/icons/`.
- **Built-in glyphs:** a few brand-critical icons are **inlined directly into components** so they always render without the icon library — the flame in `StreakCounter`, check / lock / star / crown / book in `LessonNode`, and the sparkle in `SenseiCard`. These use the Lucide visual language (stroke check, filled flame).
- **Pixel sprites:** the kotodama companion and the oni are **code-rendered pixel art** (12-wide matrices → crisp SVG rects via `PixelSprite`). New characters should follow the same language: 12–16px wide, dark outline (`#1F284F` family), brand-color fills, 1px features. Do not mix smooth vector mascots with pixel sprites.
- **Emoji:** not part of the icon system. The flame 🔥 may appear in plain-text/dense stat contexts only; everywhere else use the real components.
- **Unicode/CJK:** Japanese characters are *content*, set in the Zen fonts — never repurposed as UI icons.
- **Logo / mark:** original. `assets/kotoba-logo.svg` (lockup), `assets/kotoba-mark.svg` (app icon — three ascending stepping-stones, the top one persimmon = the goal in reach), `assets/kotoba-wordmark-white.svg` (reversed). The stone-trio is the core mark; the **seigaiha** tile (`assets/seigaiha.svg`) is the supporting texture.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter for use in Claude Code.

**`tokens/`** — design tokens (all `@import`ed by `styles.css`)
- `fonts.css` (Google Fonts) · `colors.css` · `typography.css` · `spacing.css` · `elevation.css` · `motion.css` · `base.css` (element defaults + helpers `.jp`, `.jp-display`, `.num`, `.eyebrow`).

**`assets/`** — `kotoba-logo.svg`, `kotoba-mark.svg`, `kotoba-wordmark-white.svg`, `seigaiha.svg`, `torii.svg` (static vermillion gate).

**`guidelines/`** — foundation specimen cards (Design System tab): Colours (Ai, Kaki, Wakaba, Sumi, Shu, Tier Path, Semantic), Type (Display, Body, Japanese, Scale), Spacing (Scale, Radii, Shadows), Brand (Logo, Motif).

**`components/`** — reusable React primitives (namespace `window.MichiDesignSystem_2b01f5`)
- `core/` — **Button**, **IconButton**, **Badge**, **Tag**, **Card**, **Avatar**
- `forms/` — **Input**
- `progress/` — **ProgressRing**, **StreakCounter**, **XPBar**, **LevelBadge**
- `learning/` — **LessonNode**, **KanaTile**
- `rpg/` — **Companion** (+ **PixelSprite**), **ToriiGate**, **StatBar**, **PowerLevel**, **QuestCard**, **BossNode** (+ **PixelOni**)
- `adaptive/` — **SenseiCard** (+ **SenseiChip**), **SkillRadar**

Each component dir has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML.

**`ui_kits/`** — full-screen product recreations
- `mobile_app/` — onboarding, home/path (with companion, torii checkpoint, boss encounter), lesson flow, boss battle, character sheet ("Spirit" tab), profile — in an iPhone frame; `index.html` is an interactive click-through.

---

## Using Kotoba

1. Link the tokens: `<link rel="stylesheet" href="styles.css">`.
2. Style with semantic CSS variables (`var(--brand)`, `var(--surface-card)`, `var(--text-body)`…).
3. Use components from `window.MichiDesignSystem_2b01f5` (load React UMD + `_ds_bundle.js`), or read each component's `.prompt.md` for usage.
4. Lean on the motifs: the **path** (progress), the **flame** (streak), the **tier ladder** (mastery), the **torii** (passage), the **kotodama** (growth made visible), and the **tactile press** (every interaction is a step).
