import SwiftUI

/// Shadow tokens translated from `tokens/elevation.css`; SwiftUI modifiers apply them consistently.
public struct KotobaShadow {
    public let color: Color
    public let radius: CGFloat
    public let x: CGFloat
    public let y: CGFloat

    public static let xs = Self(color: Color(hex: 0x1F284F, opacity: 0.06), radius: 2, x: 0, y: 1) // --shadow-xs
    public static let sm = Self(color: Color(hex: 0x1F284F, opacity: 0.08), radius: 6, x: 0, y: 2) // --shadow-sm
    public static let md = Self(color: Color(hex: 0x1F284F, opacity: 0.10), radius: 16, x: 0, y: 6) // --shadow-md
    public static let lg = Self(color: Color(hex: 0x1F284F, opacity: 0.14), radius: 32, x: 0, y: 14) // --shadow-lg
    public static let xl = Self(color: Color(hex: 0x1F284F, opacity: 0.18), radius: 56, x: 0, y: 24) // --shadow-xl

    public init(color: Color, radius: CGFloat, x: CGFloat, y: CGFloat) {
        self.color = color
        self.radius = radius
        self.x = x
        self.y = y
    }
}

public extension View {
    func kotobaShadow(_ shadow: KotobaShadow) -> some View {
        self.shadow(color: shadow.color, radius: shadow.radius, x: shadow.x, y: shadow.y)
    }
}
