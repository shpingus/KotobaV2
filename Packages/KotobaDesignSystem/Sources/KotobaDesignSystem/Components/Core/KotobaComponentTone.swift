import SwiftUI

/// Shared component tones; these map product intent to semantic token colors.
public enum KotobaComponentTone {
    case brand
    case accent
    case success
    case warning
    case danger
    case neutral
    case torii
    case gold

    var fill: Color {
        switch self {
        case .brand: KotobaColor.brand
        case .accent: KotobaColor.accent
        case .success: KotobaColor.success
        case .warning, .gold: KotobaColor.warning
        case .danger: KotobaColor.danger
        case .neutral: KotobaColor.surfaceSunken
        case .torii: KotobaColor.torii
        }
    }

    var softFill: Color {
        switch self {
        case .brand: KotobaColor.brandSoft
        case .accent: KotobaColor.accentSoft
        case .success: KotobaColor.successSoft
        case .warning, .gold: KotobaColor.warningSoft
        case .danger: KotobaColor.dangerSoft
        case .neutral: KotobaColor.surfaceSunken
        case .torii: KotobaColor.toriiSoft
        }
    }

    var ink: Color {
        switch self {
        case .brand: KotobaColor.brandStrong
        case .accent: KotobaColor.accentEdge
        case .success: KotobaColor.successEdge
        case .warning, .gold: KotobaColor.warningEdge
        case .danger: KotobaColor.dangerEdge
        case .neutral: KotobaColor.textBody
        case .torii: KotobaColor.toriiDeep
        }
    }

    var edge: Color {
        switch self {
        case .brand: KotobaColor.brandEdge
        case .accent: KotobaColor.accentEdge
        case .success: KotobaColor.successEdge
        case .warning, .gold: KotobaColor.warningEdge
        case .danger: KotobaColor.dangerEdge
        case .neutral: KotobaColor.borderDefault
        case .torii: KotobaColor.toriiDeep
        }
    }
}
