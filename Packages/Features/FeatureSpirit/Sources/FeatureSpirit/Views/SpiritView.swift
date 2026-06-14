import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Combined companion, profile stats, and settings screen.
public struct SpiritView: View {
    private let state: LearnerState

    public init(state: LearnerState) {
        self.state = state
    }

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space6) {
                header
                companionCard
                learnerStats
                tierLadder
                skillStats
                settings
            }
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space1) {
            Text("Spirit")
                .font(KotobaFont.display(.text3xl, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            Text("Yuki, progress stats, and settings in one place.")
                .font(KotobaFont.body(.textSm))
                .foregroundStyle(KotobaColor.textMuted)
        }
    }

    private var companionCard: some View {
        KotobaCard(tone: .brand) {
            VStack(alignment: .leading, spacing: KotobaSpacing.space5) {
                HStack(spacing: KotobaSpacing.space5) {
                    KotobaCompanion(stage: stage, size: 112, floating: true)
                    VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
                        KotobaBadge(stageLabel, tone: .gold, solid: true)
                        KotobaPowerLevel(value: PowerAggregator.power(from: state.statScores), size: .md, label: "Word power")
                    }
                    Spacer(minLength: 0)
                }

                KotobaXPBar(
                    value: Double(levelProgress.currentLevelXP),
                    max: Double(levelProgress.nextLevelXP),
                    level: levelProgress.level,
                    tone: .accent
                )
            }
        }
    }

    private var learnerStats: some View {
        LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: KotobaSpacing.space3), count: 3), spacing: KotobaSpacing.space3) {
            SpiritMetricTile(title: "Lessons", value: "\(state.completedLessonIDs.count)", subtitle: "Complete")
            SpiritMetricTile(title: "Streak", value: "\(streak)", subtitle: streak == 1 ? "Day" : "Days")
            SpiritMetricTile(title: "Bosses", value: "\(state.defeatedBossIDs.count)", subtitle: "Defeated")
        }
    }

    private var tierLadder: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Tier")
            KotobaCard {
                HStack(spacing: KotobaSpacing.space3) {
                    ForEach(Array(KotobaTier.allCases.enumerated()), id: \.offset) { _, tier in
                        KotobaLevelBadge(tier: tier, size: .sm, soft: tier != .n5, showCaption: false)
                    }
                }
            }
        }
    }

    private var skillStats: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Skill stats")
            KotobaCard {
                VStack(spacing: KotobaSpacing.space5) {
                    ForEach(SkillStat.allCases, id: \.rawValue) { stat in
                        KotobaStatBar(
                            label: stat.label,
                            jp: stat.jp,
                            value: Double(state.statScores[stat, default: 0]),
                            tone: stat.tone,
                            weak: stat == weakestStat
                        )
                    }
                }
            }
        }
    }

    private var settings: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Settings")
            KotobaCard {
                VStack(spacing: KotobaSpacing.space4) {
                    settingRow("Romaji support", value: "On for new words", systemImage: "textformat")
                    settingRow("Daily reminder", value: "Evening", systemImage: "bell.fill")
                    settingRow("Audio playback", value: "Normal speed", systemImage: "speaker.wave.2.fill")
                }
            }
        }
    }

    private func sectionTitle(_ text: String) -> some View {
        Text(text)
            .font(KotobaFont.display(.textLg, weight: .bold))
            .foregroundStyle(KotobaColor.textStrong)
    }

    private func settingRow(_ title: String, value: String, systemImage: String) -> some View {
        HStack(spacing: KotobaSpacing.space3) {
            Image(systemName: systemImage)
                .font(.system(size: 16, weight: .bold))
                .foregroundStyle(KotobaColor.brand)
                .frame(width: 34, height: 34)
                .background(KotobaColor.brandSoft)
                .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))
            Text(title)
                .font(KotobaFont.body(.textSm, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            Spacer()
            Text(value)
                .font(KotobaFont.body(.textXs, weight: .semibold))
                .foregroundStyle(KotobaColor.textMuted)
        }
    }

    private var stage: KotobaCompanionStage {
        state.totalXP >= 120 ? .guardian : state.totalXP >= 40 ? .traveler : .newborn
    }

    private var stageLabel: String {
        switch stage {
        case .newborn: "Newborn kotodama"
        case .traveler: "Traveler kotodama"
        case .guardian: "Guardian kotodama"
        }
    }

    private var levelProgress: LevelProgress {
        XPLeveling.level(for: state.totalXP)
    }

    private var streak: Int {
        StreakCalculator.streak(sessions: state.sessionDays)
    }

    private var weakestStat: SkillStat {
        SkillStat.allCases.min { lhs, rhs in
            state.statScores[lhs, default: 0] < state.statScores[rhs, default: 0]
        } ?? .vocabulary
    }
}

private struct SpiritMetricTile: View {
    let title: String
    let value: String
    let subtitle: String

    var body: some View {
        KotobaCard(pad: .sm, elevation: .flat) {
            VStack(alignment: .leading, spacing: KotobaSpacing.space1) {
                Text(title)
                    .font(KotobaFont.body(.text3xs, weight: .bold))
                    .foregroundStyle(KotobaColor.textMuted)
                Text(value)
                    .font(KotobaFont.numeric(.text2xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text(subtitle)
                    .font(KotobaFont.body(.text3xs, weight: .semibold))
                    .foregroundStyle(KotobaColor.textMuted)
                    .lineLimit(1)
                    .minimumScaleFactor(0.8)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
    }
}

private extension SkillStat {
    var label: String {
        switch self {
        case .vocabulary: "Vocabulary"
        case .grammar: "Grammar"
        case .listening: "Listening"
        case .reading: "Reading"
        }
    }

    var jp: String {
        switch self {
        case .vocabulary: "語彙"
        case .grammar: "文法"
        case .listening: "聴解"
        case .reading: "読解"
        }
    }

    var tone: KotobaComponentTone {
        switch self {
        case .vocabulary: .brand
        case .grammar: .accent
        case .listening: .torii
        case .reading: .success
        }
    }
}
