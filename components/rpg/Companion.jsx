import React from 'react';

/**
 * Kotoba Companion — the learner's kotodama (言霊, "word spirit"), a pixel-art
 * chibi companion that walks the path with you and evolves as your Japanese
 * grows. Rendered from pixel matrices as crisp SVG — no image assets needed.
 * Stage 1: newborn spirit · Stage 2: persimmon scarf traveler · Stage 3: gold-touched guardian.
 */

const PALETTE = {
  O: '#1F284F', // outline · ai-900
  B: '#4F61BE', // body · ai-500
  L: '#94A2DF', // body highlight · ai-300
  W: '#FFFFFF', // eye white
  K: '#171A24', // pupil
  S: '#F15F2C', // scarf · kaki-500
  D: '#D94A1C', // scarf shade · kaki-600
  G: '#ECBC49', // gold · kihada-300
  R: '#FFC2A8', // blush · kaki-200
};

// 12 columns wide. '.' = transparent.
const STAGE_1 = [
  '....OOOO....',
  '..OOBBBBOO..',
  '.OBBLBLBBBO.',
  '.OBBBBBBBBO.',
  '.OBWWBBWWBO.',
  '.OBWKBBWKBO.',
  'OBRBBOOBBRBO',
  'OBBBBBBBBBBO',
  '.OBBBBBBBBO.',
  '.OBBBBBBBBO.',
  '..OBBOOBBO..',
  '...OBO.OBO..',
  '....O...O...',
];

const STAGE_2 = [
  '....OOOO....',
  '..OOBBBBOO..',
  '.OBBLBLBBBO.',
  '.OBBBBBBBBO.',
  '.OBWWBBWWBO.',
  '.OBWKBBWKBO.',
  'OBBBBOOBBBBO',
  'OBBBBBBBBBBO',
  '.OSSSSSSSSO.',
  '.OSSDDDDSSO.',
  '..OBBOOBSSO.',
  '...OBO.OSO..',
  '....O...O...',
];

const STAGE_3 = [
  '.G..OOOO..G.',
  '..OOBBBBOO..',
  '.OBBLBLBBBO.',
  '.OGGGGGGGGO.',
  '.OBWWBBWWBO.',
  '.OBWKBBWKBO.',
  'OBBBBOOBBBBO',
  'OBBBBBBBBBBO',
  '.OSSSSSSSSO.',
  '.OSSDDDDSSO.',
  'G.OBBOOBSSO.',
  '...OBO.OSO..',
  '....O...O...',
];

const STAGES = { 1: STAGE_1, 2: STAGE_2, 3: STAGE_3 };

const CSS = `
.kotoba-companion{ display:inline-flex; }
.kotoba-companion[data-floating="true"]{ animation:kotoba-companion-float 2.6s ease-in-out infinite; }
@keyframes kotoba-companion-float{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-7%); }
}
@media (prefers-reduced-motion: reduce){
  .kotoba-companion[data-floating="true"]{ animation:none; }
}
`;

function useInjected(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement('style');
    el.id = id; el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

/** Renders any pixel matrix as crisp SVG. Shared by Companion and BossNode. */
export function PixelSprite({ matrix, palette = PALETTE, size = 72, className = '', style, ...rest }) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rects = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = matrix[y][x];
      if (c === '.' || !palette[c]) continue;
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={palette[c]} />);
    }
  }
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      width={size}
      height={(size * rows) / cols}
      shapeRendering="crispEdges"
      className={className}
      style={{ imageRendering: 'pixelated', ...style }}
      aria-hidden="true"
      {...rest}
    >
      {rects}
    </svg>
  );
}

export function Companion({
  stage = 1,
  size = 72,
  floating = false,
  className = '',
  ...rest
}) {
  useInjected('kotoba-companion-css', CSS);
  const matrix = STAGES[stage] || STAGE_1;
  return (
    <span className={`kotoba-companion ${className}`} data-floating={floating || undefined} {...rest}>
      <PixelSprite matrix={matrix} size={size} />
    </span>
  );
}
