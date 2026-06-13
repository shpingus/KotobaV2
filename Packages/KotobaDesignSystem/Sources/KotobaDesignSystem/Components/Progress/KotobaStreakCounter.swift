import SwiftUI

/// Daily-streak flame with count; it does not decide streak state.
public struct KotobaStreakCounter: View {
    private let days: Int
    private let size: KotobaStreakCounterSize
    private let state: KotobaStreakState
    private let showLabel: Bool

    public init(
        days: Int,
        size: KotobaStreakCounterSize = .md,
        state: KotobaStreakState = .active,
        showLabel: Bool = true
    ) {
        self.days = days
        self.size = size
        self.state = state
        self.showLabel = showLabel
    }

    public var body: some View {
        HStack(spacing: KotobaSpacing.space2) {
            Image(systemName: "flame.fill")
                .resizable()
                .scaledToFit()
                .foregroundStyle(state.color)
                .frame(width: size.iconSide, height: size.iconSide)

            Text("\(days)")
                .font(KotobaFont.numeric(size.textSize, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)

            if showLabel {
                Text("day streak")
                    .font(KotobaFont.body(.textXs, weight: .bold))
                    .foregroundStyle(KotobaColor.textMuted)
            }
        }
        .padding(.horizontal, size.horizontalPadding)
        .frame(minHeight: size.height)
        .background(KotobaColor.surfaceCard)
        .clipShape(Capsule())
        .overlay { Capsule().stroke(KotobaColor.borderSubtle, lineWidth: KotobaBorder.thin) }
    }
}

public enum KotobaStreakCounterSize {
    case sm
    case md
    case lg

    var iconSide: CGFloat { self == .lg ? 24 : self == .sm ? 16 : 20 }
    var textSize: KotobaTextSize { self == .lg ? .textLg : self == .sm ? .textSm : .textMd }
    var height: CGFloat { self == .lg ? 44 : self == .sm ? 32 : 38 }
    var horizontalPadding: CGFloat { self == .lg ? 14 : self == .sm ? 10 : 12 }
}

public enum KotobaStreakState {
    case active
    case risk
    case off

    var color: Color {
        switch self {
        case .active: KotobaColor.accent
        case .risk: KotobaColor.warning
        case .off: KotobaColor.textFaint
        }
    }
}
