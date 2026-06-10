Labelled text field with helper/error states and an optional leading icon. Indigo focus ring; calm by default.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" required />
<Input label="Display name" icon={<i data-lucide="user" />} helperText="Shown on your profile" />
<Input label="Password" type="password" error="At least 8 characters" />
```

Props: `label`, `helperText`, `error`, `icon`, `required` + all native input props.
