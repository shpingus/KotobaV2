import SwiftUI

/// Renders crisp pixel-art matrices for Kotoba companions and bosses.
public struct KotobaPixelSprite: View {
    private let matrix: [String]
    private let palette: [Character: Color]
    private let size: CGFloat

    public init(matrix: [String], palette: [Character: Color], size: CGFloat = 72) {
        self.matrix = matrix
        self.palette = palette
        self.size = size
    }

    public var body: some View {
        let rows = matrix.count
        let cols = matrix.first?.count ?? 1
        let pixel = size / CGFloat(cols)

        Canvas { context, _ in
            for (y, row) in matrix.enumerated() {
                for (x, char) in row.enumerated() where char != "." {
                    guard let color = palette[char] else { continue }
                    let rect = CGRect(x: CGFloat(x) * pixel, y: CGFloat(y) * pixel, width: pixel + 0.4, height: pixel + 0.4)
                    context.fill(Path(rect), with: .color(color))
                }
            }
        }
        .frame(width: size, height: size * CGFloat(rows) / CGFloat(cols))
        .accessibilityHidden(true)
    }
}

private extension String {
    func enumerated() -> EnumeratedSequence<[Character]> {
        Array(self).enumerated()
    }
}
