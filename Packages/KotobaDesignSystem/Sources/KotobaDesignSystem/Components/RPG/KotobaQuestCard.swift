import SwiftUI

/// Optional momentum quest card with progress and reward; it has no scheduling logic.
public struct KotobaQuestCard: View {
    private let title: String
    private let subtitle: String?
    private let value: Double
    private let max: Double
    private let reward: String
    private let done: Bool
    private let systemImage: String

    public init(title: String, subtitle: String? = nil, value: Double, max: Double, reward: String, done: Bool = false, systemImage: String = "star.fill") {
        self.title = title
        self.subtitle = subtitle
        self.value = value
        self.max = max
        self.reward = reward
        self.done = done
        self.systemImage = systemImage
    }

    public var body: some View {
        KotobaCard(pad: .sm, elevation: .flat) {
            HStack(spacing: KotobaSpacing.space3) {
                Image(systemName: done ? "checkmark.circle.fill" : systemImage)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundStyle(done ? KotobaColor.success : KotobaColor.brand)
                    .frame(width: 42, height: 42)
                    .background(done ? KotobaColor.successSoft : KotobaColor.brandSoft)
                    .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))

                VStack(alignment: .leading, spacing: 6) {
                    Text(title)
                        .font(KotobaFont.body(.textSm, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                    if let subtitle {
                        Text(subtitle)
                            .font(KotobaFont.body(.textXs))
                            .foregroundStyle(KotobaColor.textMuted)
                    }
                    KotobaXPBar(value: value, max: max, tone: done ? .success : .accent, showCount: false)
                }

                KotobaBadge(reward, tone: done ? .success : .gold, size: .sm, solid: done)
            }
        }
    }
}
