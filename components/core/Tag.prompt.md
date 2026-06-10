Chip for topics, categories, and filters. Selectable (toggle) and/or removable.

```jsx
<Tag>Hiragana</Tag>
<Tag selected onClick={toggle}>Verbs</Tag>
<Tag onRemove={() => remove(id)}>Food vocab</Tag>
```

Props: `selected`, `onClick` (makes it clickable), `onRemove` (shows ×), `icon`.
