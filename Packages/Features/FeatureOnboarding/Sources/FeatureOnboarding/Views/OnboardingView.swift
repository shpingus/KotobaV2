import SwiftUI
import KotobaDesignSystem

/// First-run intake surface; persistence and routing stay in the app target.
public struct OnboardingView: View {
    private let onComplete: () -> Void
    @State private var selectedGoal = "Travel in Japan"

    public init(onComplete: @escaping () -> Void) {
        self.onComplete = onComplete
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space7) {
            Spacer()

            KotobaCompanion(stage: .newborn, size: 112, floating: true)

            VStack(spacing: KotobaSpacing.space3) {
                Text("Meet Yūki")
                    .font(KotobaFont.display(.text3xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text("Your word spirit grows as your Japanese grows.")
                    .font(KotobaFont.body(.textMd))
                    .foregroundStyle(KotobaColor.textMuted)
                    .multilineTextAlignment(.center)
            }

            VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
                Text("Why are you learning?")
                    .font(KotobaFont.body(.textSm, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                ForEach(["Travel in Japan", "Anime and manga", "Work and career"], id: \.self) { goal in
                    Button {
                        selectedGoal = goal
                    } label: {
                        HStack {
                            Text(goal)
                            Spacer()
                            if selectedGoal == goal { Image(systemName: "checkmark.circle.fill") }
                        }
                        .font(KotobaFont.body(.textMd, weight: .semibold))
                        .foregroundStyle(KotobaColor.textStrong)
                        .padding(KotobaSpacing.space4)
                        .background(selectedGoal == goal ? KotobaColor.brandSoft : KotobaColor.surfaceCard)
                        .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
                    }
                    .buttonStyle(.plain)
                }
            }

            Spacer()

            KotobaButton(size: .lg, fullWidth: true, action: onComplete) {
                Text("Start learning")
            }
        }
        .padding(KotobaSpacing.gutter)
        .background(KotobaColor.canvas)
    }
}
