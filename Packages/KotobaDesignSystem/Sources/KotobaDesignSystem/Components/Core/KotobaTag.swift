import SwiftUI

/// Selectable or removable topic chip; it stays compact for dense lesson filters.
public struct KotobaTag: View {
    private let text: String
    private let selected: Bool
    private let systemImage: String?
    private let onRemove: (() -> Void)?

    public init(
        _ text: String,
        selected: Bool = false,
        systemImage: String? = nil,
        onRemove: (() -> Void)? = nil
    ) {
        self.text = text
        self.selected = selected
        self.systemImage = systemImage
        self.onRemove = onRemove
    }

    public var body: some View {
        HStack(spacing: KotobaSpacing.space2) {
            if let systemImage {
                Image(systemName: systemImage)
                    .font(.system(size: 12, weight: .bold))
            }

            Text(text)
                .font(KotobaFont.body(.textSm, weight: .semibold))

            if let onRemove {
                Button(action: onRemove) {
                    Image(systemName: "xmark")
                        .font(.system(size: 10, weight: .bold))
                }
                .buttonStyle(.plain)
                .accessibilityLabel("Remove \(text)")
            }
        }
        .padding(.horizontal, 12)
        .frame(minHeight: 34)
        .foregroundStyle(selected ? KotobaColor.brandStrong : KotobaColor.textBody)
        .background(selected ? KotobaColor.brandSoft : KotobaColor.surfaceCard)
        .clipShape(Capsule())
        .overlay {
            Capsule().stroke(selected ? KotobaColor.borderBrand : KotobaColor.borderSubtle, lineWidth: KotobaBorder.thin)
        }
    }
}
