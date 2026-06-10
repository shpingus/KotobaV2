import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Home path renders progress and lesson entry points; it does not mutate state directly.
public struct PathHomeView: View {
    private let pack: LanguagePack
    private let state: LearnerState
    private let onStartLesson: (Lesson) -> Void
    private let onShowProfile: () -> Void

    public init(pack: LanguagePack, state: LearnerState, onStartLesson: @escaping (Lesson) -> Void, onShowProfile: @escaping () -> Void) {
        self.pack = pack
        self.state = state
        self.onStartLesson = onStartLesson
        self.onShowProfile = onShowProfile
    }

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space6) {
                header
                nextStep
                pathNodes
            }
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack {
            VStack(alignment: .leading, spacing: 4) {
                Text("Today’s path")
                    .font(KotobaFont.display(.text2xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text("Every step forward.")
                    .font(KotobaFont.body(.textSm))
                    .foregroundStyle(KotobaColor.textMuted)
            }
            Spacer()
            Button(action: onShowProfile) {
                KotobaAvatar(name: "Aiko Tanaka", ringPercent: 70)
            }
            .buttonStyle(.plain)
        }
    }

    private var nextStep: some View {
        KotobaCard(tone: .brand) {
            VStack(alignment: .leading, spacing: KotobaSpacing.space4) {
                HStack {
                    KotobaStreakCounter(days: StreakCalculator.streak(sessions: state.sessionDays))
                    Spacer()
                    let level = XPLeveling.level(for: state.totalXP)
                    KotobaBadge("Lv \(level.level)", tone: .brand, solid: true)
                }
                KotobaXPBar(value: Double(XPLeveling.level(for: state.totalXP).currentLevelXP), max: 100, level: XPLeveling.level(for: state.totalXP).level)
                if let lesson = currentLesson {
                    KotobaButton(variant: .accent, fullWidth: true, action: { onStartLesson(lesson) }) {
                        Text("Begin \(lesson.title.lowercased())")
                    }
                }
            }
        }
    }

    private var pathNodes: some View {
        VStack(spacing: KotobaSpacing.space6) {
            ForEach(Array(pack.allLessons.enumerated()), id: \.element.id.rawValue) { index, lesson in
                let complete = state.completedLessonIDs.contains(lesson.id.rawValue)
                let current = lesson.id == currentLesson?.id
                HStack {
                    if index.isMultiple(of: 2) { Spacer() }
                    Button {
                        if !complete { onStartLesson(lesson) }
                    } label: {
                        KotobaLessonNode(state: complete ? .complete : current ? .available : .locked, current: current, label: lesson.title)
                    }
                    .buttonStyle(.plain)
                    .disabled(!complete && !current)
                    if !index.isMultiple(of: 2) { Spacer() }
                }
            }
        }
    }

    private var currentLesson: Lesson? {
        pack.allLessons.first { !state.completedLessonIDs.contains($0.id.rawValue) } ?? pack.allLessons.last
    }
}
