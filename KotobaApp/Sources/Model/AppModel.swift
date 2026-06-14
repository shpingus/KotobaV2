import Foundation
import Observation
import ContentKit
import LearningEngine
import Persistence

/// Composition-root state for the local-first sample app.
@Observable
final class AppModel {
    var pack: LanguagePack
    var state: LearnerState
    var route: AppRoute
    var initialTab: MainTab
    var activeLesson: Lesson?
    var lastSummary: LessonSummary?

    private let store: LearnerStateStore
    private let senseiProvider = HeuristicSenseiInsightProvider()

    init() {
        let loadedState: LearnerState
        self.pack = (try? ContentLoader.loadBundledSamplePack()) ?? Self.emptyPack
        let url = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("learner-state.json")
        self.store = LearnerStateStore(url: url)
        loadedState = (try? store.load()) ?? LearnerState()
        self.state = loadedState
        self.route = loadedState.onboarded ? .home : .onboarding
        self.initialTab = .learn

        #if DEBUG
        applyDebugLaunchArguments()
        #endif
    }

    func completeOnboarding() {
        state.onboarded = true
        route = .home
        save()
    }

    func startLesson(_ lesson: Lesson) {
        activeLesson = lesson
        route = .lesson
    }

    func startPractice() {
        guard let lesson = currentLesson ?? pack.allLessons.first else { return }
        startLesson(lesson)
    }

    func completeLesson(summary: LessonSummary, answers: [AnswerRecord]) {
        LearnerStateApplying.apply(summary: summary, answers: answers, to: &state)
        lastSummary = summary
        activeLesson = nil
        route = .results
        save()
    }

    func startBoss() {
        activeLesson = currentLesson ?? pack.allLessons.first
        route = .battle
    }

    func completeBoss() {
        state.defeatedBossIDs.insert("sample-kana-boss")
        state.totalXP += 30
        activeLesson = nil
        route = .gate
        save()
    }

    func save() {
        try? store.save(state)
    }

    var senseiInsight: SenseiInsight {
        let history = state.answerHistory.map {
            SenseiAnswerRecord(
                exerciseID: $0.exerciseID,
                stat: $0.stat,
                givenAnswer: $0.givenAnswer,
                correctAnswer: $0.correctAnswer,
                isCorrect: $0.isCorrect
            )
        }
        return senseiProvider.insight(from: history, stats: state.statScores)
    }

    private var currentLesson: Lesson? {
        pack.allLessons.first { !state.completedLessonIDs.contains($0.id.rawValue) } ?? pack.allLessons.last
    }

    #if DEBUG
    private func applyDebugLaunchArguments() {
        let arguments = ProcessInfo.processInfo.arguments
        guard let routeName = arguments.value(after: "-kotobaRoute") else { return }
        if arguments.contains("-kotobaDemoState") {
            state = Self.demoState
        }

        if routeName != "onboarding" {
            state.onboarded = true
        }

        switch routeName {
        case "onboarding":
            state.onboarded = false
            route = .onboarding
        case "lesson":
            activeLesson = currentLesson
            route = .lesson
        case "results":
            lastSummary = LessonSummary(lessonID: "l-a-row", correctCount: 3, totalCount: 3, accuracy: 1, xpAwarded: 40, statGains: [.reading: 12])
            route = .results
        case "battle":
            activeLesson = currentLesson
            route = .battle
        case "gate":
            route = .gate
        case "practice":
            initialTab = .practice
            route = .home
        case "spirit":
            initialTab = .spirit
            route = .home
        case "profile":
            initialTab = .spirit
            route = .home
        default:
            route = .home
        }
    }

    private static let demoState = LearnerState(
        onboarded: true,
        totalXP: 80,
        completedLessonIDs: ["l-a-row"],
        statScores: [.reading: 28, .vocabulary: 16, .grammar: 20, .listening: 8],
        answerHistory: [
            AnswerRecord(exerciseID: "ex-konnichiwa", stat: .vocabulary, prompt: "What does こんにちは mean?", givenAnswer: "thank you", correctAnswer: "hello", isCorrect: false),
            AnswerRecord(exerciseID: "ex-konnichiwa", stat: .vocabulary, prompt: "What does こんにちは mean?", givenAnswer: "thank you", correctAnswer: "hello", isCorrect: false),
            AnswerRecord(exerciseID: "ex-a-reading", stat: .reading, prompt: "Pick the reading for あ", givenAnswer: "a", correctAnswer: "a", isCorrect: true)
        ],
        sessionDays: [Date()],
        defeatedBossIDs: []
    )
    #endif

    private static let emptyPack = LanguagePack(
        id: "empty",
        languageCode: "ja",
        version: 1,
        courses: [],
        vocabulary: [],
        grammarNotes: []
    )
}

enum AppRoute {
    case onboarding
    case home
    case lesson
    case results
    case battle
    case gate

    var isFlow: Bool {
        switch self {
        case .lesson, .results, .battle, .gate:
            true
        case .onboarding, .home:
            false
        }
    }
}

#if DEBUG
private extension Array where Element == String {
    func value(after key: String) -> String? {
        guard let index = firstIndex(of: key) else { return nil }
        let valueIndex = self.index(after: index)
        return indices.contains(valueIndex) ? self[valueIndex] : nil
    }
}
#endif
