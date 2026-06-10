import SwiftUI
import KotobaDesignSystem

/// Phase 1 shell renders the design-system gallery until product navigation exists.
struct AppRootView: View {
    var body: some View {
        KotobaDesignSystemGallery()
    }
}

#Preview {
    AppRootView()
}
