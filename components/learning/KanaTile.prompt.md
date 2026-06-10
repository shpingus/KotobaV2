Character study/answer tile — a big kana or kanji with optional reading and meaning. Tactile by default; supports quiz states.

```jsx
<KanaTile glyph="あ" reading="a" />
<KanaTile glyph="水" reading="mizu" meaning="water" size="lg" />
<KanaTile glyph="き" reading="ki" state="correct" />
<KanaTile glyph="ね" reading="ne" state="wrong" />
```

Props: `glyph`, `reading`, `meaning`, `size` (sm/md/lg), `state` (default/selected/correct/wrong), `interactive`, `as`.
