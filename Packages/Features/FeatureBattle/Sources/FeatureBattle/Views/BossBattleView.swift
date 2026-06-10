import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine

/// Optional quiz battle; rules stay in LearningEngine and progress stays in the app shell.
public struct BossBattleView: View {
    private let lesson: Lesson
    private let onExit: () -> Void
    private let onWin: () -> Void
    @State private var index = 0
    @State private var battle = BattleRules.start()
    @State private var feedback = "Answer to strike the oni."

    public init(lesson: Lesson, onExit: @escaping () -> Void, onWin: @escaping () -> Void) {
        self.lesson = lesson
        self.onExit = onExit
        self.onWin = onWin
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space5) {
            header
            bossCard
            if battle.status == .active {
                answers
            } else {
                outcome
            }
            Spacer()
        }
        .padding(KotobaSpacing.gutter)
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack {
            KotobaIconButton("xmark", label: "Close", variant: .ghost, action: onExit)
            Spacer()
            KotobaBadge("Optional battle", tone: .torii, solid: true)
        }
    }

    private var bossCard: some View {
        KotobaCard(tone: .brand) {
            VStack(spacing: KotobaSpacing.space4) {
                KotobaBossNode(state: battle.status == .won ? .defeated : .available, size: .lg, label: "Hiragana oni")
                HStack {
                    statusPill("Oni HP", value: battle.bossHP)
                    statusPill("Hearts", value: battle.hearts)
                }
                Text(prompt)
                    .font(KotobaFont.display(.textXl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                    .multilineTextAlignment(.center)
                Text(feedback)
                    .font(KotobaFont.body(.textSm, weight: .semibold))
                    .foregroundStyle(KotobaColor.textBody)
                    .multilineTextAlignment(.center)
            }
        }
    }

    private var answers: some View {
        VStack(spacing: KotobaSpacing.space3) {
            ForEach(options, id: \.self) { option in
                KotobaButton(variant: .secondary, fullWidth: true, action: { answer(option) }) {
                    Text(option)
                }
            }
        }
    }

    private var outcome: some View {
        VStack(spacing: KotobaSpacing.space3) {
            Text(battle.status == .won ? "Gate clear" : "Take a breath")
                .font(KotobaFont.display(.text2xl, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            Text(battle.status == .won ? "Yuki's power grows from this win." : "Boss battles are practice. Your path stays open.")
                .font(KotobaFont.body(.textMd))
                .foregroundStyle(KotobaColor.textMuted)
                .multilineTextAlignment(.center)
            KotobaButton(variant: battle.status == .won ? .success : .primary, fullWidth: true, action: battle.status == .won ? onWin : onExit) {
                Text(battle.status == .won ? "Pass the gate" : "Back to path")
            }
        }
    }

    private func statusPill(_ label: String, value: Int) -> some View {
        KotobaBadge("\(label) \(value)", tone: value > 0 ? .brand : .torii, size: .sm, solid: true)
    }

    private var exercise: Exercise {
        lesson.exercises[index % lesson.exercises.count]
    }

    private var prompt: String {
        battle.status == .active ? exercise.prompt : "Battle complete"
    }

    private var options: [String] {
        exercise.choices.isEmpty ? [exercise.answer, "a", "i", "u"].sorted() : exercise.choices
    }

    private func answer(_ value: String) {
        let result = AnswerEvaluator.evaluate(answer: value, for: exercise)
        battle = BattleRules.apply(answer: result, to: battle)
        feedback = result.isCorrect ? "Nice strike." : "Not quite - the answer is \(result.correctAnswer)."
        index += 1
    }
}
