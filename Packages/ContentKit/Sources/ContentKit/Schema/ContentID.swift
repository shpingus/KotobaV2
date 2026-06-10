import Foundation

/// Typed content identifiers prevent accidental cross-entity string use.
public struct ContentID<Tag>: RawRepresentable, Codable, Hashable, Sendable, ExpressibleByStringLiteral {
    public let rawValue: String

    public init(rawValue: String) {
        self.rawValue = rawValue
    }

    public init(stringLiteral value: String) {
        self.rawValue = value
    }
}

public enum PackIDTag {}
public enum UnitIDTag {}
public enum LessonIDTag {}
public enum ExerciseIDTag {}
public enum VocabularyIDTag {}
public enum GrammarNoteIDTag {}

public typealias PackID = ContentID<PackIDTag>
public typealias UnitID = ContentID<UnitIDTag>
public typealias LessonID = ContentID<LessonIDTag>
public typealias ExerciseID = ContentID<ExerciseIDTag>
public typealias VocabularyID = ContentID<VocabularyIDTag>
public typealias GrammarNoteID = ContentID<GrammarNoteIDTag>
