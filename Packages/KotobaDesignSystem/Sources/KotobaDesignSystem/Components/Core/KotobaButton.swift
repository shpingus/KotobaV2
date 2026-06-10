import SwiftUI

/// Tactile pill button with Kotoba's solid bottom edge and compressed press state.
public struct KotobaButton<Label: View>: View {
    private let variant: KotobaButtonVariant
    private let size: KotobaButtonSize
    private let fullWidth: Bool
    private let action: () -> Void
    private let label: Label

    public init(
        variant: KotobaButtonVariant = .primary,
        size: KotobaButtonSize = .md,
        fullWidth: Bool = false,
        action: @escaping () -> Void,
        @ViewBuilder label: () -> Label
    ) {
        self.variant = variant
        self.size = size
        self.fullWidth = fullWidth
        self.action = action
        self.label = label()
    }

    public var body: some View {
        Button(action: action) {
            label
                .font(KotobaFont.body(size.textSize, weight: size.weight))
                .lineLimit(1)
                .minimumScaleFactor(0.82)
                .frame(maxWidth: fullWidth ? .infinity : nil, minHeight: size.height)
                .padding(.horizontal, size.horizontalPadding)
        }
        .buttonStyle(KotobaTactileButtonStyle(variant: variant, radius: KotobaRadius.pill))
    }
}

public enum KotobaButtonVariant {
    case primary
    case accent
    case success
    case secondary
    case ghost
    case danger

    var fill: Color {
        switch self {
        case .primary: KotobaColor.brand
        case .accent: KotobaColor.accent
        case .success: KotobaColor.success
        case .secondary: KotobaColor.surfaceCard
        case .ghost: .clear
        case .danger: KotobaColor.danger
        }
    }

    var edge: Color {
        switch self {
        case .primary: KotobaColor.brandEdge
        case .accent: KotobaColor.accentEdge
        case .success: KotobaColor.successEdge
        case .secondary: KotobaColor.borderDefault
        case .ghost: .clear
        case .danger: KotobaColor.dangerEdge
        }
    }

    var foreground: Color {
        switch self {
        case .secondary: KotobaColor.brandStrong
        case .ghost: KotobaColor.textBody
        default: .white
        }
    }

    var hasEdge: Bool { self != .ghost }
}

public enum KotobaButtonSize {
    case sm
    case md
    case lg

    var textSize: KotobaTextSize { self == .lg ? .textLg : self == .sm ? .textSm : .textMd }
    var height: CGFloat { self == .lg ? 56 : self == .sm ? 40 : 48 }
    var horizontalPadding: CGFloat { self == .lg ? 30 : self == .sm ? 16 : 22 }
    var weight: Font.Weight { .bold }
}

private struct KotobaTactileButtonStyle: ButtonStyle {
    let variant: KotobaButtonVariant
    let radius: CGFloat

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(variant.foreground)
            .background(variant.fill)
            .clipShape(Capsule())
            .overlay {
                Capsule().stroke(variant == .secondary ? KotobaColor.borderDefault : .clear, lineWidth: KotobaBorder.thin)
            }
            .shadow(color: variant.edge, radius: 0, x: 0, y: configuration.isPressed || !variant.hasEdge ? 0 : KotobaMotion.pressDepth)
            .offset(y: configuration.isPressed && variant.hasEdge ? KotobaMotion.pressDepth : 0)
            .animation(KotobaMotion.easeOut.speed(1.4), value: configuration.isPressed)
    }
}
