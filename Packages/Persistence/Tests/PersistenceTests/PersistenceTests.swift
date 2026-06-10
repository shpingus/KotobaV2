import XCTest
import ContentKit
import LearningEngine
@testable import Persistence

final class PersistenceTests: XCTestCase {
    func testAppliesLessonSummaryToState() {
        var state = LearnerState()
        let summary = LessonSummary(lessonID: "lesson", correctCount: 1, totalCount: 1, accuracy: 1, xpAwarded: 40, statGains: [.reading: 4])
        let answer = AnswerRecord(exerciseID: "ex", stat: .reading, prompt: "Prompt", givenAnswer: "a", correctAnswer: "a", isCorrect: true)

        LearnerStateApplying.apply(summary: summary, answers: [answer], to: &state)

        XCTAssertEqual(state.totalXP, 40)
        XCTAssertTrue(state.completedLessonIDs.contains("lesson"))
        XCTAssertEqual(state.statScores[.reading], 4)
        XCTAssertEqual(state.answerHistory.count, 1)
    }

    func testStoreRoundTripsState() throws {
        let url = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString).appendingPathComponent("state.json")
        let store = LearnerStateStore(url: url)
        let state = LearnerState(onboarded: true, totalXP: 80)

        try store.save(state)
        let loaded = try store.load()

        XCTAssertEqual(loaded.onboarded, true)
        XCTAssertEqual(loaded.totalXP, 80)
    }
}
