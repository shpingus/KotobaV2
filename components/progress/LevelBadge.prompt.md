JLPT tier marker (Pre-N5 → N1), each tier in its own belt-color, deepening toward the indigo N1 summit. Optionally shows progress within the tier.

```jsx
<LevelBadge tier="n5" />
<LevelBadge tier="n3" size="lg" progress={45} />
<LevelBadge tier="n1" soft size="sm" showCaption={false} />
```

Props: `tier` (pre/n5/n4/n3/n2/n1), `size` (sm/md/lg), `soft`, `showCaption`, `progress` (0–100).
