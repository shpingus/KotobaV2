import SwiftUI

/// Four-axis skill radar; the weakest axis is marked in torii red.
public struct KotobaSkillRadar: View {
    private let stats: [KotobaSkillRadarStat]
    private let max: Double
    private let size: CGFloat
    private let color: Color

    public init(stats: [KotobaSkillRadarStat], max: Double = 100, size: CGFloat = 180, color: Color = KotobaColor.brand) {
        self.stats = stats
        self.max = max
        self.size = size
        self.color = color
    }

    public var body: some View {
        ZStack {
            Canvas { context, _ in
                guard !stats.isEmpty else { return }
                let center = CGPoint(x: size / 2, y: size / 2)
                let radius = size * 0.34

                for factor in [1.0, 0.66, 0.33] {
                    context.stroke(polygon(center: center, radius: radius * factor), with: .color(KotobaColor.borderSubtle), lineWidth: 1.5)
                }

                for i in stats.indices {
                    var axis = Path()
                    axis.move(to: center)
                    axis.addLine(to: point(index: i, radius: radius, center: center))
                    context.stroke(axis, with: .color(KotobaColor.borderSubtle), lineWidth: 1.5)
                }

                let dataPath = dataPolygon(center: center, radius: radius)
                context.fill(dataPath, with: .color(color.opacity(0.22)))
                context.stroke(dataPath, with: .color(color), lineWidth: 2.5)

                for i in stats.indices {
                    let stat = stats[i]
                    let factor = CGFloat(Swift.max(0.05, Swift.min(1, stat.value / max)))
                    let statRadius = radius * factor
                    let p = point(index: i, radius: statRadius, center: center)
                    let r = i == weakestIndex ? 5.5 : 3.8
                    context.fill(Path(ellipseIn: CGRect(x: p.x - r, y: p.y - r, width: r * 2, height: r * 2)), with: .color(i == weakestIndex ? KotobaColor.torii : color))
                }
            }
            .frame(width: size, height: size)

            ForEach(Array(stats.enumerated()), id: \.offset) { index, stat in
                let labelPoint = point(index: index, radius: size * 0.445, center: CGPoint(x: size / 2, y: size / 2))
                VStack(spacing: 1) {
                    Text(stat.jp)
                        .font(KotobaFont.japaneseDisplay(.textXs, weight: .bold))
                        .foregroundStyle(index == weakestIndex ? KotobaColor.torii : KotobaColor.textStrong)
                    Text(stat.label)
                        .font(KotobaFont.body(.text3xs, weight: .semibold))
                        .foregroundStyle(KotobaColor.textMuted)
                }
                .position(labelPoint)
            }
        }
        .frame(width: size, height: size)
    }

    private var weakestIndex: Int {
        stats.indices.min { stats[$0].value < stats[$1].value } ?? 0
    }

    private func point(index: Int, radius: CGFloat, center: CGPoint) -> CGPoint {
        let angle = Double.pi * 2 * Double(index) / Double(stats.count) - Double.pi / 2
        let cgAngle = CGFloat(angle)
        return CGPoint(x: center.x + radius * cos(cgAngle), y: center.y + radius * sin(cgAngle))
    }

    private func polygon(center: CGPoint, radius: CGFloat) -> Path {
        var path = Path()
        for index in stats.indices {
            let p = point(index: index, radius: radius, center: center)
            index == 0 ? path.move(to: p) : path.addLine(to: p)
        }
        path.closeSubpath()
        return path
    }

    private func dataPolygon(center: CGPoint, radius: CGFloat) -> Path {
        var path = Path()
        for index in stats.indices {
            let factor = CGFloat(Swift.max(0.05, Swift.min(1, stats[index].value / max)))
            let p = point(index: index, radius: radius * factor, center: center)
            index == 0 ? path.move(to: p) : path.addLine(to: p)
        }
        path.closeSubpath()
        return path
    }
}

public struct KotobaSkillRadarStat: Equatable {
    public let label: String
    public let jp: String
    public let value: Double

    public init(label: String, jp: String, value: Double) {
        self.label = label
        self.jp = jp
        self.value = value
    }
}
