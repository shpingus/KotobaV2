import XCTest
@testable import ContentKit

final class ContentKitTests: XCTestCase {
    func testBundledSamplePackLoadsAndValidates() throws {
        let pack = try ContentLoader.loadBundledSamplePack()

        XCTAssertEqual(pack.languageCode, "ja")
        XCTAssertEqual(pack.allLessons.count, 3)
        XCTAssertFalse(pack.allExercises.isEmpty)
    }

    func testValidatorRejectsMissingVocabularyReference() throws {
        let pack = LanguagePack(
            id: "bad",
            languageCode: "ja",
            version: 1,
            courses: [
                Course(id: "course", title: "Course", tier: .preN5, units: [
                    Unit(id: "unit", title: "Unit", lessons: [
                        Lesson(id: "lesson", title: "Lesson", focus: .reading, exercises: [
                            Exercise(id: "exercise", type: .multipleChoice, prompt: "Prompt", answer: "a", choices: ["a"], vocabularyIDs: ["missing"], stat: .reading)
                        ], rewardXP: 10)
                    ])
                ])
            ],
            vocabulary: [],
            grammarNotes: []
        )

        XCTAssertThrowsError(try PackValidator.validate(pack))
    }
}
