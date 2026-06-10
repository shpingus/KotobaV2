import SwiftUI

/// Semantic color tokens translated from `tokens/colors.css`; raw ramps stay private to this file.
public enum KotobaColor {
    /// --brand
    public static let brand = Color(hex: 0x3D4CA0)
    /// --brand-strong
    public static let brandStrong = Color(hex: 0x313E82)
    /// --brand-soft
    public static let brandSoft = Color(hex: 0xDDE2F6)
    /// --brand-subtle
    public static let brandSubtle = Color(hex: 0xEEF0FB)
    /// --on-brand
    public static let onBrand = Color.white

    /// --accent
    public static let accent = Color(hex: 0xF15F2C)
    /// --accent-strong
    public static let accentStrong = Color(hex: 0xD94A1C)
    /// --accent-soft
    public static let accentSoft = Color(hex: 0xFFE1D3)
    /// Component edge mapped from --kaki-700
    public static let accentEdge = Color(hex: 0xB23A18)

    /// --text-strong
    public static let textStrong = Color(hex: 0x171A24)
    /// --text-body
    public static let textBody = Color(hex: 0x383E4F)
    /// --text-muted
    public static let textMuted = Color(hex: 0x6B7287)
    /// --text-faint
    public static let textFaint = Color(hex: 0x9AA1B5)

    /// --bg-canvas
    public static let canvas = Color(hex: 0xF7F8FB)
    /// --surface-card
    public static let surfaceCard = Color.white
    /// --surface-sunken
    public static let surfaceSunken = Color(hex: 0xEFF1F6)
    /// --surface-inverse
    public static let surfaceInverse = Color(hex: 0x171A24)

    /// --border-subtle
    public static let borderSubtle = Color(hex: 0xE2E5EE)
    /// --border-default
    public static let borderDefault = Color(hex: 0xCBD0DE)
    /// --border-brand
    public static let borderBrand = Color(hex: 0x94A2DF)
    /// Component edge mapped from --ai-800
    public static let brandEdge = Color(hex: 0x283367)

    /// --success
    public static let success = Color(hex: 0x2F9C45)
    /// --success-soft
    public static let successSoft = Color(hex: 0xD6EFD7)
    /// Component edge mapped from --wakaba-700
    public static let successEdge = Color(hex: 0x1E632F)
    /// --warning
    public static let warning = Color(hex: 0xC9881C)
    /// --warning-soft
    public static let warningSoft = Color(hex: 0xFAEABF)
    /// Component edge mapped from --kihada-700
    public static let warningEdge = Color(hex: 0x7E5114)
    /// --danger
    public static let danger = Color(hex: 0xC13355)
    /// --danger-soft
    public static let dangerSoft = Color(hex: 0xFAD3DB)
    /// Component edge mapped from --beni-700
    public static let dangerEdge = Color(hex: 0x7E1C36)
    /// Tile edge mapped from --sumi-200
    public static let surfaceEdge = Color(hex: 0xE2E5EE)

    /// --torii
    public static let torii = Color(hex: 0xC93A1D)
    /// --torii-deep
    public static let toriiDeep = Color(hex: 0x862513)
    /// --torii-soft
    public static let toriiSoft = Color(hex: 0xFDEFEA)
    /// --power
    public static let power = Color(hex: 0xE2A52E)
    /// --power-deep
    public static let powerDeep = Color(hex: 0xA36916)
    /// --power-soft
    public static let powerSoft = Color(hex: 0xFDF6E3)

    public static func tier(_ tier: KotobaTier) -> Color {
        switch tier {
        case .preN5: Color(hex: 0x7FB2D9) // --tier-pre
        case .n5: Color(hex: 0x5FB87A) // --tier-n5
        case .n4: Color(hex: 0xE2B23C) // --tier-n4
        case .n3: Color(hex: 0xED7A3D) // --tier-n3
        case .n2: Color(hex: 0xD8556E) // --tier-n2
        case .n1: Color(hex: 0x4F61BE) // --tier-n1
        }
    }
}

public enum KotobaTier: CaseIterable {
    case preN5
    case n5
    case n4
    case n3
    case n2
    case n1
}

extension Color {
    init(hex: UInt, opacity: Double = 1) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xff) / 255,
            green: Double((hex >> 8) & 0xff) / 255,
            blue: Double(hex & 0xff) / 255,
            opacity: opacity
        )
    }
}
