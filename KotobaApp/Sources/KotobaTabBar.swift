import SwiftUI
import KotobaDesignSystem

enum MainTab: CaseIterable, Hashable {
    case learn
    case spirit
    case profile

    var title: String {
        switch self {
        case .learn: "Learn"
        case .spirit: "Spirit"
        case .profile: "Profile"
        }
    }

    var systemImage: String {
        switch self {
        case .learn: "map"
        case .spirit: "sparkles"
        case .profile: "person.crop.circle"
        }
    }
}

struct KotobaTabBar: View {
    @Binding var selectedTab: MainTab

    var body: some View {
        HStack(spacing: KotobaSpacing.space0) {
            ForEach(MainTab.allCases, id: \.self) { tab in
                tabButton(tab)
            }
        }
        .padding(.horizontal, KotobaSpacing.space2)
        .padding(.top, KotobaSpacing.space2)
        .padding(.bottom, KotobaSpacing.space2)
        .background(.regularMaterial)
        .overlay(alignment: .top) {
            Rectangle()
                .fill(KotobaColor.borderSubtle)
                .frame(height: KotobaBorder.thin)
        }
    }

    private func tabButton(_ tab: MainTab) -> some View {
        let selected = selectedTab == tab

        return Button {
            selectedTab = tab
        } label: {
            VStack(spacing: KotobaSpacing.space1) {
                ZStack {
                    if selected {
                        Circle()
                            .fill(KotobaColor.brandSoft)
                    }
                    Image(systemName: tab.systemImage)
                        .font(.system(size: KotobaSpacing.space6, weight: .semibold))
                        .frame(width: KotobaSpacing.space6, height: KotobaSpacing.space6)
                }
                .frame(width: KotobaSpacing.space9, height: KotobaSpacing.space7)

                Text(tab.title)
                    .font(KotobaFont.body(.text3xs, weight: .bold))
            }
            .foregroundStyle(selected ? KotobaColor.brand : KotobaColor.textFaint)
            .frame(maxWidth: .infinity, minHeight: KotobaSpacing.tapMin)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityLabel(tab.title)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }
}
