One character skill stat — kanji chip + label + bar + value. The four canonical Kotoba stats feed boss challenges and the aggregate Power level.

```jsx
<StatBar label="Vocabulary" jp="語彙" value={62} />
<StatBar label="Grammar" jp="文法" value={48} tone="accent" />
<StatBar label="Listening" jp="聴解" value={31} tone="torii" weak />
<StatBar label="Reading" jp="読解" value={55} tone="success" />
```

Props: `label`, `jp`, `value`, `max`, `tone` (brand/accent/success/gold/torii), `weak` (marks sensei-focus stat).
