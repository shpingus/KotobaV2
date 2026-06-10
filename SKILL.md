---
name: kotoba-design
description: Use this skill to generate well-branded interfaces and assets for Kotoba (言葉), a Japanese-language learning app — for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, assets, and UI-kit components for prototyping a modern, progress-forward learning experience.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand:** Kotoba (言葉, "words / language"). Modern, encouraging, quietly Japanese. The throughline is **visible progress** — a stepping-stone path, daily streak flames, a JLPT tier ladder (Pre-N5 → N1), and a **balanced RPG layer**: a pixel kotodama companion that evolves with your skills, four real-skill stats + a Power level, optional quests and oni boss battles, and vermillion **torii gates** marking passage.
- **Adaptive layer:** "the sensei" — `SenseiCard` insights ("You mix up ね and ぬ — practice 2 min"), `SenseiChip` tuned-lesson markers, `SkillRadar` weakness radar. Specific, kind, actionable; sensei may say "I".
- **Tokens:** link `styles.css` (it `@import`s everything in `tokens/`). Style with semantic CSS variables — `var(--brand)` (Ai indigo), `var(--accent)` (Kaki persimmon), `var(--success)` (Wakaba green), `var(--text-body)`, `var(--surface-card)`, the `--tier-*` JLPT scale, etc.
- **Type:** Space Grotesk (display/numerals), Plus Jakarta Sans (body/UI), Zen Maru Gothic (Japanese display), Zen Kaku Gothic New (Japanese body) — all Google Fonts.
- **Components:** React primitives in `components/` (Button, IconButton, Badge, Tag, Card, Avatar, Input, ProgressRing, StreakCounter, XPBar, LevelBadge, LessonNode, KanaTile, Companion, ToriiGate, StatBar, PowerLevel, QuestCard, BossNode, SenseiCard, SkillRadar). Each has a `.prompt.md` with usage. The signature interaction is the **tactile 3-D press** on buttons / lesson nodes / tiles.
- **Icons:** Lucide (rounded-line). Brand-critical glyphs (flame, check, lock, crown) are inlined in components.
- **UI kit:** `ui_kits/mobile_app/` — interactive onboarding → path (companion + torii + boss) → lesson → boss battle → character sheet → profile, in an iPhone frame.
- **Assets:** `assets/` — logo lockup, app mark (ascending stepping-stones), reversed wordmark, seigaiha wave texture.

## How to consume the components

Load React UMD + the compiled bundle, then read components off the namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
<script src="_ds_bundle.js"></script>
<script>const { Button, LevelBadge, LessonNode } = window.MichiDesignSystem_2b01f5;</script>
```

> The runtime namespace is `window.MichiDesignSystem_2b01f5` — a fixed internal handle from the project's original working title. It is **not** brand-facing; the brand is **Kotoba**.

Voice: warm encouraging coach, "you"-centred, sentence case, calm-but-energetic, never fear-based. See `readme.md` → CONTENT FUNDAMENTALS.
