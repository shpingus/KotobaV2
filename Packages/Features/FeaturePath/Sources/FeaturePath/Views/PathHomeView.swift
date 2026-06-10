import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Home path renders progress and lesson entry points; it does not mutate state directly.
public struct PathHomeView: View {
    private let pack: LanguagePack
    private let state: LearnerState
    private let senseiInsight: SenseiInsight?
    private let onStartLesson: (Lesson) -> Void
    private let onStartBoss: () -> Void
    private let onShowSpirit: () -> Void
    private let onShowProfile: () -> Void

    public init(
        pack: LanguagePack,
        state: LearnerState,
        senseiInsight: SenseiInsight? = nil,
        onStartLesson: @escaping (Lesson) -> Void,
        onStartBoss: @escaping () -> Void,
        onShowSpirit: @escaping () -> Void,
        onShowProfile: @escaping () -> Void
    ) {
        self.pack = pack
        self.state = state
        self.senseiInsight = senseiInsight
        self.onStartLesson = onStartLesson
        self.onStartBoss = onStartBoss
        self.onShowSpirit = onShowSpirit
        self.onShowProfile = onShowProfile
    }

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space6) {
                header
                senseiCard
                nextStep
                rpgActions
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
            KotobaIconButton("sparkles", label: "Spirit", variant: .neutral, action: onShowSpirit)
            Button(action: onShowProfile) {
                KotobaAvatar(name: "Aiko Tanaka", ringPercent: 70)
            }
            .buttonStyle(.plain)
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

    private var rpgActions: some View {
        HStack(spacing: KotobaSpacing.space4) {
            Button(action: onStartBoss) {
                KotobaBossNode(state: bossState, size: .md, label: "Kana boss")
            }
            .buttonStyle(.plain)
            .disabled(pack.allLessons.isEmpty)

            KotobaToriiGate(size: 86, state: bossState == .defeated ? .passed : .open, plaque: "言", caption: "Unit gate")
            Spacer()
        }
        .padding(.vertical, KotobaSpacing.space2)
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

    private var bossState: KotobaBossNodeState {
        state.defeatedBossIDs.contains("sample-kana-boss") ? .defeated : .available
    }
}
