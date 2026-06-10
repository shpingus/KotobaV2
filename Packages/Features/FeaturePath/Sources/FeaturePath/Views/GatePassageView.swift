import SwiftUI
import KotobaDesignSystem

/// Torii celebration for optional boss wins and unit checkpoints.
public struct GatePassageView: View {
    private let title: String
    private let subtitle: String
    private let onContinue: () -> Void

    public init(title: String = "Gate passed", subtitle: String = "Your path is brighter from this practice.", onContinue: @escaping () -> Void) {
        self.title = title
        self.subtitle = subtitle
        self.onContinue = onContinue
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space6) {
            Spacer()
            KotobaToriiGate(size: 180, state: .passed, plaque: "言", caption: "Checkpoint")
            VStack(spacing: KotobaSpacing.space3) {
                Text(title)
                    .font(KotobaFont.display(.text3xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text(subtitle)
                    .font(KotobaFont.body(.textMd))
                    .foregroundStyle(KotobaColor.textMuted)
                    .multilineTextAlignment(.center)
            }
            Spacer()
            KotobaButton(variant: .success, size: .lg, fullWidth: true, action: onContinue) {
                Text("Back to path")
            }
        }
        .padding(KotobaSpacing.gutter)
        .background(KotobaColor.canvas)
    }
}
