import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Profile shows learner totals, tier progress, streaks, and local settings.
public struct ProfileView: View {
    private let state: LearnerState
    private let onClose: () -> Void

    public init(state: LearnerState, onClose: @escaping () -> Void) {
        self.state = state
        self.onClose = onClose
    }

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space6) {
                header
                summaryCard
                streakCard
                tierLadder
                stats
                settings
            }
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack {
            Text("Profile")
                .font(KotobaFont.display(.text3xl, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            Spacer()
            KotobaIconButton("xmark", label: "Close", variant: .ghost, action: onClose)
        }
    }

    private var summaryCard: some View {
        KotobaCard {
            HStack(spacing: KotobaSpacing.space4) {
                KotobaAvatar(name: "Aiko Tanaka", size: .lg, ringPercent: 70)
                VStack(alignment: .leading, spacing: 4) {
                    Text("\(state.totalXP) XP")
                        .font(KotobaFont.numeric(.text3xl, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                    Text(lessonsCompleteText)
                        .font(KotobaFont.body(.textSm))
                        .foregroundStyle(KotobaColor.textMuted)
                }
                Spacer()
            }
        }
    }

    private var streakCard: some View {
        KotobaCard {
            HStack(spacing: KotobaSpacing.space4) {
                KotobaStreakCounter(days: StreakCalculator.streak(sessions: state.sessionDays), size: .lg)
                VStack(alignment: .leading, spacing: 4) {
                    Text("Streak history")
                        .font(KotobaFont.body(.textMd, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                    Text("Keep today light: one lesson is enough.")
                        .font(KotobaFont.body(.textSm))
                        .foregroundStyle(KotobaColor.textMuted)
                }
            }
        }
    }

    private var tierLadder: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Tier ladder")
            KotobaCard {
                HStack(spacing: KotobaSpacing.space3) {
                    ForEach(Array(KotobaTier.allCases.enumerated()), id: \.offset) { _, tier in
                        KotobaLevelBadge(tier: tier, size: .sm, soft: tier != .n5, showCaption: false, progress: tier == .n5 ? 33 : nil)
                    }
                }
            }
        }
    }

    private var stats: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Skill stats")
            ForEach(SkillStat.allCases, id: \.rawValue) { stat in
                KotobaStatBar(label: stat.label, jp: stat.jp, value: Double(state.statScores[stat, default: 0]), tone: stat.tone)
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

    private var lessonsCompleteText: String {
        let count = state.completedLessonIDs.count
        return count == 1 ? "1 lesson complete" : "\(count) lessons complete"
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
