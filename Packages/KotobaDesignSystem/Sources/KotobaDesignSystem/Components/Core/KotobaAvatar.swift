import SwiftUI

/// Circular initials avatar with optional progress ring; image loading stays outside this package.
public struct KotobaAvatar: View {
    private let name: String
    private let size: KotobaAvatarSize
    private let ringPercent: Double?

    public init(name: String, size: KotobaAvatarSize = .md, ringPercent: Double? = nil) {
        self.name = name
        self.size = size
        self.ringPercent = ringPercent
    }

    public var body: some View {
        ZStack {
            if let ringPercent {
                Circle()
                    .stroke(KotobaColor.surfaceSunken, lineWidth: 4)
                Circle()
                    .trim(from: 0, to: max(0, min(1, ringPercent / 100)))
                    .stroke(KotobaColor.accent, style: StrokeStyle(lineWidth: 4, lineCap: .round))
                    .rotationEffect(.degrees(-90))
            }

            Circle()
                .fill(KotobaColor.brandSoft)
                .padding(ringPercent == nil ? 0 : 6)

            Text(initials)
                .font(KotobaFont.display(size.textSize, weight: .bold))
                .foregroundStyle(KotobaColor.brandStrong)
        }
        .frame(width: size.side, height: size.side)
        .accessibilityLabel(name)
    }

    private var initials: String {
        name.split(separator: " ")
            .prefix(2)
            .compactMap(\.first)
            .map { String($0).uppercased() }
            .joined()
    }
}

public enum KotobaAvatarSize {
    case sm
    case md
    case lg
    case xl

    var side: CGFloat { self == .xl ? 88 : self == .lg ? 64 : self == .sm ? 36 : 48 }
    var textSize: KotobaTextSize { self == .xl ? .text2xl : self == .lg ? .textXl : self == .sm ? .textXs : .textMd }
}
