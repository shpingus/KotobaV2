import ContentKit
import Foundation

/// Pure boss battle rules: correct answers damage the boss, wrong answers cost hearts.
public enum BattleRules {
    public static func start(bossHP: Int = 3, hearts: Int = 3) -> BattleState {
        BattleState(bossHP: bossHP, hearts: hearts, status: .active)
    }

    public static func apply(answer: AnswerResult, to state: BattleState) -> BattleState {
        guard state.status == .active else { return state }

        let hp = answer.isCorrect ? max(0, state.bossHP - 1) : state.bossHP
        let hearts = answer.isCorrect ? state.hearts : max(0, state.hearts - 1)
        let status: BattleStatus = hp == 0 ? .won : hearts == 0 ? .lost : .active
        return BattleState(bossHP: hp, hearts: hearts, status: status)
    }
}

public struct BattleState: Equatable, Sendable {
    public let bossHP: Int
    public let hearts: Int
    public let status: BattleStatus
}

public enum BattleStatus: Equatable, Sendable {
    case active
    case won
    case lost
}
