import ContentKit
import Foundation
import LearningEngine

/// Applies engine summaries to persisted learner state.
public enum LearnerStateApplying {
    public static func apply(summary: LessonSummary, answers: [AnswerRecord], completedAt: Date = Date(), to state: inout LearnerState) {
        state.totalXP += summary.xpAwarded
        state.completedLessonIDs.insert(summary.lessonID)
        state.answerHistory.append(contentsOf: answers)
        state.sessionDays.append(completedAt)

        for (stat, gain) in summary.statGains {
            state.statScores[stat, default: 0] += gain
        }
    }
}
