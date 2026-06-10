import Foundation

/// Canonical language-pack shape; learner state stores references to these ids only.
public struct LanguagePack: Codable, Equatable, Sendable {
    public let id: PackID
    public let languageCode: String
    public let version: Int
    public let courses: [Course]
    public let vocabulary: [VocabularyItem]
    public let grammarNotes: [GrammarNote]

    public init(id: PackID, languageCode: String, version: Int, courses: [Course], vocabulary: [VocabularyItem], grammarNotes: [GrammarNote]) {
        self.id = id
        self.languageCode = languageCode
        self.version = version
        self.courses = courses
        self.vocabulary = vocabulary
        self.grammarNotes = grammarNotes
    }
}

public struct Course: Codable, Equatable, Sendable {
    public let id: String
    public let title: String
    public let tier: SupportedTier
    public let units: [Unit]

    public init(id: String, title: String, tier: SupportedTier, units: [Unit]) {
        self.id = id
        self.title = title
        self.tier = tier
        self.units = units
    }
}

public struct Unit: Codable, Equatable, Sendable {
    public let id: UnitID
    public let title: String
    public let lessons: [Lesson]

    public init(id: UnitID, title: String, lessons: [Lesson]) {
        self.id = id
        self.title = title
        self.lessons = lessons
    }
}

public struct Lesson: Codable, Equatable, Sendable {
    public let id: LessonID
    public let title: String
    public let focus: SkillStat
    public let exercises: [Exercise]
    public let rewardXP: Int

    public init(id: LessonID, title: String, focus: SkillStat, exercises: [Exercise], rewardXP: Int) {
        self.id = id
        self.title = title
        self.focus = focus
        self.exercises = exercises
        self.rewardXP = rewardXP
    }
}

public enum SupportedTier: String, Codable, CaseIterable, Sendable {
    case preN5
    case n5
    case n4
    case n3
    case n2
    case n1
}

public enum SkillStat: String, Codable, CaseIterable, Sendable {
    case vocabulary
    case grammar
    case listening
    case reading
}
