import SwiftUI

/// Kotodama companion sprite; evolution state comes from learner progress elsewhere.
public struct KotobaCompanion: View {
    private let stage: KotobaCompanionStage
    private let size: CGFloat
    private let floating: Bool

    public init(stage: KotobaCompanionStage = .newborn, size: CGFloat = 72, floating: Bool = false) {
        self.stage = stage
        self.size = size
        self.floating = floating
    }

    public var body: some View {
        KotobaPixelSprite(matrix: stage.matrix, palette: CompanionPalette.colors, size: size)
            .offset(y: floating ? -4 : 0)
    }
}

public enum KotobaCompanionStage: Int {
    case newborn = 1
    case traveler = 2
    case guardian = 3

    var matrix: [String] {
        switch self {
        case .newborn: Self.stage1
        case .traveler: Self.stage2
        case .guardian: Self.stage3
        }
    }

    private static let stage1 = [
        "....OOOO....", "..OOBBBBOO..", ".OBBLBLBBBO.", ".OBBBBBBBBO.",
        ".OBWWBBWWBO.", ".OBWKBBWKBO.", "OBRBBOOBBRBO", "OBBBBBBBBBBO",
        ".OBBBBBBBBO.", ".OBBBBBBBBO.", "..OBBOOBBO..", "...OBO.OBO..", "....O...O..."
    ]

    private static let stage2 = [
        "....OOOO....", "..OOBBBBOO..", ".OBBLBLBBBO.", ".OBBBBBBBBO.",
        ".OBWWBBWWBO.", ".OBWKBBWKBO.", "OBBBBOOBBBBO", "OBBBBBBBBBBO",
        ".OSSSSSSSSO.", ".OSSDDDDSSO.", "..OBBOOBSSO.", "...OBO.OSO..", "....O...O..."
    ]

    private static let stage3 = [
        ".G..OOOO..G.", "..OOBBBBOO..", ".OBBLBLBBBO.", ".OGGGGGGGGO.",
        ".OBWWBBWWBO.", ".OBWKBBWKBO.", "OBBBBOOBBBBO", "OBBBBBBBBBBO",
        ".OSSSSSSSSO.", ".OSSDDDDSSO.", "G.OBBOOBSSO.", "...OBO.OSO..", "....O...O..."
    ]
}

private enum CompanionPalette {
    static let colors: [Character: Color] = [
        "O": Color(hex: 0x1F284F), "B": Color(hex: 0x4F61BE), "L": Color(hex: 0x94A2DF),
        "W": .white, "K": KotobaColor.textStrong, "S": KotobaColor.accent,
        "D": KotobaColor.accentStrong, "G": Color(hex: 0xECBC49), "R": Color(hex: 0xFFC2A8)
    ]
}
