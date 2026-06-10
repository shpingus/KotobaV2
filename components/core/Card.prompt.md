Base surface container — soft indigo-tinted shadow, 20px radius. Pass `interactive` for a hover-lift on tappable cards.

```jsx
<Card>Plain surface</Card>
<Card interactive elevation="md" onClick={open}>Tap me</Card>
<Card tone="brand" pad="lg">Highlighted</Card>
```

Props: `pad` (none/sm/md/lg), `elevation` (flat/sm/md/lg), `tone` (default/brand/inverse), `interactive`, `as`.
