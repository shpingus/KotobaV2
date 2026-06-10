import XCTest
@testable import LearningEngine

final class LearningEngineTests: XCTestCase {
    func testPassingAccuracyIsConservative() {
        XCTAssertEqual(LearningEngineScaffold.minimumPassingAccuracy, 0.8)
    }
}
