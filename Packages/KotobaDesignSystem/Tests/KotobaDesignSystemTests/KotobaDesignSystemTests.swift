import XCTest
@testable import KotobaDesignSystem

final class KotobaDesignSystemTests: XCTestCase {
    func testTierTokenCountMatchesJlptPath() {
        XCTAssertEqual(KotobaTier.allCases.count, 6)
    }

    func testCompanionIdleSpritemapUsesStableGeometryAndPalette() {
        let stages: [KotobaCompanionStage] = [.newborn, .traveler, .guardian]
        let allowedSymbols = Set(".OBLWKSDGR")

        for stage in stages {
            let frames = KotobaCompanionIdleSpritemap.frames(for: stage)
            XCTAssertEqual(frames.count, 7)
            XCTAssertEqual(frames[0].matrix, stage.matrix)

            for frame in frames {
                XCTAssertEqual(frame.matrix.count, 13)
                XCTAssertGreaterThan(frame.duration, 0)
                XCTAssertEqual(frame.yOffsetRatio, 0)

                for row in frame.matrix {
                    XCTAssertEqual(row.count, 12)
                    XCTAssertTrue(Set(row).isSubset(of: allowedSymbols))
                }
            }
        }
    }

    func testCompanionIdleBreathingUsesSubtleContinuousMotionEnvelope() {
        XCTAssertLessThan(KotobaCompanionIdleSpritemap.breathingAmplitudeRatio, 0.04)
        XCTAssertGreaterThan(KotobaCompanionIdleSpritemap.breathingAmplitudeRatio, 0.02)
    }

    func testCompanionIdleSpritemapAdvancesThroughBlinkFrame() {
        let blinkFrame = KotobaCompanionIdleSpritemap.frame(for: .traveler, elapsed: 0.77)

        XCTAssertEqual(blinkFrame.matrix[4], ".OBKKBBKKBO.")
        XCTAssertEqual(blinkFrame.matrix[5], ".OBBBBBBBBO.")
    }
}
