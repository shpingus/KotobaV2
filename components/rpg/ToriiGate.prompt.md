The vermillion torii gate — Kotoba's marker of passage. Use as unit checkpoints on the path map, grand JLPT tier gates (plaque = "N4"), and in celebrations/empty states.

```jsx
<ToriiGate size={96} plaque="二" caption="Unit 2" />
<ToriiGate size={150} plaque="N4" state="locked" caption="Finish N5 to pass" />
<ToriiGate state="passed" plaque="一" />
```

States: `open` (vermillion), `locked` (greyed), `passed` (green seal). Props: `size`, `plaque`, `caption`.
