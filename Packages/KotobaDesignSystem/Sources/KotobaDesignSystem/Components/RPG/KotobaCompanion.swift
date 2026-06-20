import Foundation
import SwiftUI

/// Kotodama companion sprite; evolution state comes from learner progress elsewhere.
public struct KotobaCompanion: View {
    private let stage: KotobaCompanionStage
    private let size: CGFloat
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    public init(stage: KotobaCompanionStage = .newborn, size: CGFloat = 72, floating: Bool = false) {
        self.stage = stage
        self.size = size
    }

    public var body: some View {
        if reduceMotion {
            sprite(matrix: stage.matrix)
                .offset(y: KotobaCompanionIdleSpritemap.reducedMotionYOffsetRatio * size)
        } else {
            TimelineView(.animation) { context in
                let elapsed = context.date.timeIntervalSinceReferenceDate
                let frame = KotobaCompanionIdleSpritemap.frame(
                    for: stage,
                    elapsed: elapsed
                )
                sprite(matrix: frame.matrix)
                    .offset(y: breathingYOffset(elapsed: elapsed))
            }
        }
    }

    private func sprite(matrix: [String]) -> some View {
        KotobaPixelSprite(matrix: matrix, palette: CompanionPalette.colors, size: size)
    }

    private func breathingYOffset(elapsed: TimeInterval) -> CGFloat {
        let phase = elapsed / KotobaCompanionIdleSpritemap.cycleDuration * .pi * 2
        let ratio = KotobaCompanionIdleSpritemap.breathingRestYOffsetRatio
            - KotobaCompanionIdleSpritemap.breathingAmplitudeRatio * CGFloat(sin(phase))
        return ratio * size
    }
}

public enum KotobaCompanionStage: Int {
    case newborn = 1
    case traveler = 2
    case guardian = 3

    var matrix: [String] {
        KotobaCompanionIdleSpritemap.still(for: self)
    }
}

private enum CompanionPalette {
    static let colors: [Character: Color] = [
        "O": Color(hex: 0x1F284F), "B": Color(hex: 0x4F61BE), "L": Color(hex: 0x94A2DF),
        "W": .white, "K": KotobaColor.textStrong, "S": KotobaColor.accent,
        "D": KotobaColor.accentStrong, "G": Color(hex: 0xECBC49), "R": Color(hex: 0xFFC2A8)
    ]
}
