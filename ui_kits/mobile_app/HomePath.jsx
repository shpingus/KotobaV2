// Kotoba — Home / learning path (the signature screen)
// Exposes window.HomePath. Vertical winding stepping-stone path.

const HomePath = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const { StreakCounter, LevelBadge, LessonNode, Card, Badge, Button, Companion, ToriiGate, BossNode, QuestCard } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  // winding offsets (S-curve) in px
  const OFFSETS = [0, 64, 90, 64, 0, -64, -90, -64];

  const UNIT = {
    title: 'Hiragana basics',
    jp: 'ひらがな',
    n: 'Unit 1',
    lessons: [
      { state: 'mastered', label: 'あ い う', icon: 'star' },
      { state: 'complete', label: 'か き く' },
      { state: 'complete', label: 'さ し す' },
      { state: 'available', current: true, label: 'Greetings' },
      { state: 'locked', label: 'た ち つ' },
      { boss: true, label: 'Hiragana Oni' },
      { state: 'locked', label: 'Review' },
    ],
  };

  const UNIT2 = {
    title: 'First words',
    jp: 'はじめの言葉',
    n: 'Unit 2',
    lessons: [
      { state: 'locked', label: 'Numbers' },
      { state: 'locked', label: 'Family' },
      { state: 'locked', label: 'Food' },
    ],
  };

  function UnitBanner({ unit, tone }) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, margin: '8px 0 22px',
        padding: '16px 18px', borderRadius: 'var(--radius-lg)',
        background: tone === 'locked' ? 'var(--surface-sunken)' : 'var(--brand)',
        color: tone === 'locked' ? 'var(--text-muted)' : '#fff',
        boxShadow: tone === 'locked' ? 'none' : 'var(--shadow-md)',
        position: 'relative', overflow: 'hidden',
      }}>
        {tone !== 'locked' && <div style={{ position: 'absolute', inset: 0, opacity: 0.14, backgroundImage: 'url(../../assets/seigaiha.svg)', backgroundSize: 90 }} />}
        <div style={{ position: 'relative', flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.85 }}>{unit.n}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, marginTop: 2 }}>{unit.title}</div>
          <div className="jp-display" style={{ fontSize: 14, opacity: 0.85, marginTop: 1 }}>{unit.jp}</div>
        </div>
        {tone === 'locked'
          ? I('lock', { style: { width: 20, height: 20 } })
          : <span style={{ position: 'relative', display: 'inline-flex' }}>{I('book-open', { style: { width: 22, height: 22 } })}</span>}
      </div>
    );
  }

  function Path({ unit, onStart, onBoss }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        {unit.lessons.map((l, i) => (
          <div key={i} style={{ transform: `translateX(${OFFSETS[i % OFFSETS.length]}px)`, transition: 'transform .2s', position: 'relative' }}>
            {l.boss ? (
              <BossNode label={l.label} onClick={onBoss} />
            ) : (
              <LessonNode
                state={l.state}
                current={l.current}
                icon={l.icon || 'book'}
                size={l.current ? 'lg' : 'md'}
                label={l.label}
                onClick={l.current ? onStart : undefined}
              />
            )}
            {l.current && (
              <span style={{ position: 'absolute', left: -66, bottom: 26, pointerEvents: 'none' }}>
                <Companion stage={2} size={52} floating />
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return function HomePath({ onStartLesson, onBoss, onGate, onWordRain, unitDone = false, gatePassed = false, streak = 28, xp = 1240 }) {
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    const unit1 = unitDone
      ? { ...UNIT, lessons: UNIT.lessons.map((l) => (l.boss || l.state === 'mastered' ? l : { ...l, state: 'complete', current: false })) }
      : UNIT;
    const unit2 = gatePassed
      ? { ...UNIT2, lessons: UNIT2.lessons.map((l, i) => (i === 0 ? { ...l, state: 'available', current: true } : l)) }
      : UNIT2;
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-canvas)' }}>
        {/* sticky stat header */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          padding: '54px 20px 12px', background: 'rgba(247,248,251,0.86)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <LevelBadge tier="n5" size="sm" showCaption={false} />
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>Current level</div>
              <div style={{ fontFamily: 'var(--font-num)', fontWeight: 800, fontSize: 14, color: 'var(--text-strong)' }}>N5 · 60%</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-num)', fontWeight: 800, color: 'var(--brand)' }}>
              <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: '-0.01em', opacity: 0.7 }}>XP</span>{xp.toLocaleString()}
            </span>
            <StreakCounter days={streak} showLabel={false} />
          </div>
        </div>

        <div style={{ padding: '0 20px 28px' }}>
          {/* daily goal nudge */}
          <Card elevation="sm" style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '16px 0 10px' }}>
            <NS.ProgressRing value={unitDone ? 3 : 2} max={3} size={52} thickness={7} color="var(--accent)">
              <span style={{ fontSize: 13 }}>{unitDone ? '3/3' : '2/3'}</span>
            </NS.ProgressRing>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 15 }}>{unitDone ? 'Daily goal complete' : 'Daily goal — almost there'}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{unitDone ? 'Streak safe for today' : '1 more lesson to keep your streak'}</div>
            </div>
            <Badge tone="accent" solid size="sm">+20 XP</Badge>
          </Card>

          {/* active quest */}
          <QuestCard
            title="Defeat the Hiragana Oni"
            icon={I('swords')}
            value={0} max={1}
            reward="+150 XP"
            subtitle="Boss challenge · waiting on the path"
            style={{ marginBottom: 10 }}
          />

          {/* daily timed challenge — word rain */}
          <button onClick={onWordRain} style={{
            display: 'flex', alignItems: 'center', gap: 14, width: '100%', textAlign: 'left',
            padding: '14px 16px', marginBottom: 4, borderRadius: 'var(--radius-lg)', cursor: 'pointer',
            background: 'var(--surface-card)', border: '1.5px solid var(--border-default)',
            boxShadow: '0 3px 0 var(--sumi-200)', fontFamily: 'var(--font-body)',
          }}>
            <span style={{
              width: 44, height: 44, borderRadius: 'var(--radius-md)', flex: 'none',
              background: 'var(--brand)', color: '#fff',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>{I('cloud-rain', { style: { width: 22, height: 22 } })}</span>
            <span style={{ flex: 1 }}>
              <span style={{ display: 'block', fontWeight: 800, fontSize: 15, color: 'var(--text-strong)' }}>Word rain <span className="jp-display" style={{ fontWeight: 500, fontSize: 13, color: 'var(--text-muted)' }}>言葉の雨</span></span>
              <span style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', marginTop: 1 }}>Timed challenge · type readings before they land</span>
            </span>
            <Badge tone="accent" size="sm">up to +126 XP</Badge>
          </button>

          <UnitBanner unit={UNIT} />
          <Path unit={unit1} onStart={onStartLesson} onBoss={onBoss} />

          {/* torii checkpoint into the next unit */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, margin: '30px 0 8px' }}>
            {gatePassed ? (
              <ToriiGate size={104} state="passed" plaque="二" caption="Unit 2 · gate passed" />
            ) : unitDone ? (
              <>
                <ToriiGate size={104} state="open" plaque="二" caption="Unit 1 complete — the gate is open" />
                <Button size="sm" variant="accent" onClick={onGate}>Pass through the gate</Button>
              </>
            ) : (
              <ToriiGate size={104} state="locked" plaque="二" caption="Unit 2 · finish Unit 1 to pass through" />
            )}
          </div>
          <UnitBanner unit={UNIT2} tone={gatePassed ? undefined : 'locked'} />
          <Path unit={unit2} onStart={onStartLesson} />
        </div>
      </div>
    );
  };
})();

Object.assign(window, { HomePath });
