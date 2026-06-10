import SwiftUI

/// Debug style guide that renders each component state; it has no product logic.
public struct KotobaDesignSystemGallery: View {
    @State private var inputText = "Aiko"

    public init() {}

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: KotobaSpacing.space8) {
                header
                coreSection
                progressSection
                learningSection
                rpgSection
                adaptiveSection
                formSection
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(KotobaSpacing.gutter)
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space2) {
            Text("Kotoba design system")
                .font(KotobaFont.display(.text2xl, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
                .fixedSize(horizontal: false, vertical: true)
            Text("Phase 1 gallery")
                .font(KotobaFont.body(.textMd, weight: .semibold))
                .foregroundStyle(KotobaColor.textMuted)
        }
    }

    private var coreSection: some View {
        GallerySection("Core") {
            WrapRow {
                KotobaButton(action: {}) { Text("Begin lesson") }
                KotobaButton(variant: .accent, action: {}) { Label("Keep streak", systemImage: "flame.fill") }
                KotobaButton(variant: .secondary, action: {}) { Text("Maybe later") }
                KotobaButton(variant: .ghost, size: .sm, action: {}) { Text("Skip") }
                KotobaButton(variant: .danger, action: {}) { Text("Reset") }
            }
            WrapRow {
                KotobaIconButton("speaker.wave.2.fill", label: "Replay audio", variant: .brand, action: {})
                KotobaIconButton("xmark", label: "Close", variant: .ghost, action: {})
                KotobaIconButton("gearshape.fill", label: "Settings", square: true, action: {})
                KotobaBadge("Mastered", tone: .success)
                KotobaBadge("New", tone: .accent, dot: true)
                KotobaBadge("N5", tone: .brand, size: .sm, solid: true)
            }
            WrapRow {
                KotobaTag("Hiragana")
                KotobaTag("Verbs", selected: true)
                KotobaTag("Food vocab", systemImage: "fork.knife", onRemove: {})
                KotobaAvatar(name: "Aiko Tanaka", size: .lg, ringPercent: 80)
            }
            KotobaCard(tone: .brand) {
                Text("Highlighted card")
                    .font(KotobaFont.body(.textMd, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
            }
        }
    }

    private var progressSection: some View {
        GallerySection("Progress") {
            WrapRow {
                KotobaProgressRing(value: 3, max: 5) {
                    Text("3/5").font(KotobaFont.numeric(.textSm, weight: .bold))
                }
                KotobaStreakCounter(days: 28)
                KotobaStreakCounter(days: 6, size: .lg, state: .risk)
                KotobaStreakCounter(days: 0, state: .off, showLabel: false)
            }
            KotobaXPBar(value: 240, max: 500, level: 7)
            WrapRow {
                KotobaLevelBadge(tier: .preN5, size: .sm, showCaption: false)
                KotobaLevelBadge(tier: .n5)
                KotobaLevelBadge(tier: .n3, size: .lg, progress: 45)
                KotobaLevelBadge(tier: .n1, size: .sm, soft: true, showCaption: false)
            }
        }
    }

    private var learningSection: some View {
        GallerySection("Learning") {
            WrapRow {
                KotobaKanaTile(glyph: "あ", reading: "a")
                KotobaKanaTile(glyph: "水", reading: "mizu", meaning: "water", size: .lg)
                KotobaKanaTile(glyph: "き", reading: "ki", state: .correct)
                KotobaKanaTile(glyph: "ね", reading: "ne", state: .wrong)
            }
            WrapRow {
                KotobaLessonNode(state: .complete, label: "Hiragana")
                KotobaLessonNode(state: .available, current: true, label: "Greetings")
                KotobaLessonNode(state: .locked, label: "Particles")
                KotobaLessonNode(state: .mastered, label: "Numbers")
            }
        }
    }

    private var rpgSection: some View {
        GallerySection("RPG") {
            WrapRow {
                KotobaCompanion(stage: .newborn, size: 56)
                KotobaCompanion(stage: .traveler, size: 88, floating: true)
                KotobaCompanion(stage: .guardian, size: 110)
                KotobaPixelOni(size: 58)
            }
            WrapRow {
                KotobaBossNode(label: "Hiragana Oni")
                KotobaBossNode(state: .defeated, size: .sm, label: "Kana Kappa")
                KotobaBossNode(state: .locked, label: "Grammar Oni", flag: "POWER 40+")
                KotobaToriiGate(size: 96, plaque: "二", caption: "Unit 2")
                KotobaToriiGate(size: 130, state: .locked, plaque: "N4", caption: "Finish N5")
            }
            KotobaPowerLevel(value: 47, size: .lg)
            VStack(spacing: KotobaSpacing.space4) {
                KotobaStatBar(label: "Vocabulary", jp: "語彙", value: 62)
                KotobaStatBar(label: "Grammar", jp: "文法", value: 48, tone: .accent)
                KotobaStatBar(label: "Listening", jp: "聴解", value: 31, tone: .torii, weak: true)
                KotobaStatBar(label: "Reading", jp: "読解", value: 55, tone: .success)
            }
            KotobaQuestCard(title: "Learn 20 food words", value: 13, max: 20, reward: "+80 XP", systemImage: "fork.knife")
            KotobaQuestCard(title: "Defeat the Hiragana Oni", subtitle: "Boss challenge · optional", value: 0, max: 1, reward: "+150 XP", systemImage: "bolt.fill")
        }
    }

    private var adaptiveSection: some View {
        GallerySection("Adaptive") {
            KotobaSenseiCard(
                title: "You mix up ね and ぬ",
                message: "I made a short set focused on the loop endings — 8 cards."
            ) {
                KotobaButton(variant: .accent, size: .sm, action: {}) { Text("Practice 2 min") }
            }
            KotobaSenseiChip()
            KotobaSkillRadar(stats: [
                .init(label: "Vocabulary", jp: "語彙", value: 62),
                .init(label: "Grammar", jp: "文法", value: 48),
                .init(label: "Listening", jp: "聴解", value: 31),
                .init(label: "Reading", jp: "読解", value: 55)
            ], size: 220)
        }
    }

    private var formSection: some View {
        GallerySection("Forms") {
            KotobaInput(label: "Display name", placeholder: "Your name", text: $inputText, helperText: "Shown on your profile")
            KotobaInput(label: "Password", placeholder: "Enter password", text: .constant(""), error: "At least 8 characters")
        }
    }
}

private struct GallerySection<Content: View>: View {
    let title: String
    let content: Content

    init(_ title: String, @ViewBuilder content: () -> Content) {
        self.title = title
        self.content = content()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: KotobaSpacing.space4) {
            Text(title)
                .font(KotobaFont.display(.textXl, weight: .bold))
                .foregroundStyle(KotobaColor.textStrong)
            content
        }
    }
}

private struct WrapRow<Content: View>: View {
    let content: Content

    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    var body: some View {
        ViewThatFits(in: .horizontal) {
            HStack(alignment: .center, spacing: KotobaSpacing.space4) { content }
            VStack(alignment: .leading, spacing: KotobaSpacing.space4) { content }
        }
    }
}
