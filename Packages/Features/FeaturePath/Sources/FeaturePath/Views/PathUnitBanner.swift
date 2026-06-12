import SwiftUI
import ContentKit
import KotobaDesignSystem

/// Unit separator matching the mobile path kit.
struct PathUnitBanner: View {
    let unit: ContentKit.Unit
    let number: Int
    let locked: Bool

    var body: some View {
        HStack(spacing: KotobaSpacing.space4) {
            VStack(alignment: .leading, spacing: 3) {
                Text("Unit \(number)")
                    .font(KotobaFont.body(.text3xs, weight: .bold))
                    .tracking(0.8)
                    .foregroundStyle(locked ? KotobaColor.textMuted : .white.opacity(0.86))
                Text(unit.title)
                    .font(KotobaFont.display(.textLg, weight: .bold))
                    .foregroundStyle(locked ? KotobaColor.textMuted : .white)
                Text(subtitle)
                    .font(KotobaFont.japanese(.textSm))
                    .foregroundStyle(locked ? KotobaColor.textFaint : .white.opacity(0.82))
            }

            Spacer()
            Image(systemName: locked ? "lock.fill" : "book.closed.fill")
                .font(.system(size: 22, weight: .bold))
                .foregroundStyle(locked ? KotobaColor.textFaint : .white)
        }
        .padding(.horizontal, KotobaSpacing.space5)
        .padding(.vertical, KotobaSpacing.space4)
        .background(locked ? KotobaColor.surfaceSunken : KotobaColor.brand)
        .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
        .kotobaShadow(locked ? KotobaShadow(color: .clear, radius: 0, x: 0, y: 0) : .md)
    }

    private var subtitle: String {
        switch number {
        case 1: "ひらがな"
        case 2: "はじめの言葉"
        default: "Kotoba path"
        }
    }
}
