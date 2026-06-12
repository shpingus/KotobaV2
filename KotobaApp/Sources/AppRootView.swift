import SwiftUI
import KotobaDesignSystem
import FeatureBattle
import FeatureLesson
import FeatureOnboarding
import FeaturePath
import FeatureProfile
import FeatureSpirit

/// App composition root wires feature screens to local learner state.
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
                    senseiInsight: model.senseiInsight,
                    onStartLesson: { model.startLesson($0) },
                    onStartBoss: { model.startBoss() },
                    onShowGate: { model.route = .gate },
                    onShowSpirit: { model.route = .spirit },
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
                    home
                }
            case .battle:
                if let lesson = model.activeLesson {
                    BossBattleView(
                        lesson: lesson,
                        onExit: { model.route = .home },
                        onWin: { model.completeBoss() }
                    )
                } else {
                    home
                }
            case .gate:
                GatePassageView { model.route = .home }
            case .spirit:
                SpiritView(state: model.state) { model.route = .home }
            case .profile:
                ProfileView(state: model.state) { model.route = .home }
            }
        }
    }

    private var home: some View {
        PathHomeView(
            pack: model.pack,
            state: model.state,
            senseiInsight: model.senseiInsight,
            onStartLesson: { model.startLesson($0) },
            onStartBoss: { model.startBoss() },
            onShowGate: { model.route = .gate },
            onShowSpirit: { model.route = .spirit },
            onShowProfile: { model.route = .profile }
        )
    }
}

#Preview {
    AppRootView()
}
