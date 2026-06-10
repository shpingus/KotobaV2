// Kotoba — Character sheet (the kotodama: stats, power, radar, quests, challenges)
// Exposes window.CharacterSheet.

const CharacterSheet = (function () {
  const NS = window.MichiDesignSystem_2b01f5;
  const { Companion, PowerLevel, StatBar, SkillRadar, QuestCard, BossNode, SenseiCard, Card, Badge, Button } = NS;
  const I = (n, props = {}) => React.createElement('i', { 'data-lucide': n, ...props });

  const STATS = [
    { label: 'Vocabulary', jp: '語彙', value: 62, tone: 'brand' },
    { label: 'Grammar', jp: '文法', value: 48, tone: 'accent' },
    { label: 'Listening', jp: '聴解', value: 31, tone: 'torii', weak: true },
    { label: 'Reading', jp: '読解', value: 55, tone: 'success' },
  ];

  return function CharacterSheet({ onStartPractice, onBoss }) {
    React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
    return (
      <div style={{ minHeight: '100%', background: 'var(--bg-canvas)' }}>
        {/* hero */}
        <div style={{
          position: 'relative', overflow: 'hidden', background: 'var(--ai-700)',
          padding: '64px 20px 24px', textAlign: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.13, backgroundImage: 'url(../../assets/seigaiha.svg)', backgroundSize: 110 }} />
          <div style={{ position: 'relative' }}>
            <Companion stage={2} size={104} floating />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: '#fff', marginTop: 10 }}>Yūki <span className="jp-display" style={{ fontSize: 19, opacity: 0.8 }}>勇気</span></div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>Your kotodama · Stage 2 — Scarf Traveler</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
              <Badge tone="neutral" size="sm" style={{ background: 'rgba(255,255,255,0.16)', color: '#fff' }}>Evolves at Power 60</Badge>
            </div>
          </div>
        </div>

        <div style={{ padding: '18px 20px 28px' }}>
          {/* power + stats */}
          <Card style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <PowerLevel value={49} label="Word power 言力" />
              <Badge tone="brand" size="sm">+2 this week</Badge>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {STATS.map((s) => <StatBar key={s.label} {...s} />)}
            </div>
          </Card>

          {/* sensei's read */}
          <Card style={{ marginBottom: 14, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ alignSelf: 'flex-start', fontWeight: 700, color: 'var(--text-strong)', fontSize: 16, marginBottom: 4 }}>Sensei's read</div>
            <SkillRadar size={196} stats={STATS} />
            <SenseiCard
              style={{ marginTop: 6 }}
              title="Listening is your opening"
              actions={<Button size="sm" variant="accent" onClick={onStartPractice}>Train listening · 3 min</Button>}
            >
              Audio drills will raise it fastest — and unlock the Grammar Oni gate.
            </SenseiCard>
          </Card>

          {/* quests */}
          <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16, margin: '4px 0 10px' }}>Active quests</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            <QuestCard title="Learn 20 food words" icon={I('utensils')} value={13} max={20} reward="+80 XP" />
            <QuestCard title="Keep a 30-day streak" icon={I('flame')} value={28} max={30} reward="+200 XP" />
          </div>

          {/* challenges */}
          <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 16, margin: '4px 0 14px' }}>Boss challenges</div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', paddingBottom: 6 }}>
            <BossNode state="defeated" size="sm" label="Kana Kappa" />
            <BossNode label="Hiragana Oni" onClick={onBoss} />
            <BossNode state="locked" size="sm" flag="POWER 60+" label="Grammar Oni" />
          </div>
        </div>
      </div>
    );
  };
})();

Object.assign(window, { CharacterSheet });
