import Foundation

/// Strict pack validation for bundled and converted content.
public enum PackValidator {
    public static func validate(_ pack: LanguagePack) throws {
        var ids = Set<String>()
        try require(!pack.id.rawValue.isEmpty, "Pack id is empty")
        try require(pack.languageCode == "ja", "Only Japanese packs are supported in v1")
        try require(!pack.courses.isEmpty, "Pack has no courses")

        let vocabularyIDs = Set(pack.vocabulary.map(\.id))
        try require(vocabularyIDs.count == pack.vocabulary.count, "Duplicate vocabulary id")

        for course in pack.courses {
            try require(!course.units.isEmpty, "Course \(course.id) has no units")
            for unit in course.units {
                try unique(unit.id.rawValue, in: &ids)
                try require(!unit.lessons.isEmpty, "Unit \(unit.id.rawValue) has no lessons")
                for lesson in unit.lessons {
                    try unique(lesson.id.rawValue, in: &ids)
                    try require(!lesson.exercises.isEmpty, "Lesson \(lesson.id.rawValue) has no exercises")
                    try require(lesson.rewardXP > 0, "Lesson \(lesson.id.rawValue) has no XP reward")
                }
            }
        }

        let exercises = pack.allExercises
        let exerciseIDs = Set(exercises.map(\.id))
        try require(exerciseIDs.count == exercises.count, "Duplicate exercise id")

        for exercise in exercises {
            try require(!exercise.prompt.isEmpty, "Exercise \(exercise.id.rawValue) has empty prompt")
            try require(!exercise.answer.isEmpty, "Exercise \(exercise.id.rawValue) has empty answer")
            for vocabularyID in exercise.vocabularyIDs {
                try require(vocabularyIDs.contains(vocabularyID), "Exercise \(exercise.id.rawValue) references missing vocabulary \(vocabularyID.rawValue)")
            }
        }
    }

    private static func unique(_ id: String, in ids: inout Set<String>) throws {
        try require(!id.isEmpty, "Content id is empty")
        try require(ids.insert(id).inserted, "Duplicate content id \(id)")
    }

    private static func require(_ condition: Bool, _ message: String) throws {
        if !condition { throw PackValidationError(message) }
    }
}

public struct PackValidationError: Error, Equatable, LocalizedError {
    public let message: String
    public var errorDescription: String? { message }

    public init(_ message: String) {
        self.message = message
    }
}

public extension LanguagePack {
    var allLessons: [Lesson] {
        courses.flatMap(\.units).flatMap(\.lessons)
    }

    var allExercises: [Exercise] {
        allLessons.flatMap(\.exercises)
    }
}
