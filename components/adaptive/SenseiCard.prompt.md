The adaptive-learning voice — sensei notices a pattern and offers a crafted practice set. This is the LLM layer's UI surface: specific, kind, actionable.

```jsx
<SenseiCard
  title={<>You mix up <span className="jp">ね</span> and <span className="jp">ぬ</span></>}
  actions={<Button size="sm" variant="accent">Practice 2 min</Button>}
>
  I made a short set focused on the loop endings — 8 cards.
</SenseiCard>

<SenseiChip />                     // "Tuned for you" sparkle chip
<SenseiChip>Crafted from your mistakes</SenseiChip>
```

Props: `eyebrow`, `title`, `children` (wrap Japanese in `<span className="jp">` for highlight chips), `actions`. Also exports `SenseiChip` for marking tuned lessons.
