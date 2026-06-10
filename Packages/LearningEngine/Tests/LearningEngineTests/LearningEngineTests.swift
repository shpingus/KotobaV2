import XCTest
import ContentKit
@testable import LearningEngine

final class LearningEngineTests: XCTestCase {
    func testAnswerEvaluatorNormalizesAnswer() throws {
        let exercise = Exercise(id: "ex", type: .typeAnswer, prompt: "Reading", answer: "mizu", choices: [], vocabularyIDs: [], stat: .reading)

        let result = AnswerEvaluator.evaluate(answer: " MIZU ", for: exercise)

        XCTAssertTrue(result.isCorrect)
    }

    func testLessonScoringAwardsPartialXPAndStats() throws {
        let lesson = Lesson(id: "lesson", title: "Lesson", focus: .reading, exercises: [
            Exercise(id: "one", type: .multipleChoice, prompt: "One", answer: "a", choices: [], vocabularyIDs: [], stat: .reading),
            Exercise(id: "two", type: .multipleChoice, prompt: "Two", answer: "i", choices: [], vocabularyIDs: [], stat: .reading)
        ], rewardXP: 40)

        let summary = LessonScoring.summary(for: lesson, answers: [
            AnswerResult(exerciseID: "one", stat: .reading, givenAnswer: "a", correctAnswer: "a", isCorrect: true),
            AnswerResult(exerciseID: "two", stat: .reading, givenAnswer: "u", correctAnswer: "i", isCorrect: false)
        ])

        XCTAssertEqual(summary.xpAwarded, 20)
        XCTAssertEqual(summary.statGains[.reading], 4)
    }

    func testBattleRulesWinAfterEnoughCorrectAnswers() {
        var state = BattleRules.start(bossHP: 2, hearts: 3)
        let answer = AnswerResult(exerciseID: "ex", stat: .reading, givenAnswer: "a", correctAnswer: "a", isCorrect: true)

        state = BattleRules.apply(answer: answer, to: state)
        state = BattleRules.apply(answer: answer, to: state)

        XCTAssertEqual(state.status, .won)
    }

    func testStreakCalculatorCountsConsecutiveDays() throws {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(secondsFromGMT: 0)!
        let today = Date(timeIntervalSince1970: 86_400 * 10)
        let yesterday = Date(timeIntervalSince1970: 86_400 * 9)

        XCTAssertEqual(StreakCalculator.streak(on: today, sessions: [today, yesterday], calendar: calendar), 2)
    }
}
