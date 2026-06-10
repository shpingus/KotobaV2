An optional boss encounter node — a pixel oni guarding bonus rewards, placed on or near the path. Bosses are side-quests and never block the main path.

```jsx
<BossNode label="Hiragana Oni" onClick={openBattle} />
<BossNode state="defeated" label="Kana Kappa" size="sm" />
<BossNode state="locked" label="Grammar Oni" flag="POWER 40+" />
```

States: `available` / `locked` (greyed, disabled) / `defeated` (green, "CLEAR"). Props: `size`, `label`, `flag`.
