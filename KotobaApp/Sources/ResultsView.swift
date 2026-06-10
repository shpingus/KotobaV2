import SwiftUI
import KotobaDesignSystem
import LearningEngine

/// Lesson completion summary before returning to the path.
struct ResultsView: View {
    let summary: LessonSummary
    let onContinue: () -> Void

    var body: some View {
        VStack(spacing: KotobaSpacing.space6) {
            Spacer()
            KotobaCompanion(stage: .traveler, size: 120, floating: true)
            Text("Lesson complete")
                .font(KotobaFont.display(.text3xl, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            Text("\(summary.correctCount) / \(summary.totalCount) correct")
                .font(KotobaFont.body(.textLg, weight: .semibold))
                .foregroundStyle(KotobaColor.textMuted)
            KotobaBadge("+\(summary.xpAwarded) XP", tone: .accent, size: .lg, solid: true)
            Spacer()
            KotobaButton(size: .lg, fullWidth: true, action: onContinue) {
                Text("Back to path")
            }
        }
        .padding(KotobaSpacing.gutter)
        .background(KotobaColor.canvas)
    }
}
