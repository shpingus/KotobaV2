import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Signature path screen; it renders state and sends navigation intents upward.
public struct PathHomeView: View {
    private let pack: LanguagePack
    private let state: LearnerState
    private let senseiInsight: SenseiInsight?
    private let onStartLesson: (Lesson) -> Void
    private let onStartBoss: () -> Void
    private let onShowGate: () -> Void

    public init(
        pack: LanguagePack,
        state: LearnerState,
        senseiInsight: SenseiInsight? = nil,
        onStartLesson: @escaping (Lesson) -> Void,
        onStartBoss: @escaping () -> Void,
        onShowGate: @escaping () -> Void
    ) {
        self.pack = pack
        self.state = state
        self.senseiInsight = senseiInsight
        self.onStartLesson = onStartLesson
        self.onStartBoss = onStartBoss
        self.onShowGate = onShowGate
    }

    public var body: some View {
        VStack(spacing: 0) {
            header
            ScrollView {
                VStack(alignment: .leading, spacing: KotobaSpacing.space5) {
                    PathDailyGoalCard(
                        completed: state.completedLessonIDs.count,
                        lessonTitle: currentLesson?.title,
                        onStartLesson: startCurrentLesson
                    )
                    senseiCard
                    activeQuest
                    unitSections
                }
                .padding(.horizontal, KotobaSpacing.gutter)
                .padding(.vertical, KotobaSpacing.space4)
            }
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack(spacing: KotobaSpacing.space3) {
            KotobaLevelBadge(tier: .n5, size: .sm, showCaption: false)
            VStack(alignment: .leading, spacing: 2) {
                Text("Current level")
                    .font(KotobaFont.body(.text3xs, weight: .bold))
                    .foregroundStyle(KotobaColor.textMuted)
                Text("N5 · \(Int(tierProgress))%")
                    .font(KotobaFont.numeric(.textSm, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
            }
            Spacer()
            KotobaStreakCounter(days: streak, size: .sm, showLabel: false)
        }
        .padding(.horizontal, KotobaSpacing.gutter)
        .padding(.top, KotobaSpacing.space3)
        .padding(.bottom, KotobaSpacing.space3)
        .background(KotobaColor.canvas.opacity(0.94))
        .overlay(alignment: .bottom) {
            Rectangle()
                .fill(KotobaColor.borderSubtle)
                .frame(height: 1)
        }
    }

    @ViewBuilder
    private var senseiCard: some View {
        if let senseiInsight {
            KotobaSenseiCard(title: senseiInsight.title, message: senseiInsight.message) {
                HStack {
                    KotobaSenseiChip("Tuned for you")
                    Spacer()
                    if let lesson = currentLesson {
                        KotobaButton(variant: .secondary, size: .sm, action: { onStartLesson(lesson) }) {
                            Text("Practice")
                        }
                    }
                }
            }
        }
    }

    private var activeQuest: some View {
        KotobaQuestCard(
            title: "Defeat the Hiragana Oni",
            subtitle: "Boss challenge · waiting on the path",
            value: Double(state.defeatedBossIDs.count),
            max: 1,
            reward: "+30 XP",
            done: bossState == .defeated,
            systemImage: "flame.fill"
        )
    }

    private var unitSections: some View {
        VStack(spacing: KotobaSpacing.space7) {
            ForEach(Array(units.enumerated()), id: \.element.id.rawValue) { unitIndex, unit in
                let locked = unitIndex > 0 && !firstUnitComplete
                VStack(spacing: KotobaSpacing.space5) {
                    PathUnitBanner(unit: unit, number: unitIndex + 1, locked: locked)
                    PathLessonMap(
                        lessons: unit.lessons,
                        locked: locked,
                        currentLessonID: currentLesson?.id,
                        completedIDs: state.completedLessonIDs,
                        onStartLesson: onStartLesson
                    )
                    if unitIndex == 0 {
                        bossAndGate
                    }
                }
            }
        }
    }

    private var bossAndGate: some View {
        HStack(alignment: .top, spacing: KotobaSpacing.space8) {
            Button(action: onStartBoss) {
                KotobaBossNode(state: bossState, size: .md, label: "Hiragana Oni")
            }
            .buttonStyle(.plain)
            .disabled(bossState == .locked)

            VStack(spacing: KotobaSpacing.space2) {
                KotobaToriiGate(size: 104, state: firstUnitComplete ? .open : .locked, plaque: "二", caption: gateCaption)
                if firstUnitComplete {
                    KotobaButton(variant: .accent, size: .sm, action: onShowGate) {
                        Text("Pass through")
                    }
                }
            }
            Spacer()
        }
        .frame(maxWidth: .infinity)
        .padding(.top, KotobaSpacing.space2)
    }

    private var units: [ContentKit.Unit] {
        pack.courses.first?.units ?? []
    }

    private var currentLesson: Lesson? {
        pack.allLessons.first { !state.completedLessonIDs.contains($0.id.rawValue) } ?? pack.allLessons.last
    }

    private func startCurrentLesson() {
        if let currentLesson { onStartLesson(currentLesson) }
    }

    private var firstUnitComplete: Bool {
        guard let first = units.first else { return false }
        return first.lessons.allSatisfy { state.completedLessonIDs.contains($0.id.rawValue) }
    }

    private var bossState: KotobaBossNodeState {
        guard firstUnitComplete else { return .locked }
        return state.defeatedBossIDs.contains("sample-kana-boss") ? KotobaBossNodeState.defeated : KotobaBossNodeState.available
    }

    private var gateCaption: String {
        firstUnitComplete ? "Unit 1 complete · gate open" : "Finish Unit 1 to pass"
    }

    private var streak: Int {
        StreakCalculator.streak(sessions: state.sessionDays)
    }

    private var tierProgress: Double {
        guard !pack.allLessons.isEmpty else { return 0 }
        return Double(state.completedLessonIDs.count) / Double(pack.allLessons.count) * 100
    }
}
