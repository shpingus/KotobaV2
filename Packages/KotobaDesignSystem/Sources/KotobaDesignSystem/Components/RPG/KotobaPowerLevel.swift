import SwiftUI

/// Aggregate word-power medallion; calculation remains pure engine logic.
public struct KotobaPowerLevel: View {
    private let value: Int
    private let size: KotobaPowerLevelSize
    private let label: String
    private let showLabel: Bool

    public init(value: Int, size: KotobaPowerLevelSize = .md, label: String = "Word power", showLabel: Bool = true) {
        self.value = value
        self.size = size
        self.label = label
        self.showLabel = showLabel
    }

    public var body: some View {
        HStack(spacing: KotobaSpacing.space3) {
            ZStack {
                Circle()
                    .fill(KotobaColor.power)
                    .shadow(color: KotobaColor.powerDeep, radius: 0, x: 0, y: size.edge)
                Text("力")
                    .font(KotobaFont.japaneseDisplay(size.kanjiSize, weight: .bold))
                    .foregroundStyle(.white)
            }
            .frame(width: size.medalSide, height: size.medalSide)

            VStack(alignment: .leading, spacing: 2) {
                Text("\(value)")
                    .font(KotobaFont.numeric(size.valueSize, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                if showLabel {
                    Text(label)
                        .font(KotobaFont.body(.textXs, weight: .bold))
                        .foregroundStyle(KotobaColor.textMuted)
                }
            }
        }
    }
}

public enum KotobaPowerLevelSize {
    case sm
    case md
    case lg

    var medalSide: CGFloat { self == .lg ? 64 : self == .sm ? 38 : 50 }
    var edge: CGFloat { self == .lg ? 5 : 4 }
    var kanjiSize: KotobaTextSize { self == .lg ? .text2xl : self == .sm ? .textMd : .textXl }
    var valueSize: KotobaTextSize { self == .lg ? .text3xl : self == .sm ? .textLg : .text2xl }
}
