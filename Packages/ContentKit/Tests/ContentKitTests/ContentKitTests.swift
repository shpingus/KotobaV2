import XCTest
@testable import ContentKit

final class ContentKitTests: XCTestCase {
    func testSchemaVersionStartsAtOne() {
        XCTAssertEqual(ContentKitScaffold.schemaVersion, 1)
    }
}
