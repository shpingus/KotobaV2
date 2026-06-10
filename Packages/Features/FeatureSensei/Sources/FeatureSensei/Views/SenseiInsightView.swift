import SwiftUI
import KotobaDesignSystem
import LearningEngine

/// Reusable adaptive insight surface; the heuristic remains in LearningEngine.
public struct SenseiInsightView: View {
    private let insight: SenseiInsight
    private let onPractice: () -> Void

    public init(insight: SenseiInsight, onPractice: @escaping () -> Void) {
        self.insight = insight
        self.onPractice = onPractice
    }

    public var body: some View {
        KotobaSenseiCard(title: insight.title, message: insight.message) {
            HStack {
                KotobaSenseiChip("Tuned for you")
                Spacer()
                KotobaButton(variant: .secondary, size: .sm, action: onPractice) {
                    Text("Practice")
                }
            }
        }
    }
}
