import ContentKit
import Foundation

/// Checks answer correctness without knowing UI or storage details.
public enum AnswerEvaluator {
    public static func evaluate(answer: String, for exercise: Exercise, scriptSupport: ScriptSupport = JapaneseScriptSupport()) -> AnswerResult {
        let given = scriptSupport.normalizeAnswer(answer)
        let expected = scriptSupport.normalizeAnswer(exercise.answer)
        return AnswerResult(
            exerciseID: exercise.id.rawValue,
            stat: exercise.stat,
            givenAnswer: answer,
            correctAnswer: exercise.answer,
            isCorrect: given == expected
        )
    }
}

public struct AnswerResult: Codable, Equatable, Sendable {
    public let exerciseID: String
    public let stat: SkillStat
    public let givenAnswer: String
    public let correctAnswer: String
    public let isCorrect: Bool

    public init(exerciseID: String, stat: SkillStat, givenAnswer: String, correctAnswer: String, isCorrect: Bool) {
        self.exerciseID = exerciseID
        self.stat = stat
        self.givenAnswer = givenAnswer
        self.correctAnswer = correctAnswer
        self.isCorrect = isCorrect
    }
}
