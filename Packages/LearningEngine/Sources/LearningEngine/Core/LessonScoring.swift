import ContentKit
import Foundation

/// Converts exercise answers into lesson rewards and stat gains.
public enum LessonScoring {
    public static func summary(for lesson: Lesson, answers: [AnswerResult]) -> LessonSummary {
        let correct = answers.filter(\.isCorrect).count
        let total = max(lesson.exercises.count, 1)
        let accuracy = Double(correct) / Double(total)
        let xp = Int((Double(lesson.rewardXP) * accuracy).rounded())
        var statGains: [SkillStat: Int] = [:]

        for answer in answers where answer.isCorrect {
            statGains[answer.stat, default: 0] += 4
        }

        return LessonSummary(
            lessonID: lesson.id.rawValue,
            correctCount: correct,
            totalCount: total,
            accuracy: accuracy,
            xpAwarded: max(correct > 0 ? 10 : 0, xp),
            statGains: statGains
        )
    }
}

public struct LessonSummary: Codable, Equatable, Sendable {
    public let lessonID: String
    public let correctCount: Int
    public let totalCount: Int
    public let accuracy: Double
    public let xpAwarded: Int
    public let statGains: [SkillStat: Int]

    public init(lessonID: String, correctCount: Int, totalCount: Int, accuracy: Double, xpAwarded: Int, statGains: [SkillStat: Int]) {
        self.lessonID = lessonID
        self.correctCount = correctCount
        self.totalCount = totalCount
        self.accuracy = accuracy
        self.xpAwarded = xpAwarded
        self.statGains = statGains
    }
}
