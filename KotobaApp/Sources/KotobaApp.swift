import SwiftUI
import KotobaDesignSystem

/// Owns app startup and dependency wiring; feature navigation is added in later phases.
@main
struct KotobaApp: App {
    init() {
        KotobaFontRegistrar.registerBundledFonts()
    }

    var body: some Scene {
        WindowGroup {
            AppRootView()
        }
    }
}
