import SwiftUI

/// One RPG-styled skill stat; values come from LearningEngine aggregation.
public struct KotobaStatBar: View {
    private let label: String
    private let jp: String
    private let value: Double
    private let max: Double
    private let tone: KotobaComponentTone
    private let weak: Bool

    public init(label: String, jp: String, value: Double, max: Double = 100, tone: KotobaComponentTone = .brand, weak: Bool = false) {
        self.label = label
        self.jp = jp
        self.value = value
        self.max = max
        self.tone = tone
        self.weak = weak
    }

    public var body: some View {
        HStack(spacing: KotobaSpacing.space3) {
            Text(jp)
                .font(KotobaFont.japaneseDisplay(.textMd, weight: .bold))
                .foregroundStyle(tone.ink)
                .frame(width: 42, height: 42)
                .background(tone.softFill)
                .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))

            VStack(alignment: .leading, spacing: 6) {
                HStack {
                    Text(label)
                        .font(KotobaFont.body(.textSm, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                    if weak {
                        KotobaBadge("Focus", tone: .torii, size: .sm)
                    }
                    Spacer()
                    Text("\(Int(value))")
                        .font(KotobaFont.numeric(.textSm, weight: .bold))
                        .foregroundStyle(KotobaColor.textMuted)
                }

                GeometryReader { proxy in
                    Capsule()
                        .fill(KotobaColor.surfaceSunken)
                        .overlay(alignment: .leading) {
                            Capsule()
                                .fill(weak ? KotobaColor.torii : tone.fill)
                                .frame(width: proxy.size.width * progress)
                        }
                }
                .frame(height: 9)
            }
        }
    }

    private var progress: CGFloat {
        guard max > 0 else { return 0 }
        return CGFloat(Swift.min(1, Swift.max(0, value / max)))
    }
}
