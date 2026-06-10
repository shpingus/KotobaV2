import SwiftUI

/// Inline marker for adaptive content prepared from learner history.
public struct KotobaSenseiChip: View {
    private let text: String

    public init(_ text: String = "Tuned for you") {
        self.text = text
    }

    public var body: some View {
        HStack(spacing: 5) {
            Image(systemName: "sparkles")
                .font(.system(size: 12, weight: .bold))
            Text(text)
                .font(KotobaFont.body(.text2xs, weight: .bold))
        }
        .foregroundStyle(KotobaColor.brandStrong)
        .padding(.horizontal, 10)
        .padding(.vertical, 5)
        .background(KotobaColor.brandSoft)
        .clipShape(Capsule())
    }
}
