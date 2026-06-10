import Foundation

/// Owns XP-to-level math so feature UI only renders the result.
public enum XPLeveling {
    public static func level(for totalXP: Int) -> LevelProgress {
        let safeXP = max(0, totalXP)
        let level = safeXP / 100 + 1
        let currentLevelXP = safeXP % 100
        return LevelProgress(level: level, currentLevelXP: currentLevelXP, nextLevelXP: 100)
    }
}

public struct LevelProgress: Equatable, Sendable {
    public let level: Int
    public let currentLevelXP: Int
    public let nextLevelXP: Int
}
