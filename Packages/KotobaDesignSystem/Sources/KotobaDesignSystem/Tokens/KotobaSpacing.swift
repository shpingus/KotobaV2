import Foundation

/// Spacing tokens translated from `tokens/spacing.css`; values are point equivalents of the 4 px base scale.
public enum KotobaSpacing {
    public static let space0: CGFloat = 0 // --space-0
    public static let space1: CGFloat = 4 // --space-1
    public static let space2: CGFloat = 8 // --space-2
    public static let space3: CGFloat = 12 // --space-3
    public static let space4: CGFloat = 16 // --space-4
    public static let space5: CGFloat = 20 // --space-5
    public static let space6: CGFloat = 24 // --space-6
    public static let space7: CGFloat = 32 // --space-7
    public static let space8: CGFloat = 40 // --space-8
    public static let space9: CGFloat = 48 // --space-9
    public static let space10: CGFloat = 64 // --space-10
    public static let space11: CGFloat = 80 // --space-11
    public static let space12: CGFloat = 96 // --space-12

    public static let gutter: CGFloat = space5 // --gutter
    public static let stackTight: CGFloat = space2 // --stack-tight
    public static let stack: CGFloat = space4 // --stack
    public static let stackLoose: CGFloat = space6 // --stack-loose
    public static let appWidth: CGFloat = 420 // --app-width
    public static let tapMin: CGFloat = 48 // --tap-min
}
