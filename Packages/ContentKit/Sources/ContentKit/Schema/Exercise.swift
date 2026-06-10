import Foundation

/// Language-neutral exercises; Japanese-specific display is handled by ScriptSupport.
public struct Exercise: Codable, Equatable, Sendable {
    public let id: ExerciseID
    public let type: ExerciseType
    public let prompt: String
    public let answer: String
    public let choices: [String]
    public let vocabularyIDs: [VocabularyID]
    public let stat: SkillStat

    public init(id: ExerciseID, type: ExerciseType, prompt: String, answer: String, choices: [String], vocabularyIDs: [VocabularyID], stat: SkillStat) {
        self.id = id
        self.type = type
        self.prompt = prompt
        self.answer = answer
        self.choices = choices
        self.vocabularyIDs = vocabularyIDs
        self.stat = stat
    }
}

public enum ExerciseType: String, Codable, CaseIterable, Sendable {
    case multipleChoice
    case matchPairs
    case typeAnswer
    case listenAndPick
    case cloze
}

public struct VocabularyItem: Codable, Equatable, Sendable {
    public let id: VocabularyID
    public let surface: String
    public let reading: String
    public let meaning: String
    public let tags: [String]

    public init(id: VocabularyID, surface: String, reading: String, meaning: String, tags: [String]) {
        self.id = id
        self.surface = surface
        self.reading = reading
        self.meaning = meaning
        self.tags = tags
    }
}

public struct GrammarNote: Codable, Equatable, Sendable {
    public let id: GrammarNoteID
    public let title: String
    public let body: String

    public init(id: GrammarNoteID, title: String, body: String) {
        self.id = id
        self.title = title
        self.body = body
    }
}
