import SwiftUI
import KotobaDesignSystem

/// Daily progress nudge for the top of the path.
struct PathDailyGoalCard: View {
    let completed: Int
    let lessonTitle: String?
    let onStartLesson: (() -> Void)?
    private let goal = 3

    var body: some View {
        KotobaCard(elevation: .sm) {
            VStack(spacing: KotobaSpacing.space4) {
                HStack(spacing: KotobaSpacing.space4) {
                    KotobaProgressRing(value: Double(progress), max: Double(goal), size: 52, thickness: 7, color: KotobaColor.accent) {
                        Text("\(progress)/\(goal)")
                            .font(KotobaFont.numeric(.textXs, weight: .bold))
                            .foregroundStyle(KotobaColor.textStrong)
                    }

                    VStack(alignment: .leading, spacing: 4) {
                        Text(progress >= goal ? "Daily goal complete" : "Daily goal")
                            .font(KotobaFont.body(.textMd, weight: .bold))
                            .foregroundStyle(KotobaColor.textStrong)
                        Text(progress >= goal ? "Streak safe for today." : remainingText)
                            .font(KotobaFont.body(.textSm))
                            .foregroundStyle(KotobaColor.textMuted)
                    }

                    Spacer()
                    KotobaBadge("+20 XP", tone: .accent, size: .sm)
                }

                if let lessonTitle, let onStartLesson {
                    KotobaButton(variant: .accent, fullWidth: true, action: onStartLesson) {
                        Text("Begin \(lessonTitle.lowercased())")
                    }
                }
            }
        }
    }

    private var progress: Int {
        min(goal, completed)
    }

    private var remainingText: String {
        let remaining = goal - progress
        return remaining == 1 ? "1 more lesson to finish today." : "\(remaining) more lessons to finish today."
    }
}
