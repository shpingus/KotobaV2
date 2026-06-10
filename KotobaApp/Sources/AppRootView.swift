import SwiftUI
import KotobaDesignSystem
import FeatureLesson
import FeatureOnboarding
import FeaturePath
import FeatureProfile

/// Phase 1 shell renders the design-system gallery until product navigation exists.
struct AppRootView: View {
    @State private var model = AppModel()

    var body: some View {
        Group {
            switch model.route {
            case .onboarding:
                OnboardingView { model.completeOnboarding() }
            case .home:
                PathHomeView(
                    pack: model.pack,
                    state: model.state,
                    onStartLesson: { model.startLesson($0) },
                    onShowProfile: { model.route = .profile }
                )
            case .lesson:
                if let lesson = model.activeLesson {
                    LessonFlowView(
                        lesson: lesson,
                        onExit: { model.route = .home },
                        onComplete: { summary, answers in model.completeLesson(summary: summary, answers: answers) }
                    )
                } else {
                    KotobaDesignSystemGallery()
                }
            case .results:
                if let summary = model.lastSummary {
                    ResultsView(summary: summary) { model.route = .home }
                } else {
                    PathHomeView(pack: model.pack, state: model.state, onStartLesson: { model.startLesson($0) }, onShowProfile: { model.route = .profile })
                }
            case .profile:
                ProfileView(state: model.state) { model.route = .home }
            }
        }
    }
}

#Preview {
    AppRootView()
}
