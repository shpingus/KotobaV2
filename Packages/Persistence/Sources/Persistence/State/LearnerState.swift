import ContentKit
import Foundation
import LearningEngine

/// Versioned learner state; content is referenced by id and never embedded.
public struct LearnerState: Codable, Equatable, Sendable {
    public var schemaVersion: Int
    public var onboarded: Bool
    public var totalXP: Int
    public var completedLessonIDs: Set<String>
    public var statScores: [SkillStat: Int]
    public var answerHistory: [AnswerRecord]
    public var sessionDays: [Date]
    public var defeatedBossIDs: Set<String>

    public init(
        schemaVersion: Int = PersistenceSchema.currentVersion,
        onboarded: Bool = false,
        totalXP: Int = 0,
        completedLessonIDs: Set<String> = [],
        statScores: [SkillStat: Int] = [:],
        answerHistory: [AnswerRecord] = [],
        sessionDays: [Date] = [],
        defeatedBossIDs: Set<String> = []
    ) {
        self.schemaVersion = schemaVersion
        self.onboarded = onboarded
        self.totalXP = totalXP
        self.completedLessonIDs = completedLessonIDs
        self.statScores = statScores
        self.answerHistory = answerHistory
        self.sessionDays = sessionDays
        self.defeatedBossIDs = defeatedBossIDs
    }
}

public struct AnswerRecord: Codable, Equatable, Sendable {
    public let exerciseID: String
    public let stat: SkillStat
    public let prompt: String
    public let givenAnswer: String
    public let correctAnswer: String
    public let isCorrect: Bool
    public let answeredAt: Date

    public init(exerciseID: String, stat: SkillStat, prompt: String, givenAnswer: String, correctAnswer: String, isCorrect: Bool, answeredAt: Date = Date()) {
        self.exerciseID = exerciseID
        self.stat = stat
        self.prompt = prompt
        self.givenAnswer = givenAnswer
        self.correctAnswer = correctAnswer
        self.isCorrect = isCorrect
        self.answeredAt = answeredAt
    }
}

public enum PersistenceSchema {
    public static let currentVersion = 1
}
