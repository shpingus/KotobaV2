import SwiftUI

/// Font tokens translated from `tokens/typography.css`; feature code uses roles, not font names.
public enum KotobaFont {
    public static func display(_ size: KotobaTextSize, weight: Font.Weight = .bold) -> Font {
        .custom("SpaceGrotesk-Regular", size: size.points).weight(weight)
    }

    public static func body(_ size: KotobaTextSize, weight: Font.Weight = .regular) -> Font {
        .custom("PlusJakartaSans-Regular", size: size.points).weight(weight)
    }

    public static func japanese(_ size: KotobaTextSize, weight: Font.Weight = .regular) -> Font {
        .custom("ZenKakuGothicNew-Regular", size: size.points).weight(weight)
    }

    public static func japaneseDisplay(_ size: KotobaTextSize, weight: Font.Weight = .regular) -> Font {
        .custom("ZenMaruGothic-Regular", size: size.points).weight(weight)
    }

    public static func numeric(_ size: KotobaTextSize, weight: Font.Weight = .bold) -> Font {
        display(size, weight: weight).monospacedDigit()
    }
}

public enum KotobaTextSize: CGFloat {
    case text3xs = 11 // --text-3xs
    case text2xs = 12 // --text-2xs
    case textXs = 13 // --text-xs
    case textSm = 14 // --text-sm
    case textMd = 16 // --text-md
    case textLg = 18 // --text-lg
    case textXl = 22 // --text-xl
    case text2xl = 28 // --text-2xl
    case text3xl = 36 // --text-3xl
    case text4xl = 46 // --text-4xl
    case text5xl = 60 // --text-5xl
    case text6xl = 76 // --text-6xl

    var points: CGFloat { rawValue }
}
