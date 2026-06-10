import XCTest
@testable import Persistence

final class PersistenceTests: XCTestCase {
    func testPersistenceSchemaStartsAtOne() {
        XCTAssertEqual(PersistenceScaffold.currentSchemaVersion, 1)
    }
}
