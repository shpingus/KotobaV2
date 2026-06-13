import SwiftUI

/// Stepping-stone node for the learning path; feature code decides availability.
public struct KotobaLessonNode: View {
    private let state: KotobaLessonNodeState
    private let size: KotobaLessonNodeSize
    private let current: Bool
    private let label: String?
    private let startLabel: String

    public init(
        state: KotobaLessonNodeState = .available,
        size: KotobaLessonNodeSize = .md,
        current: Bool = false,
        label: String? = nil,
        startLabel: String = "START"
    ) {
        self.state = state
        self.size = size
        self.current = current
        self.label = label
        self.startLabel = startLabel
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space2) {
            ZStack(alignment: .top) {
                if current {
                    Circle()
                        .stroke(KotobaColor.accent.opacity(0.65), lineWidth: 3)
                        .frame(width: size.side + 22, height: size.side + 22)
                }

                Circle()
                    .fill(state.fill)
                    .frame(width: size.side, height: size.side)
                    .overlay {
                        Circle().stroke(state.border, lineWidth: state == .available && !current ? KotobaBorder.base : 0)
                    }
                    .shadow(color: state.shadow.color, radius: state.shadow.radius, x: 0, y: state.shadow.y)
                    .overlay {
                        Image(systemName: state.systemImage)
                            .font(.system(size: size.iconSize, weight: .bold))
                            .foregroundStyle(state.ink)
                    }

                if current {
                    Text(startLabel)
                        .font(KotobaFont.body(.text3xs, weight: .bold))
                        .tracking(0.8)
                        .foregroundStyle(KotobaColor.accent)
                        .padding(.horizontal, 9)
                        .padding(.vertical, 3)
                        .background(KotobaColor.surfaceCard)
                        .clipShape(Capsule())
                        .overlay { Capsule().stroke(KotobaColor.accent, lineWidth: KotobaBorder.base) }
                        .offset(y: -24)
                }
            }
            .padding(.top, current ? 24 : 0)

            if let label {
                Text(label)
                    .font(KotobaFont.body(.textXs, weight: .semibold))
                    .foregroundStyle(KotobaColor.textMuted)
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: 96)
            }
        }
    }
}

public enum KotobaLessonNodeState {
    case available
    case locked
    case complete
    case mastered

    var fill: Color {
        switch self {
        case .available: KotobaColor.surfaceCard
        case .locked: KotobaColor.surfaceSunken
        case .complete: KotobaColor.success
        case .mastered: KotobaColor.warning
        }
    }

    var edge: Color {
        switch self {
        case .available: KotobaColor.surfaceEdge
        case .locked: KotobaColor.borderDefault
        case .complete: KotobaColor.successEdge
        case .mastered: KotobaColor.warningEdge
        }
    }

    var shadow: (color: Color, radius: CGFloat, y: CGFloat) {
        switch self {
        case .available:
            (KotobaColor.surfaceEdge.opacity(0.5), 8, 4)
        case .locked:
            (KotobaColor.borderDefault.opacity(0.35), 7, 3)
        case .complete:
            (KotobaColor.successEdge, 0, 6)
        case .mastered:
            (KotobaColor.warningEdge, 0, 6)
        }
    }

    var border: Color { self == .available ? KotobaColor.borderSubtle : .clear }
    var ink: Color { self == .available ? KotobaColor.brand : self == .locked ? KotobaColor.textFaint : .white }

    var systemImage: String {
        switch self {
        case .available: "book.closed.fill"
        case .locked: "lock.fill"
        case .complete: "checkmark"
        case .mastered: "crown.fill"
        }
    }
}

public enum KotobaLessonNodeSize {
    case sm
    case md
    case lg

    var side: CGFloat { self == .lg ? 84 : self == .sm ? 52 : 68 }
    var iconSize: CGFloat { self == .lg ? 34 : self == .sm ? 20 : 28 }
}
