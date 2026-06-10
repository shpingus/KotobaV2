import SwiftUI

/// Horizontal XP bar toward the next level; level math belongs to LearningEngine.
public struct KotobaXPBar: View {
    private let value: Double
    private let max: Double
    private let level: Int?
    private let tone: KotobaXPBarTone
    private let showCount: Bool
    private let unit: String

    public init(value: Double, max: Double, level: Int? = nil, tone: KotobaXPBarTone = .accent, showCount: Bool = true, unit: String = "XP") {
        self.value = value
        self.max = max
        self.level = level
        self.tone = tone
        self.showCount = showCount
        self.unit = unit
    }

    public var body: some View {
        VStack(spacing: 6) {
            if level != nil || showCount {
                HStack {
                    if let level {
                        Text("Lv \(level)")
                            .font(KotobaFont.numeric(.textXs, weight: .bold))
                            .padding(.horizontal, 8)
                            .frame(minHeight: 24)
                            .foregroundStyle(.white)
                            .background(KotobaColor.brand)
                            .clipShape(Capsule())
                    }

                    Spacer()

                    if showCount {
                        Text("\(Int(value)) / \(Int(max)) \(unit)")
                            .font(KotobaFont.numeric(.textXs, weight: .semibold))
                            .foregroundStyle(KotobaColor.textMuted)
                    }
                }
            }

            GeometryReader { proxy in
                Capsule()
                    .fill(KotobaColor.surfaceSunken)
                    .overlay(alignment: .leading) {
                        Capsule()
                            .fill(tone.fill)
                            .frame(width: proxy.size.width * progress)
                    }
            }
            .frame(height: 12)
        }
    }

    private var progress: CGFloat {
        guard max > 0 else { return 0 }
        return CGFloat(Swift.min(1, Swift.max(0, value / max)))
    }
}

public enum KotobaXPBarTone {
    case accent
    case brand
    case success

    var fill: LinearGradient {
        switch self {
        case .accent: LinearGradient(colors: [Color(hex: 0xFB7948), KotobaColor.accent], startPoint: .leading, endPoint: .trailing)
        case .brand: LinearGradient(colors: [Color(hex: 0x6E7FD0), KotobaColor.brand], startPoint: .leading, endPoint: .trailing)
        case .success: LinearGradient(colors: [Color(hex: 0x4FB45A), KotobaColor.success], startPoint: .leading, endPoint: .trailing)
        }
    }
}
