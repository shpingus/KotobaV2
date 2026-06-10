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
    var activeLesson: Lesson?
    var lastSummary: LessonSummary?

    private let store: LearnerStateStore

    init() {
        let loadedState: LearnerState
        self.pack = (try? ContentLoader.loadBundledSamplePack()) ?? Self.emptyPack
        let url = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
            .appendingPathComponent("learner-state.json")
        self.store = LearnerStateStore(url: url)
        loadedState = (try? store.load()) ?? LearnerState()
        self.state = loadedState
        self.route = loadedState.onboarded ? .home : .onboarding
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

    func completeLesson(summary: LessonSummary, answers: [AnswerRecord]) {
        LearnerStateApplying.apply(summary: summary, answers: answers, to: &state)
        lastSummary = summary
        activeLesson = nil
        route = .results
        save()
    }

    func save() {
        try? store.save(state)
    }

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
    case profile
}
