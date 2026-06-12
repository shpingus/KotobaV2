import SwiftUI
import KotobaDesignSystem

/// Four-step onboarding progress indicator.
struct OnboardingProgressDots: View {
    let current: Int
    let total: Int

    var body: some View {
        HStack(spacing: KotobaSpacing.space2) {
            ForEach(1...total, id: \.self) { index in
                Capsule()
                    .fill(index <= current ? KotobaColor.brand : KotobaColor.surfaceSunken)
                    .frame(height: 6)
            }
        }
    }
}
