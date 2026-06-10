import React from 'react';

/**
 * Kotoba KanaTile — a character study/answer tile. Big kana or kanji with
 * optional reading (romaji/furigana) and meaning. Used in lessons, review
 * grids, and multiple-choice answers (with selected/correct/wrong states).
 */

const CSS = `
.kotoba-tile{
  display:inline-flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;
  min-width:84px; padding:16px 18px; border-radius:var(--radius-lg); cursor:pointer;
  background:var(--surface-card); border:var(--border-base) solid var(--border-default);
  box-shadow:0 4px 0 var(--sumi-200);
  transition:transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), border-color var(--dur-fast), background var(--dur-fast);
  -webkit-tap-highlight-color:transparent; text-align:center;
}
.kotoba-tile:hover{ border-color:var(--border-brand); }
.kotoba-tile:active{ transform:translateY(4px); box-shadow:0 0 0 var(--sumi-200); }
.kotoba-tile:focus-visible{ outline:none; box-shadow:0 4px 0 var(--sumi-200), var(--ring); }
.kotoba-tile[data-static="true"]{ cursor:default; }
.kotoba-tile[data-static="true"]:hover{ border-color:var(--border-default); }
.kotoba-tile[data-static="true"]:active{ transform:none; box-shadow:0 4px 0 var(--sumi-200); }

.kotoba-tile .glyph{ font-family:var(--font-jp-display); font-weight:700; color:var(--text-strong); line-height:1; }
.kotoba-tile .reading{ font-family:var(--font-num); font-weight:600; font-size:var(--text-sm); color:var(--brand-strong); }
.kotoba-tile .meaning{ font-family:var(--font-body); font-size:var(--text-xs); color:var(--text-muted); }
.kotoba-tile[data-size="sm"] .glyph{ font-size:30px; }
.kotoba-tile[data-size="md"] .glyph{ font-size:44px; }
.kotoba-tile[data-size="lg"] .glyph{ font-size:64px; }

.kotoba-tile[data-state="selected"]{ background:var(--brand-soft); border-color:var(--ai-300); box-shadow:0 4px 0 var(--ai-200); }
.kotoba-tile[data-state="correct"]{ background:var(--success-soft); border-color:var(--wakaba-400); box-shadow:0 4px 0 var(--wakaba-200); }
.kotoba-tile[data-state="correct"] .reading{ color:var(--wakaba-700); }
.kotoba-tile[data-state="wrong"]{ background:var(--danger-soft); border-color:var(--beni-300); box-shadow:0 4px 0 var(--beni-200); }
.kotoba-tile[data-state="wrong"] .glyph{ color:var(--beni-700); }
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

export function KanaTile({
  glyph,
  reading,
  meaning,
  size = 'md',
  state = 'default',
  interactive = true,
  as,
  className = '',
  ...rest
}) {
  useInjected('kotoba-tile-css', CSS);
  const Tag = as || (interactive ? 'button' : 'div');
  return (
    <Tag
      className={`kotoba-tile ${className}`}
      data-size={size}
      data-state={state === 'default' ? undefined : state}
      data-static={!interactive || undefined}
      {...rest}
    >
      <span className="glyph jp-display">{glyph}</span>
      {reading && <span className="reading">{reading}</span>}
      {meaning && <span className="meaning">{meaning}</span>}
    </Tag>
  );
}
