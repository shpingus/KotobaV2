import SwiftUI
import KotobaDesignSystem

/// Selectable onboarding option row with a leading symbol.
struct OnboardingChoiceRow: View {
    let choice: OnboardingChoice
    let selected: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: KotobaSpacing.space4) {
                Image(systemName: choice.systemImage)
                    .font(.system(size: 20, weight: .bold))
                    .foregroundStyle(KotobaColor.brand)
                    .frame(width: 42, height: 42)
                    .background(KotobaColor.brandSoft)
                    .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))

                VStack(alignment: .leading, spacing: 3) {
                    Text(choice.title)
                        .font(KotobaFont.body(.textMd, weight: .bold))
                    Text(choice.subtitle)
                        .font(KotobaFont.body(.textSm))
                        .foregroundStyle(KotobaColor.textMuted)
                }

                Spacer()
                if selected {
                    Image(systemName: "checkmark.circle.fill")
                        .foregroundStyle(KotobaColor.success)
                }
            }
            .foregroundStyle(KotobaColor.textStrong)
            .padding(KotobaSpacing.space4)
            .background(selected ? KotobaColor.brandSoft : KotobaColor.surfaceCard)
            .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous)
                    .stroke(selected ? KotobaColor.borderBrand : KotobaColor.borderSubtle, lineWidth: KotobaBorder.base)
            }
        }
        .buttonStyle(.plain)
    }
}

struct OnboardingChoice: Identifiable {
    let id = UUID()
    let systemImage: String
    let title: String
    let subtitle: String
}
