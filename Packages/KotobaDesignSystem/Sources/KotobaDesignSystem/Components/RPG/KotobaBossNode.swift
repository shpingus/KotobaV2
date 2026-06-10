import SwiftUI

/// Optional boss encounter node; it never encodes path-blocking behavior.
public struct KotobaBossNode: View {
    private let state: KotobaBossNodeState
    private let size: KotobaBossNodeSize
    private let label: String?
    private let flag: String

    public init(state: KotobaBossNodeState = .available, size: KotobaBossNodeSize = .md, label: String? = nil, flag: String = "BOSS") {
        self.state = state
        self.size = size
        self.label = label
        self.flag = flag
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space2) {
            ZStack(alignment: .top) {
                Circle()
                    .fill(state.fill)
                    .frame(width: size.side, height: size.side)
                    .overlay { Circle().stroke(state.border, lineWidth: 3) }
                    .shadow(color: state.edge, radius: 0, x: 0, y: 5)
                    .overlay { KotobaPixelOni(size: size.spriteSize).saturation(state == .locked ? 0 : 1) }

                Text(state == .defeated ? "CLEAR" : flag)
                    .font(KotobaFont.body(.text3xs, weight: .bold))
                    .tracking(0.8)
                    .foregroundStyle(.white)
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(state == .defeated ? KotobaColor.success : KotobaColor.torii)
                    .clipShape(Capsule())
                    .offset(y: -13)
            }
            .padding(.top, 14)

            if let label {
                Text(label)
                    .font(KotobaFont.body(.textXs, weight: .semibold))
                    .foregroundStyle(KotobaColor.textMuted)
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: 110)
            }
        }
        .opacity(state == .locked ? 0.6 : 1)
    }
}

public enum KotobaBossNodeState {
    case available
    case locked
    case defeated

    var fill: Color { self == .defeated ? KotobaColor.successSoft : KotobaColor.toriiSoft }
    var border: Color { self == .defeated ? KotobaColor.success : KotobaColor.torii }
    var edge: Color { self == .defeated ? KotobaColor.successEdge : KotobaColor.toriiDeep }
}

public enum KotobaBossNodeSize {
    case sm
    case md
    case lg

    var side: CGFloat { self == .lg ? 96 : self == .sm ? 56 : 76 }
    var spriteSize: CGFloat { self == .lg ? 60 : self == .sm ? 34 : 46 }
}

public struct KotobaPixelOni: View {
    private let size: CGFloat

    public init(size: CGFloat = 40) {
        self.size = size
    }

    public var body: some View {
        KotobaPixelSprite(matrix: oni, palette: palette, size: size)
    }

    private let oni = [
        ".G........G.", ".GG......GG.", "..OOOOOOOO..", ".ORRRRRRRRO.",
        ".ORKRRRRKRO.", ".ORWKRRKWRO.", "ORRRRRRRRRRO", "ORWWWWWWWWRO",
        ".ORRDDDDRRO.", "..ORRRRRRO..", "..ORO..ORO..", "...O....O..."
    ]

    private let palette: [Character: Color] = [
        "O": Color(hex: 0x571C12), "R": Color(hex: 0xDA5839), "D": Color(hex: 0xA82E16),
        "W": .white, "K": KotobaColor.textStrong, "G": Color(hex: 0xECBC49)
    ]
}
