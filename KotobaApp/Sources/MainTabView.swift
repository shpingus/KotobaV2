import SwiftUI
import FeaturePath
import FeatureProfile
import FeatureSpirit
import KotobaDesignSystem

/// Persistent shell for the three root app destinations.
struct MainTabView: View {
    let model: AppModel
    @State private var selectedTab: MainTab

    init(model: AppModel, initialTab: MainTab = .learn) {
        self.model = model
        self._selectedTab = State(initialValue: initialTab)
    }

    var body: some View {
        VStack(spacing: KotobaSpacing.space0) {
            content
                .frame(maxWidth: .infinity, maxHeight: .infinity)
            KotobaTabBar(selectedTab: $selectedTab)
        }
        .background(KotobaColor.canvas)
    }

    @ViewBuilder
    private var content: some View {
        switch selectedTab {
        case .learn:
            PathHomeView(
                pack: model.pack,
                state: model.state,
                senseiInsight: model.senseiInsight,
                onStartLesson: { model.startLesson($0) },
                onStartBoss: { model.startBoss() },
                onShowGate: { model.route = .gate }
            )
        case .spirit:
            SpiritView(
                state: model.state,
                onStartPractice: { model.startPractice() },
                onStartBoss: { model.startBoss() }
            )
        case .profile:
            ProfileView(state: model.state)
        }
    }
}
