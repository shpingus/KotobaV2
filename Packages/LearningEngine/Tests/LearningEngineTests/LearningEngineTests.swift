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

    func testSenseiInsightFindsRepeatedConfusion() {
        let provider = HeuristicSenseiInsightProvider()
        let history = [
            SenseiAnswerRecord(exerciseID: "one", stat: .reading, givenAnswer: "nu", correctAnswer: "ne", isCorrect: false),
            SenseiAnswerRecord(exerciseID: "two", stat: .reading, givenAnswer: "nu", correctAnswer: "ne", isCorrect: false),
            SenseiAnswerRecord(exerciseID: "three", stat: .grammar, givenAnswer: "wa", correctAnswer: "ha", isCorrect: false)
        ]

        let insight = provider.insight(from: history, stats: [:])

        XCTAssertEqual(insight.title, "Practice nu and ne")
        XCTAssertEqual(insight.focusStat, .reading)
        XCTAssertEqual(insight.practiceExerciseIDs, ["one", "two"])
    }

    func testSenseiInsightFallsBackToWeakestStat() {
        let provider = HeuristicSenseiInsightProvider()

        let insight = provider.insight(from: [], stats: [.vocabulary: 20, .grammar: 4, .listening: 12, .reading: 9])

        XCTAssertEqual(insight.focusStat, .grammar)
        XCTAssertTrue(insight.title.contains("grammar"))
    }
}
