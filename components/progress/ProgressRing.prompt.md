Circular SVG progress ring with free-form center content — daily goals, lesson-set completion, review counts.

```jsx
<ProgressRing value={3} max={5} size={72}><span>3/5</span></ProgressRing>
<ProgressRing value={80} color="var(--accent)" size={120} thickness={12}>
  <span style={{fontSize:28}}>80%</span>
</ProgressRing>
```

Props: `value`, `max`, `size`, `thickness`, `color`, `track`, `rounded`. The center renders whatever you pass as children.
