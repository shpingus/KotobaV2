import ContentKit
import Foundation

/// Produces adaptive coaching from answer history without owning UI or persistence.
public protocol SenseiInsightProvider {
    func insight(from history: [SenseiAnswerRecord], stats: [SkillStat: Int]) -> SenseiInsight
}

public struct SenseiInsight: Equatable, Sendable {
    public let title: String
    public let message: String
    public let focusStat: SkillStat?
    public let practiceExerciseIDs: [String]

    public init(title: String, message: String, focusStat: SkillStat?, practiceExerciseIDs: [String] = []) {
        self.title = title
        self.message = message
        self.focusStat = focusStat
        self.practiceExerciseIDs = practiceExerciseIDs
    }
}

public struct SenseiAnswerRecord: Equatable, Sendable {
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

public struct HeuristicSenseiInsightProvider: SenseiInsightProvider {
    public init() {}

    public func insight(from history: [SenseiAnswerRecord], stats: [SkillStat: Int]) -> SenseiInsight {
        if let pair = confusedPair(from: history) {
            return SenseiInsight(
                title: "Practice \(pair.given) and \(pair.correct)",
                message: "You mixed these up \(pair.count) times. A short review will make the next lesson smoother.",
                focusStat: pair.stat,
                practiceExerciseIDs: pair.exerciseIDs
            )
        }

        if let weakest = weakestStat(from: history, stats: stats) {
            return SenseiInsight(
                title: "Build \(weakest.name.lowercased()) today",
                message: "Your \(weakest.name.lowercased()) score is the lowest right now. Try one focused set before moving on.",
                focusStat: weakest
            )
        }

        return SenseiInsight(
            title: "Start with two minutes",
            message: "One tiny set is enough to keep Japanese active today.",
            focusStat: nil
        )
    }

    private func confusedPair(from history: [SenseiAnswerRecord]) -> (given: String, correct: String, count: Int, stat: SkillStat, exerciseIDs: [String])? {
        let wrong = history.filter { !$0.isCorrect && !$0.givenAnswer.isEmpty }
        let grouped = Dictionary(grouping: wrong) { "\($0.givenAnswer.lowercased())|\($0.correctAnswer.lowercased())" }

        return grouped.values
            .map { records in
                let first = records[0]
                return (
                    given: first.givenAnswer,
                    correct: first.correctAnswer,
                    count: records.count,
                    stat: first.stat,
                    exerciseIDs: Array(records.map(\.exerciseID).prefix(3))
                )
            }
            .filter { $0.count >= 2 }
            .max { $0.count < $1.count }
    }

    private func weakestStat(from history: [SenseiAnswerRecord], stats: [SkillStat: Int]) -> SkillStat? {
        if let weakestAccuracy = weakestAccuracyStat(from: history) {
            return weakestAccuracy
        }
        return SkillStat.allCases.min { stats[$0, default: 0] < stats[$1, default: 0] }
    }

    private func weakestAccuracyStat(from history: [SenseiAnswerRecord]) -> SkillStat? {
        let grouped = Dictionary(grouping: history, by: \.stat)
        return grouped
            .filter { $0.value.count >= 2 }
            .min { accuracy($0.value) < accuracy($1.value) }?
            .key
    }

    private func accuracy(_ records: [SenseiAnswerRecord]) -> Double {
        Double(records.filter(\.isCorrect).count) / Double(records.count)
    }
}

private extension SkillStat {
    var name: String {
        switch self {
        case .vocabulary: "Vocabulary"
        case .grammar: "Grammar"
        case .listening: "Listening"
        case .reading: "Reading"
        }
    }
}
