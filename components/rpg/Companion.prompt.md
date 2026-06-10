The learner's kotodama (言霊 — "word spirit"): a pixel-art chibi companion that walks the learning path and evolves as the learner's Japanese grows. Rendered as crisp SVG from pixel matrices — no image assets.

```jsx
<Companion stage={1} size={56} />
<Companion stage={2} size={96} floating />   // floating idle bob
<Companion stage={3} size={120} />
```

Stages: 1 newborn spirit · 2 persimmon-scarf traveler · 3 gold-touched guardian. Props: `stage`, `size`, `floating`. Also exports `PixelSprite` (`matrix`, `palette`, `size`) for custom sprites like bosses.
