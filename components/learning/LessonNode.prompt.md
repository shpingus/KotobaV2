A stepping-stone node on the learning path — tactile circular button with locked / available / current / complete / mastered states. The current node pulses with a START bubble.

```jsx
<LessonNode state="complete" label="Hiragana" />
<LessonNode state="available" current label="Greetings" />
<LessonNode state="locked" label="Particles" />
<LessonNode state="mastered" label="Numbers" />
```

Props: `state`, `icon` (book/star), `size` (sm/md/lg), `current`, `label`, `startLabel`. Locked nodes are disabled automatically; complete shows a check, mastered a crown.
