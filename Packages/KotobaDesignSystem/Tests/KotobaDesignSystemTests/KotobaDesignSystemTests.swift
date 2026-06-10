import XCTest
@testable import KotobaDesignSystem

final class KotobaDesignSystemTests: XCTestCase {
    func testTierTokenCountMatchesJlptPath() {
        XCTAssertEqual(KotobaTier.allCases.count, 6)
    }
}
