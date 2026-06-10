Tactile pill button with a 3-D bottom edge that compresses on press — the satisfying "click" of forward progress. Use for any primary or secondary action.

```jsx
<Button variant="primary" size="lg" onClick={start}>Begin lesson</Button>
<Button variant="accent" icon={<i data-lucide="flame" />}>Keep streak</Button>
<Button variant="secondary">Maybe later</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (indigo, the path-forward action), `accent` (persimmon, energetic/streak CTAs), `success` (green), `secondary` (outlined), `ghost` (flat), `danger`. Sizes: `sm` / `md` / `lg`. Props: `fullWidth`, `icon`, `iconRight`, `as="a"`. The 3-D press is automatic; `ghost` has no edge.
