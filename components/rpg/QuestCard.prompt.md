A quest card — goal, progress bar, and reward chip. Quests are optional momentum-builders woven into the path, never fear-based.

```jsx
<QuestCard title="Learn 20 food words" icon={<i data-lucide="utensils" />} value={13} max={20} reward="+80 XP" />
<QuestCard title="Defeat the Hiragana Oni" icon={<i data-lucide="swords" />} value={0} max={1} reward="+150 XP" subtitle="Boss challenge · optional" />
<QuestCard title="7-day streak" icon={<i data-lucide="flame" />} done reward="Claimed" />
```

Props: `title`, `icon`, `value`, `max`, `reward`, `subtitle`, `done`.
