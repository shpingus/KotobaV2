import SwiftUI

/// Geometric torii gate for path checkpoints, tier gates, and celebrations.
public struct KotobaToriiGate: View {
    private let size: CGFloat
    private let state: KotobaToriiGateState
    private let plaque: String?
    private let caption: String?

    public init(size: CGFloat = 96, state: KotobaToriiGateState = .open, plaque: String? = nil, caption: String? = nil) {
        self.size = size
        self.state = state
        self.plaque = plaque
        self.caption = caption
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space2) {
            Canvas { context, _ in
                let sx = size / 120
                let sy = size * 0.92 / 110
                func rect(_ x: CGFloat, _ y: CGFloat, _ w: CGFloat, _ h: CGFloat, _ color: Color) {
                    context.fill(Path(CGRect(x: x * sx, y: y * sy, width: w * sx, height: h * sy)), with: .color(color))
                }

                rect(4, 13, 112, 12, state.deep)
                rect(10, 27, 100, 8, state.main)
                rect(55.5, 30, 9, 22, state.main)
                rect(14, 50, 92, 9, state.main)
                rect(22, 30, 12, 74, state.main)
                rect(86, 30, 12, 74, state.main)
                rect(16.5, 100, 17, 7, state.deep)
                rect(86.5, 100, 17, 7, state.deep)

                if state == .passed {
                    context.fill(Path(ellipseIn: CGRect(x: 84 * sx, y: 62 * sy, width: 20 * sx, height: 20 * sy)), with: .color(KotobaColor.success))
                }
            }
            .frame(width: size, height: size * 0.92)
            .overlay {
                if let plaque {
                    Text(plaque)
                        .font(KotobaFont.japaneseDisplay(.textXs, weight: .bold))
                        .foregroundStyle(state.plaqueInk)
                        .frame(width: size * 0.2, height: size * 0.17)
                        .background(state.plaqueFill)
                        .clipShape(RoundedRectangle(cornerRadius: 3, style: .continuous))
                        .offset(y: -size * 0.18)
                }
            }

            if let caption {
                Text(caption)
                    .font(KotobaFont.body(.textXs, weight: .semibold))
                    .foregroundStyle(KotobaColor.textMuted)
            }
        }
    }
}

public enum KotobaToriiGateState {
    case open
    case locked
    case passed

    var main: Color { self == .locked ? KotobaColor.borderDefault : KotobaColor.torii }
    var deep: Color { self == .locked ? KotobaColor.textFaint : KotobaColor.toriiDeep }
    var plaqueFill: Color { self == .locked ? KotobaColor.surfaceSunken : Color(hex: 0xFFF7F0) }
    var plaqueInk: Color { self == .locked ? KotobaColor.textFaint : KotobaColor.toriiDeep }
}
