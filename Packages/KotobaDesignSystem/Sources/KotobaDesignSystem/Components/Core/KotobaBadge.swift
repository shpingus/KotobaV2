import SwiftUI

/// Small status or count pill; it communicates state without owning behavior.
public struct KotobaBadge: View {
    private let text: String
    private let tone: KotobaComponentTone
    private let size: KotobaBadgeSize
    private let solid: Bool
    private let dot: Bool

    public init(
        _ text: String,
        tone: KotobaComponentTone = .brand,
        size: KotobaBadgeSize = .md,
        solid: Bool = false,
        dot: Bool = false
    ) {
        self.text = text
        self.tone = tone
        self.size = size
        self.solid = solid
        self.dot = dot
    }

    public var body: some View {
        HStack(spacing: 5) {
            if dot {
                Circle()
                    .fill(solid ? .white : tone.ink)
                    .frame(width: 6, height: 6)
            }

            Text(text)
                .font(KotobaFont.body(size.textSize, weight: .bold))
        }
        .padding(.horizontal, size.horizontalPadding)
        .padding(.vertical, size.verticalPadding)
        .foregroundStyle(solid ? .white : tone.ink)
        .background(solid ? tone.fill : tone.softFill)
        .clipShape(Capsule())
    }
}

public enum KotobaBadgeSize {
    case sm
    case md
    case lg

    var textSize: KotobaTextSize { self == .lg ? .textSm : self == .sm ? .text3xs : .text2xs }
    var horizontalPadding: CGFloat { self == .lg ? 13 : self == .sm ? 8 : 10 }
    var verticalPadding: CGFloat { self == .lg ? 7 : self == .sm ? 3 : 5 }
}
