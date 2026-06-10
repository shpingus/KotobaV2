import SwiftUI

/// Circular progress ring with caller-owned center content.
public struct KotobaProgressRing<Content: View>: View {
    private let value: Double
    private let max: Double
    private let size: CGFloat
    private let thickness: CGFloat
    private let color: Color
    private let content: Content

    public init(
        value: Double,
        max: Double = 100,
        size: CGFloat = 72,
        thickness: CGFloat = 8,
        color: Color = KotobaColor.brand,
        @ViewBuilder content: () -> Content
    ) {
        self.value = value
        self.max = max
        self.size = size
        self.thickness = thickness
        self.color = color
        self.content = content()
    }

    public var body: some View {
        ZStack {
            Circle()
                .stroke(KotobaColor.surfaceSunken, lineWidth: thickness)
            Circle()
                .trim(from: 0, to: progress)
                .stroke(color, style: StrokeStyle(lineWidth: thickness, lineCap: .round))
                .rotationEffect(.degrees(-90))
            content
        }
        .frame(width: size, height: size)
    }

    private var progress: Double {
        guard max > 0 else { return 0 }
        return Swift.min(1, Swift.max(0, value / max))
    }
}
