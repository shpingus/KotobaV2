import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Profile renders learner totals and settings-adjacent progress.
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
                HStack {
                    Text("Profile")
                        .font(KotobaFont.display(.text2xl, weight: .bold))
                    Spacer()
                    KotobaIconButton("xmark", label: "Close", variant: .ghost, action: onClose)
                }
                KotobaCard {
                    HStack(spacing: KotobaSpacing.space4) {
                        KotobaAvatar(name: "Aiko Tanaka", size: .lg, ringPercent: 70)
                        VStack(alignment: .leading) {
                            Text("\(state.totalXP) XP")
                                .font(KotobaFont.numeric(.text2xl, weight: .bold))
                            Text("\(state.completedLessonIDs.count) lessons complete")
                                .font(KotobaFont.body(.textSm))
                                .foregroundStyle(KotobaColor.textMuted)
                        }
                    }
                }
                ForEach(SkillStat.allCases, id: \.rawValue) { stat in
                    KotobaStatBar(label: stat.label, jp: stat.jp, value: Double(state.statScores[stat, default: 0]), tone: stat.tone)
                }
            }
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
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
