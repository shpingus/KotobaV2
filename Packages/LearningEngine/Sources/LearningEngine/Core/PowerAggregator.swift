import ContentKit
import Foundation

/// Aggregates real skill stats into Kotoba's RPG power level.
public enum PowerAggregator {
    public static func power(from stats: [SkillStat: Int]) -> Int {
        let total = SkillStat.allCases.reduce(0) { $0 + max(0, stats[$1, default: 0]) }
        return max(1, total / SkillStat.allCases.count)
    }
}
