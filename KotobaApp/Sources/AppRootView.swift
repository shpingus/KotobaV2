import SwiftUI
import KotobaDesignSystem
import FeatureBattle
import FeatureLesson
import FeatureOnboarding
import FeaturePath

/// App composition root wires feature screens to local learner state.
struct AppRootView: View {
    @State private var model = AppModel()

    var body: some View {
        Group {
            if model.state.onboarded {
                MainTabView(model: model, initialTab: model.initialTab)
                    .fullScreenCover(isPresented: flowPresented) {
                        flowContent
                    }
            } else {
                OnboardingView { model.completeOnboarding() }
            }
        }
    }

    private var flowPresented: Binding<Bool> {
        Binding {
            model.route.isFlow
        } set: { isPresented in
            if !isPresented, model.route.isFlow {
                model.route = .home
            }
        }
    }

    @ViewBuilder
    private var flowContent: some View {
        switch model.route {
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
                KotobaDesignSystemGallery()
            }
        case .battle:
            if let lesson = model.activeLesson {
                BossBattleView(
                    lesson: lesson,
                    onExit: { model.route = .home },
                    onWin: { model.completeBoss() }
                )
            } else {
                KotobaDesignSystemGallery()
            }
        case .gate:
            GatePassageView { model.route = .home }
        case .onboarding, .home:
            EmptyView()
        }
    }
}

#Preview {
    AppRootView()
}
