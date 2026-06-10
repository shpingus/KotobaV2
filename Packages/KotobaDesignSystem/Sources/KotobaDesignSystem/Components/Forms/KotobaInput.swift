import SwiftUI

/// Labelled text field with helper and error states; validation belongs to callers.
public struct KotobaInput: View {
    private let label: String
    private let placeholder: String
    private let helperText: String?
    private let error: String?
    @Binding private var text: String

    public init(
        label: String,
        placeholder: String = "",
        text: Binding<String>,
        helperText: String? = nil,
        error: String? = nil
    ) {
        self.label = label
        self.placeholder = placeholder
        self._text = text
        self.helperText = helperText
        self.error = error
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space2) {
            Text(label)
                .font(KotobaFont.body(.textSm, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)

            TextField(placeholder, text: $text)
                .font(KotobaFont.body(.textMd))
                .padding(.horizontal, KotobaSpacing.space4)
                .frame(minHeight: KotobaSpacing.tapMin)
                .background(KotobaColor.surfaceCard)
                .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))
                .overlay {
                    RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous)
                        .stroke(error == nil ? KotobaColor.borderDefault : KotobaColor.danger, lineWidth: KotobaBorder.base)
                }

            if let message = error ?? helperText {
                Text(message)
                    .font(KotobaFont.body(.textXs, weight: .medium))
                    .foregroundStyle(error == nil ? KotobaColor.textMuted : KotobaColor.danger)
            }
        }
    }
}
