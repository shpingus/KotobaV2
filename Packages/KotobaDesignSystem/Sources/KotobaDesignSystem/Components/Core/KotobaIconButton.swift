import SwiftUI

/// Icon-only control for navigation and tools; callers provide the accessible label.
public struct KotobaIconButton: View {
    private let label: String
    private let systemImage: String
    private let variant: KotobaIconButtonVariant
    private let size: KotobaIconButtonSize
    private let square: Bool
    private let action: () -> Void

    public init(
        _ systemImage: String,
        label: String,
        variant: KotobaIconButtonVariant = .neutral,
        size: KotobaIconButtonSize = .md,
        square: Bool = false,
        action: @escaping () -> Void
    ) {
        self.systemImage = systemImage
        self.label = label
        self.variant = variant
        self.size = size
        self.square = square
        self.action = action
    }

    public var body: some View {
        Button(action: action) {
            Image(systemName: systemImage)
                .font(.system(size: size.iconSize, weight: .bold))
                .frame(width: size.side, height: size.side)
        }
        .foregroundStyle(variant.foreground)
        .background(variant.fill)
        .clipShape(RoundedRectangle(cornerRadius: square ? KotobaRadius.md : size.side / 2, style: .continuous))
        .accessibilityLabel(label)
    }
}

public enum KotobaIconButtonVariant {
    case neutral
    case brand
    case accent
    case ghost

    var fill: Color {
        switch self {
        case .neutral: KotobaColor.surfaceCard
        case .brand: KotobaColor.brand
        case .accent: KotobaColor.accent
        case .ghost: .clear
        }
    }

    var foreground: Color {
        switch self {
        case .brand, .accent: .white
        case .ghost: KotobaColor.textBody
        case .neutral: KotobaColor.brandStrong
        }
    }
}

public enum KotobaIconButtonSize {
    case sm
    case md
    case lg

    var side: CGFloat { self == .lg ? 52 : self == .sm ? 36 : 44 }
    var iconSize: CGFloat { self == .lg ? 23 : self == .sm ? 16 : 20 }
}
