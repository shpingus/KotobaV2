import SwiftUI

/// Motion tokens translated from `tokens/motion.css`; views choose purpose, not raw timings.
public enum KotobaMotion {
    public static let pressDepth: CGFloat = 4 // --press-depth
    public static let instant = 0.08 // --dur-instant
    public static let fast = 0.14 // --dur-fast
    public static let base = 0.22 // --dur-base
    public static let slow = 0.34 // --dur-slow
    public static let slower = 0.52 // --dur-slower

    public static let easeOut = Animation.timingCurve(0.22, 0.80, 0.30, 1, duration: base) // --ease-out
    public static let easeInOut = Animation.timingCurve(0.65, 0.05, 0.36, 1, duration: base) // --ease-in-out
    public static let spring = Animation.timingCurve(0.34, 1.56, 0.64, 1, duration: slow) // --ease-spring
    public static let emphasized = Animation.timingCurve(0.16, 1, 0.30, 1, duration: slow) // --ease-emphas
}
