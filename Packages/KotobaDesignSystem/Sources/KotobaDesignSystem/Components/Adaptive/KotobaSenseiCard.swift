import SwiftUI

/// Adaptive insight surface; it owns sensei voice styling, not the heuristic.
public struct KotobaSenseiCard<Actions: View>: View {
    private let eyebrow: String
    private let title: String
    private let message: String
    private let actions: Actions

    public init(
        eyebrow: String = "Sensei noticed",
        title: String,
        message: String,
        @ViewBuilder actions: () -> Actions
    ) {
        self.eyebrow = eyebrow
        self.title = title
        self.message = message
        self.actions = actions()
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space3) {
            HStack(spacing: KotobaSpacing.space2) {
                Circle()
                    .fill(KotobaColor.brand)
                    .frame(width: 30, height: 30)
                    .overlay {
                        Image(systemName: "sparkles")
                            .font(.system(size: 14, weight: .bold))
                            .foregroundStyle(.white)
                    }

                Text(eyebrow.uppercased())
                    .font(KotobaFont.body(.text3xs, weight: .bold))
                    .tracking(1.2)
                    .foregroundStyle(KotobaColor.brandStrong)
            }

            Text(title)
                .font(KotobaFont.body(.textMd, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)

            Text(message)
                .font(KotobaFont.body(.textSm))
                .foregroundStyle(KotobaColor.textBody)
                .lineSpacing(3)

            actions
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(KotobaSpacing.space4)
        .background(KotobaColor.brandSubtle)
        .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous)
                .stroke(Color(hex: 0xBBC5EC), lineWidth: KotobaBorder.base)
        }
    }
}
