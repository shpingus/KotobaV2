import Foundation

/// Calculates day streaks from session dates in the learner's calendar.
public enum StreakCalculator {
    public static func streak(on today: Date = Date(), sessions: [Date], calendar: Calendar = .current) -> Int {
        let days = Set(sessions.map { calendar.startOfDay(for: $0) })
        var cursor = calendar.startOfDay(for: today)
        var count = 0

        while days.contains(cursor) {
            count += 1
            guard let previous = calendar.date(byAdding: .day, value: -1, to: cursor) else { break }
            cursor = previous
        }

        return count
    }
}
