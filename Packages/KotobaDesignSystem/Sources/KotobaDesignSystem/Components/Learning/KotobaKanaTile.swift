import SwiftUI

/// Character study tile for kana, kanji, and quiz answer states.
public struct KotobaKanaTile: View {
    private let glyph: String
    private let reading: String?
    private let meaning: String?
    private let size: KotobaKanaTileSize
    private let state: KotobaKanaTileState
    private let interactive: Bool

    public init(
        glyph: String,
        reading: String? = nil,
        meaning: String? = nil,
        size: KotobaKanaTileSize = .md,
        state: KotobaKanaTileState = .default,
        interactive: Bool = true
    ) {
        self.glyph = glyph
        self.reading = reading
        self.meaning = meaning
        self.size = size
        self.state = state
        self.interactive = interactive
    }

    public var body: some View {
        VStack(spacing: KotobaSpacing.space1) {
            Text(glyph)
                .font(KotobaFont.japaneseDisplay(size.glyphSize, weight: .bold))
                .foregroundStyle(state.glyphColor)
                .lineLimit(1)
                .minimumScaleFactor(0.7)

            if let reading {
                Text(reading)
                    .font(KotobaFont.numeric(.textSm, weight: .semibold))
                    .foregroundStyle(state.readingColor)
            }

            if let meaning {
                Text(meaning)
                    .font(KotobaFont.body(.textXs))
                    .foregroundStyle(KotobaColor.textMuted)
            }
        }
        .frame(minWidth: size.minWidth, minHeight: size.minHeight)
        .padding(.horizontal, size.horizontalPadding)
        .background(state.fill)
        .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: KotobaRadius.lg, style: .continuous)
                .stroke(state.border, lineWidth: KotobaBorder.base)
        }
        .shadow(color: state.edge, radius: 0, x: 0, y: interactive ? KotobaMotion.pressDepth : KotobaMotion.pressDepth)
    }
}

public enum KotobaKanaTileSize {
    case sm
    case md
    case lg

    var glyphSize: KotobaTextSize { self == .lg ? .text5xl : self == .sm ? .text2xl : .text4xl }
    var minWidth: CGFloat { self == .lg ? 112 : self == .sm ? 68 : 84 }
    var minHeight: CGFloat { self == .lg ? 118 : self == .sm ? 76 : 94 }
    var horizontalPadding: CGFloat { self == .lg ? 22 : 18 }
}

public enum KotobaKanaTileState {
    case `default`
    case selected
    case correct
    case wrong

    var fill: Color {
        switch self {
        case .default: KotobaColor.surfaceCard
        case .selected: KotobaColor.brandSoft
        case .correct: KotobaColor.successSoft
        case .wrong: KotobaColor.dangerSoft
        }
    }

    var border: Color {
        switch self {
        case .default: KotobaColor.borderDefault
        case .selected: KotobaColor.borderBrand
        case .correct: KotobaColor.success
        case .wrong: KotobaColor.danger
        }
    }

    var edge: Color {
        switch self {
        case .default: KotobaColor.surfaceEdge
        case .selected: KotobaColor.brandSoft
        case .correct: KotobaColor.successSoft
        case .wrong: KotobaColor.dangerSoft
        }
    }

    var glyphColor: Color { self == .wrong ? KotobaColor.dangerEdge : KotobaColor.textStrong }
    var readingColor: Color { self == .correct ? KotobaColor.successEdge : KotobaColor.brandStrong }
}
