import SwiftUI

/// JLPT tier marker with optional progress within that tier.
public struct KotobaLevelBadge: View {
    private let tier: KotobaTier
    private let size: KotobaLevelBadgeSize
    private let soft: Bool
    private let showCaption: Bool
    private let progress: Double?

    public init(tier: KotobaTier, size: KotobaLevelBadgeSize = .md, soft: Bool = false, showCaption: Bool = true, progress: Double? = nil) {
        self.tier = tier
        self.size = size
        self.soft = soft
        self.showCaption = showCaption
        self.progress = progress
    }

    public var body: some View {
        ZStack {
            Circle()
                .fill(soft ? KotobaColor.tier(tier).opacity(0.16) : KotobaColor.tier(tier))

            if let progress {
                progressRing(progress)
            } else if soft {
                Circle()
                    .stroke(KotobaColor.tier(tier).opacity(0.35), lineWidth: KotobaBorder.base)
            }

            VStack(spacing: 2) {
                if showCaption && tier != .preN5 {
                    Text("JLPT")
                        .font(KotobaFont.body(size.captionSize, weight: .bold))
                        .tracking(0.8)
                        .opacity(0.85)
                }

                Text(tier.label)
                    .font(KotobaFont.display(size.textSize, weight: .bold))
            }
            .foregroundStyle(soft ? KotobaColor.tier(tier) : .white)
        }
        .frame(width: size.side, height: size.side)
    }

    private func progressRing(_ progress: Double) -> some View {
        let clamped = CGFloat(min(1, max(0, progress / 100)))
        let color = soft ? KotobaColor.tier(tier) : Color.white

        return ZStack {
            Circle()
                .stroke(color.opacity(0.24), lineWidth: size.ringWidth)
            Circle()
                .trim(from: 0, to: clamped)
                .stroke(
                    color.opacity(0.92),
                    style: StrokeStyle(lineWidth: size.ringWidth, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))
        }
        .padding(size.ringInset)
    }
}

public enum KotobaLevelBadgeSize {
    case sm
    case md
    case lg

    var side: CGFloat { self == .lg ? 96 : self == .sm ? 40 : 60 }
    var textSize: KotobaTextSize { self == .lg ? .text3xl : self == .sm ? .textSm : .textXl }
    var captionSize: KotobaTextSize { self == .lg ? .textXs : .text3xs }
    var ringWidth: CGFloat { self == .sm ? 3 : 4 }
    var ringInset: CGFloat { ringWidth / 2 }
}

private extension KotobaTier {
    var label: String {
        switch self {
        case .preN5: "Pre"
        case .n5: "N5"
        case .n4: "N4"
        case .n3: "N3"
        case .n2: "N2"
        case .n1: "N1"
        }
    }
}
