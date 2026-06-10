import SwiftUI

/// Base surface container; it owns visual chrome only and never feature layout.
public struct KotobaCard<Content: View>: View {
    private let pad: KotobaCardPadding
    private let elevation: KotobaCardElevation
    private let tone: KotobaCardTone
    private let content: Content

    public init(
        pad: KotobaCardPadding = .md,
        elevation: KotobaCardElevation = .sm,
        tone: KotobaCardTone = .default,
        @ViewBuilder content: () -> Content
    ) {
        self.pad = pad
        self.elevation = elevation
        self.tone = tone
        self.content = content()
    }

    public var body: some View {
        content
            .padding(pad.value)
            .background(tone.fill)
            .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous)
                    .stroke(tone.border, lineWidth: KotobaBorder.thin)
            }
            .kotobaShadow(elevation.shadow)
    }
}

public enum KotobaCardPadding {
    case none
    case sm
    case md
    case lg

    var value: CGFloat {
        switch self {
        case .none: 0
        case .sm: KotobaSpacing.space4
        case .md: KotobaSpacing.space5
        case .lg: KotobaSpacing.space7
        }
    }
}

public enum KotobaCardElevation {
    case flat
    case sm
    case md
    case lg

    var shadow: KotobaShadow {
        switch self {
        case .flat: KotobaShadow(color: .clear, radius: 0, x: 0, y: 0)
        case .sm: .sm
        case .md: .md
        case .lg: .lg
        }
    }
}

public enum KotobaCardTone {
    case `default`
    case brand
    case inverse

    var fill: Color {
        switch self {
        case .default: KotobaColor.surfaceCard
        case .brand: KotobaColor.brandSubtle
        case .inverse: KotobaColor.surfaceInverse
        }
    }

    var border: Color {
        switch self {
        case .default: KotobaColor.borderSubtle
        case .brand: KotobaColor.brandSoft
        case .inverse: .clear
        }
    }
}
