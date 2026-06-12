import SwiftUI
import KotobaDesignSystem
import LearningEngine

/// Calm correct/wrong feedback shown before a lesson advances.
struct LessonFeedbackCard: View {
    let result: AnswerResult

    var body: some View {
        HStack(spacing: KotobaSpacing.space3) {
            Image(systemName: result.isCorrect ? "checkmark" : "xmark")
                .font(.system(size: 18, weight: .bold))
                .foregroundStyle(.white)
                .frame(width: 42, height: 42)
                .background(color)
                .clipShape(Circle())

            VStack(alignment: .leading, spacing: 4) {
                Text(result.isCorrect ? "Nice" : "Not quite")
                    .font(KotobaFont.display(.textLg, weight: .bold))
                    .foregroundStyle(edge)
                Text(result.isCorrect ? "That is correct." : "The answer is \(result.correctAnswer).")
                    .font(KotobaFont.body(.textSm, weight: .semibold))
                    .foregroundStyle(edge)
            }
            Spacer()
        }
        .padding(KotobaSpacing.space4)
        .background(fill)
        .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
    }

    private var color: Color {
        result.isCorrect ? KotobaColor.success : KotobaColor.danger
    }

    private var edge: Color {
        result.isCorrect ? KotobaColor.successEdge : KotobaColor.dangerEdge
    }

    private var fill: Color {
        result.isCorrect ? KotobaColor.successSoft : KotobaColor.dangerSoft
    }
}
