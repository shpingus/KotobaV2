import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Character sheet for companion growth, power, stats, and lightweight quests.
public struct SpiritView: View {
    private let state: LearnerState
    private let onStartPractice: () -> Void
    private let onStartBoss: () -> Void

    public init(
        state: LearnerState,
        onStartPractice: @escaping () -> Void,
        onStartBoss: @escaping () -> Void
    ) {
        self.state = state
        self.onStartPractice = onStartPractice
        self.onStartBoss = onStartBoss
    }

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space6) {
                header
                companion
                actions
                stats
                quests
            }
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text("Spirit")
                    .font(KotobaFont.display(.text3xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text("Yuki grows with your steady practice.")
                    .font(KotobaFont.body(.textSm))
                    .foregroundStyle(KotobaColor.textMuted)
            }
        }
    }

    private var companion: some View {
        KotobaCard(tone: .brand) {
            HStack(spacing: KotobaSpacing.space5) {
                KotobaCompanion(stage: stage, size: 118, floating: true)
                VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
                    KotobaPowerLevel(value: PowerAggregator.power(from: state.statScores), size: .lg, label: "Word power")
                    KotobaBadge(stageLabel, tone: .gold, solid: true)
                }
            }
        }
    }

    private var actions: some View {
        HStack(spacing: KotobaSpacing.space3) {
            KotobaButton(variant: .accent, fullWidth: true, action: onStartPractice) {
                Label("Practice now", systemImage: "sparkles")
            }
            KotobaButton(variant: .secondary, fullWidth: true, action: onStartBoss) {
                Label("Boss battle", systemImage: "flame.fill")
            }
        }
    }

    private var stats: some View {
        KotobaCard {
            VStack(spacing: KotobaSpacing.space5) {
                KotobaSkillRadar(stats: radarStats, size: 190)
                ForEach(radarStats, id: \.label) { stat in
                    KotobaStatBar(label: stat.label, jp: stat.jp, value: stat.value, weak: stat.label == weakestLabel)
                }
            }
        }
    }

    private var quests: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            Text("Quests")
                .font(KotobaFont.display(.textLg, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            KotobaQuestCard(title: "Finish two lessons", subtitle: "Small steps count.", value: Double(state.completedLessonIDs.count), max: 2, reward: "+20 XP", done: state.completedLessonIDs.count >= 2)
            KotobaQuestCard(title: "Win one boss battle", subtitle: "Optional, never blocking.", value: Double(state.defeatedBossIDs.count), max: 1, reward: "+30 XP", done: !state.defeatedBossIDs.isEmpty, systemImage: "flame.fill")
        }
    }

    private var radarStats: [KotobaSkillRadarStat] {
        [
            .init(label: "Vocabulary", jp: "語彙", value: value(.vocabulary)),
            .init(label: "Grammar", jp: "文法", value: value(.grammar)),
            .init(label: "Listening", jp: "聴解", value: value(.listening)),
            .init(label: "Reading", jp: "読解", value: value(.reading))
        ]
    }

    private var weakestLabel: String {
        radarStats.min { $0.value < $1.value }?.label ?? "Vocabulary"
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

    private func value(_ stat: SkillStat) -> Double {
        Double(state.statScores[stat, default: 0])
    }
}
