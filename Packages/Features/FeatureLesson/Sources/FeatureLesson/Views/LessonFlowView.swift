import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Runs one lesson from content data and returns engine summaries to the app.
public struct LessonFlowView: View {
    private let lesson: Lesson
    private let onExit: () -> Void
    private let onComplete: (LessonSummary, [AnswerRecord]) -> Void
    @State private var index = 0
    @State private var answers: [AnswerRecord] = []
    @State private var results: [AnswerResult] = []
    @State private var feedback: String?

    public init(lesson: Lesson, onExit: @escaping () -> Void, onComplete: @escaping (LessonSummary, [AnswerRecord]) -> Void) {
        self.lesson = lesson
        self.onExit = onExit
        self.onComplete = onComplete
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space5) {
            header
            exerciseCard
            Spacer()
        }
        .padding(KotobaSpacing.gutter)
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack {
            KotobaIconButton("xmark", label: "Close", variant: .ghost, action: onExit)
            VStack(alignment: .leading) {
                Text(lesson.title)
                    .font(KotobaFont.body(.textMd, weight: .bold))
                KotobaXPBar(value: Double(index), max: Double(lesson.exercises.count), showCount: false)
            }
        }
    }

    private var exerciseCard: some View {
        let exercise = lesson.exercises[index]
        return KotobaCard {
            VStack(spacing: KotobaSpacing.space5) {
                Text(exercise.prompt)
                    .font(KotobaFont.display(.textXl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                    .multilineTextAlignment(.center)

                ForEach(options(for: exercise), id: \.self) { option in
                    KotobaButton(variant: .secondary, fullWidth: true, action: { answer(option, exercise: exercise) }) {
                        Text(option)
                    }
                }

                if let feedback {
                    Text(feedback)
                        .font(KotobaFont.body(.textSm, weight: .semibold))
                        .foregroundStyle(KotobaColor.textBody)
                }
            }
        }
    }

    private func options(for exercise: Exercise) -> [String] {
        if exercise.choices.isEmpty {
            return Array(Set([exercise.answer, "a", "i", "u", "ka"])).sorted()
        }
        return exercise.choices
    }

    private func answer(_ value: String, exercise: Exercise) {
        let result = AnswerEvaluator.evaluate(answer: value, for: exercise)
        results.append(result)
        answers.append(AnswerRecord(
            exerciseID: result.exerciseID,
            stat: result.stat,
            prompt: exercise.prompt,
            givenAnswer: result.givenAnswer,
            correctAnswer: result.correctAnswer,
            isCorrect: result.isCorrect
        ))
        feedback = result.isCorrect ? "Nice — that’s right." : "Not quite — the answer is \(result.correctAnswer)."

        if index + 1 >= lesson.exercises.count {
            let summary = LessonScoring.summary(for: lesson, answers: results)
            onComplete(summary, answers)
        } else {
            index += 1
        }
    }
}
