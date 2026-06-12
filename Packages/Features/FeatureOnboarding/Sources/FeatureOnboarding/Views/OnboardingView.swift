import SwiftUI
import KotobaDesignSystem

/// First-run intake flow; selected answers stay local until persistence grows.
public struct OnboardingView: View {
    private let onComplete: () -> Void

    @State private var step = 0
    @State private var selectedGoal: String?
    @State private var selectedLevel: String?
    @State private var selectedDaily: String? = "10 min"

    private let goals = [
        OnboardingChoice(systemImage: "airplane", title: "Travel in Japan", subtitle: "Useful phrases for real trips."),
        OnboardingChoice(systemImage: "sparkles", title: "Anime and manga", subtitle: "Read scenes with more confidence."),
        OnboardingChoice(systemImage: "briefcase.fill", title: "Work and career", subtitle: "Build steady business basics."),
        OnboardingChoice(systemImage: "heart.fill", title: "Just for fun", subtitle: "Keep it light and regular.")
    ]

    private let levels = [
        OnboardingChoice(systemImage: "leaf.fill", title: "Brand new", subtitle: "I am starting from zero."),
        OnboardingChoice(systemImage: "book.closed.fill", title: "N5", subtitle: "I know some kana."),
        OnboardingChoice(systemImage: "text.bubble.fill", title: "N4", subtitle: "I know basic grammar."),
        OnboardingChoice(systemImage: "bubble.left.and.bubble.right.fill", title: "N3", subtitle: "I can follow everyday conversation.")
    ]

    private let dailyGoals = [
        OnboardingChoice(systemImage: "clock.fill", title: "5 min", subtitle: "Casual · 10 XP"),
        OnboardingChoice(systemImage: "flame.fill", title: "10 min", subtitle: "Steady · 20 XP"),
        OnboardingChoice(systemImage: "bolt.fill", title: "15 min", subtitle: "Focused · 30 XP"),
        OnboardingChoice(systemImage: "crown.fill", title: "20 min", subtitle: "Deep practice · 40 XP")
    ]

    public init(onComplete: @escaping () -> Void) {
        self.onComplete = onComplete
    }

    public var body: some View {
        VStack(spacing: 0) {
            if step == 0 {
                welcome
            } else {
                intake
            }
        }
        .background(KotobaColor.canvas)
    }

    private var welcome: some View {
        VStack(spacing: KotobaSpacing.space6) {
            Spacer()
            KotobaCompanion(stage: .newborn, size: 112, floating: true)
            VStack(spacing: KotobaSpacing.space2) {
                Text("Kotoba")
                    .font(KotobaFont.display(.text5xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                Text("毎日一歩ずつ")
                    .font(KotobaFont.japaneseDisplay(.textXl, weight: .medium))
                    .foregroundStyle(KotobaColor.brand)
                Text("Every step forward.")
                    .font(KotobaFont.body(.textLg))
                    .foregroundStyle(KotobaColor.textMuted)
            }
            Spacer()
            KotobaButton(size: .lg, fullWidth: true, action: { step = 1 }) {
                Text("Get started")
            }
        }
        .padding(KotobaSpacing.gutter)
    }

    private var intake: some View {
        VStack(spacing: 0) {
            header
            ScrollView {
                VStack(alignment: .leading, spacing: KotobaSpacing.space5) {
                    Text(title)
                        .font(KotobaFont.display(.text3xl, weight: .bold))
                        .foregroundStyle(KotobaColor.textStrong)
                    if let subtitle {
                        Text(subtitle)
                            .font(KotobaFont.body(.textMd))
                            .foregroundStyle(KotobaColor.textMuted)
                    }
                    content
                }
                .padding(KotobaSpacing.gutter)
            }
            KotobaButton(size: .lg, fullWidth: true, action: advance) {
                Text(step == 4 ? "Start learning" : "Continue")
            }
            .disabled(!canContinue)
            .padding(KotobaSpacing.gutter)
        }
    }

    private var header: some View {
        VStack(spacing: KotobaSpacing.space4) {
            HStack {
                KotobaIconButton("arrow.left", label: "Back", variant: .ghost, action: { step = max(0, step - 1) })
                Spacer()
            }
            OnboardingProgressDots(current: step, total: 4)
        }
        .padding(.horizontal, KotobaSpacing.gutter)
        .padding(.top, KotobaSpacing.space3)
    }

    @ViewBuilder
    private var content: some View {
        switch step {
        case 1:
            choices(goals, selection: $selectedGoal)
        case 2:
            choices(levels, selection: $selectedLevel)
        case 3:
            choices(dailyGoals, selection: $selectedDaily)
        default:
            readyCard
        }
    }

    private var readyCard: some View {
        KotobaCard(tone: .brand) {
            VStack(alignment: .leading, spacing: KotobaSpacing.space4) {
                summaryRow("Goal", selectedGoal ?? "Just for fun")
                summaryRow("Starting level", selectedLevel ?? "Brand new")
                summaryRow("Daily goal", selectedDaily ?? "10 min")
                Rectangle()
                    .fill(KotobaColor.brandSoft)
                    .frame(height: 1)
                Text("First stop: Hiragana basics. Take one clear step today.")
                    .font(KotobaFont.body(.textMd))
                    .foregroundStyle(KotobaColor.textBody)
            }
        }
    }

    private func choices(_ choices: [OnboardingChoice], selection: Binding<String?>) -> some View {
        VStack(spacing: KotobaSpacing.space3) {
            ForEach(choices) { choice in
                OnboardingChoiceRow(choice: choice, selected: selection.wrappedValue == choice.title) {
                    selection.wrappedValue = choice.title
                }
            }
        }
    }

    private func summaryRow(_ label: String, _ value: String) -> some View {
        HStack {
            Text(label)
                .font(KotobaFont.body(.textSm))
                .foregroundStyle(KotobaColor.textMuted)
            Spacer()
            Text(value)
                .font(KotobaFont.body(.textSm, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
        }
    }

    private var title: String {
        switch step {
        case 1: "Why are you learning?"
        case 2: "Where are you starting?"
        case 3: "Pick a daily goal"
        default: "Your path is ready"
        }
    }

    private var subtitle: String? {
        switch step {
        case 1: "We will shape the first path around one clear reason."
        case 2: "Choose the closest fit. You can adjust later."
        case 3: "Small and steady wins."
        default: nil
        }
    }

    private var canContinue: Bool {
        switch step {
        case 1: selectedGoal != nil
        case 2: selectedLevel != nil
        default: true
        }
    }

    private func advance() {
        if step >= 4 {
            onComplete()
        } else {
            step += 1
        }
    }
}
