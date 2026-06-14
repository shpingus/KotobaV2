import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Practice collects repeatable training entry points outside the learning path.
struct PracticeView: View {
    private let pack: LanguagePack
    private let state: LearnerState
    private let onStartPractice: () -> Void
    private let onStartBoss: () -> Void

    init(
        pack: LanguagePack,
        state: LearnerState,
        onStartPractice: @escaping () -> Void,
        onStartBoss: @escaping () -> Void
    ) {
        self.pack = pack
        self.state = state
        self.onStartPractice = onStartPractice
        self.onStartBoss = onStartBoss
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space6) {
                header
                todayCard
                practiceQueue
                progressTargets
                recommendedFocus
            }
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space1) {
            HStack(alignment: .firstTextBaseline, spacing: KotobaSpacing.space2) {
                Text("Practice")
                    .font(KotobaFont.display(.text3xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text("今日の復習")
                    .font(KotobaFont.japaneseDisplay(.textSm, weight: .bold))
                    .foregroundStyle(KotobaColor.textMuted)
            }
            Text("Short rounds for material already on your path.")
                .font(KotobaFont.body(.textSm))
                .foregroundStyle(KotobaColor.textMuted)
        }
    }

    private var todayCard: some View {
        KotobaCard(tone: .brand) {
            HStack(spacing: KotobaSpacing.space5) {
                KotobaProgressRing(value: Double(completedLessonCount), max: Double(max(totalLessons, 1)), size: 74, color: KotobaColor.accent) {
                    Text("\(completionPercent)%")
                        .font(KotobaFont.numeric(.textSm, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                }

                VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(currentLesson?.title ?? "No lessons ready")
                            .font(KotobaFont.display(.textLg, weight: .bold))
                            .foregroundStyle(KotobaColor.textStrong)
                        Text(todaySubtitle)
                            .font(KotobaFont.body(.textSm))
                            .foregroundStyle(KotobaColor.textBody)
                    }

                    KotobaButton(variant: .accent, size: .sm, action: onStartPractice) {
                        Label("Start review", systemImage: "play.fill")
                    }
                    .disabled(currentLesson == nil)
                    .opacity(currentLesson == nil ? 0.6 : 1)
                }
            }
        }
    }

    private var practiceQueue: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Practice queue")
            PracticeModeCard(
                systemImage: "text.book.closed.fill",
                title: "Lesson review",
                subtitle: lessonReviewSubtitle,
                badge: currentLesson.map { "+\($0.rewardXP) XP" } ?? "Empty",
                badgeTone: .accent,
                iconColor: KotobaColor.brand,
                iconFill: KotobaColor.brandSoft,
                disabled: currentLesson == nil,
                action: onStartPractice
            )
            PracticeModeCard(
                systemImage: "flame.fill",
                title: "Boss battle",
                subtitle: bossSubtitle,
                badge: state.defeatedBossIDs.isEmpty ? "+30 XP" : "Cleared",
                badgeTone: state.defeatedBossIDs.isEmpty ? .gold : .success,
                iconColor: KotobaColor.torii,
                iconFill: KotobaColor.toriiSoft,
                disabled: !bossAvailable,
                action: onStartBoss
            )
        }
    }

    private var progressTargets: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Targets")
            KotobaQuestCard(
                title: "Finish two lessons",
                subtitle: "Small steps count.",
                value: Double(state.completedLessonIDs.count),
                max: 2,
                reward: "+20 XP",
                done: state.completedLessonIDs.count >= 2
            )
            KotobaQuestCard(
                title: "Win one boss battle",
                subtitle: bossAvailable ? "Optional pressure test." : "Unlock after Unit 1.",
                value: Double(state.defeatedBossIDs.count),
                max: 1,
                reward: "+30 XP",
                done: !state.defeatedBossIDs.isEmpty,
                systemImage: "flame.fill"
            )
        }
    }

    private var recommendedFocus: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            sectionTitle("Recommended focus")
            KotobaCard {
                VStack(alignment: .leading, spacing: KotobaSpacing.space4) {
                    Text(focusSubtitle)
                        .font(KotobaFont.body(.textSm))
                        .foregroundStyle(KotobaColor.textMuted)
                    KotobaStatBar(
                        label: weakestStat.label,
                        jp: weakestStat.jp,
                        value: Double(state.statScores[weakestStat, default: 0]),
                        tone: weakestStat.tone,
                        weak: true
                    )
                }
            }
        }
    }

    private func sectionTitle(_ text: String) -> some View {
        Text(text)
            .font(KotobaFont.display(.textLg, weight: .bold))
            .foregroundStyle(KotobaColor.textStrong)
    }

    private var currentLesson: Lesson? {
        pack.allLessons.first { !state.completedLessonIDs.contains($0.id.rawValue) } ?? pack.allLessons.last
    }

    private var completedLessonCount: Int {
        let lessonIDs = Set(pack.allLessons.map { $0.id.rawValue })
        return state.completedLessonIDs.intersection(lessonIDs).count
    }

    private var totalLessons: Int {
        pack.allLessons.count
    }

    private var completionPercent: Int {
        guard totalLessons > 0 else { return 0 }
        return Int((Double(completedLessonCount) / Double(totalLessons) * 100).rounded())
    }

    private var todaySubtitle: String {
        guard let currentLesson else { return "Add lessons to begin practice." }
        return "\(currentLesson.focus.label) focus · \(currentLesson.exercises.count) prompts"
    }

    private var lessonReviewSubtitle: String {
        guard let currentLesson else { return "No lesson content is available yet." }
        return "\(currentLesson.title) · \(currentLesson.focus.label)"
    }

    private var bossAvailable: Bool {
        guard let firstUnit = pack.courses.first?.units.first else { return false }
        return firstUnit.lessons.allSatisfy { state.completedLessonIDs.contains($0.id.rawValue) }
    }

    private var bossSubtitle: String {
        if !bossAvailable {
            return "Finish Unit 1 to unlock the battle."
        }
        return state.defeatedBossIDs.isEmpty ? "A pressure round for your current path." : "Cleared once. Replay when you want pressure."
    }

    private var weakestStat: SkillStat {
        SkillStat.allCases.min { lhs, rhs in
            state.statScores[lhs, default: 0] < state.statScores[rhs, default: 0]
        } ?? .vocabulary
    }

    private var focusSubtitle: String {
        if state.statScores.values.allSatisfy({ $0 == 0 }) {
            return "Start with the next lesson to build your first stat."
        }
        return "\(weakestStat.label) is the lightest score right now."
    }
}

private struct PracticeModeCard: View {
    let systemImage: String
    let title: String
    let subtitle: String
    let badge: String
    let badgeTone: KotobaComponentTone
    let iconColor: Color
    let iconFill: Color
    let disabled: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: KotobaSpacing.space3) {
                Image(systemName: systemImage)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundStyle(iconColor)
                    .frame(width: 42, height: 42)
                    .background(iconFill)
                    .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))

                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(KotobaFont.body(.textSm, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                    Text(subtitle)
                        .font(KotobaFont.body(.textXs))
                        .foregroundStyle(KotobaColor.textMuted)
                        .lineLimit(2)
                }

                Spacer(minLength: KotobaSpacing.space2)
                KotobaBadge(badge, tone: badgeTone, size: .sm, solid: badgeTone == .success)
                Image(systemName: "chevron.right")
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(KotobaColor.textFaint)
            }
            .padding(KotobaSpacing.space4)
            .background(KotobaColor.surfaceCard)
            .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous)
                    .stroke(KotobaColor.borderSubtle, lineWidth: KotobaBorder.thin)
            }
            .opacity(disabled ? 0.58 : 1)
        }
        .buttonStyle(.plain)
        .disabled(disabled)
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
