---
name: kotoba-idle-spritemap
description: Build deterministic idle-animation spritemaps for Kotoba pixel sprites. Use when creating, regenerating, or reviewing Swift sprite-frame maps for the kotodama companion, especially changes involving hover, blink, scarf, gold-tip, or other design-system pixel animation states.
---

# Kotoba Idle Spritemap

## Workflow

1. Read the project `SKILL.md` and `readme.md` for current Kotoba pixel-sprite rules.
2. Edit `scripts/build_idle_spritemap.py` when frame recipes or base sprite matrices need to change.
3. Run:

```bash
python3 skills/kotoba-idle-spritemap/scripts/build_idle_spritemap.py
```

4. Review the generated Swift file:

```text
Packages/KotobaDesignSystem/Sources/KotobaDesignSystem/Components/RPG/KotobaCompanionIdleSpritemap.swift
```

5. Run the relevant Swift package tests after regeneration.

## Rules

- Keep sprites matrix-rendered; do not introduce bitmap assets for the companion.
- Use only the existing companion palette symbols: `O B L W K S D G R` and `.` for transparency.
- Preserve the 12-column, 13-row companion footprint unless the renderer and tests are intentionally updated.
- Keep idle motion subtle: hover, blink, tiny scarf or gold-tip shifts. Avoid combat, celebration, or walking states in this idle spritemap.
- Respect reduced-motion behavior in the Swift view that consumes the spritemap.

## Script

`scripts/build_idle_spritemap.py` validates frame geometry and palette symbols, then writes the Swift spritemap source. Use `--check` in CI or review to confirm the generated file is current without modifying it.
