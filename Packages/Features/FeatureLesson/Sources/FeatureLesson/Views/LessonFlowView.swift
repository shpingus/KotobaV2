import SwiftUI
import ContentKit
import KotobaDesignSystem
import LearningEngine
import Persistence

/// Runs one content-backed lesson; scoring stays in LearningEngine.
public struct LessonFlowView: View {
    private let lesson: Lesson
    private let onExit: () -> Void
    private let onComplete: (LessonSummary, [AnswerRecord]) -> Void

    @State private var index = 0
    @State private var selectedAnswer: String?
    @State private var typedAnswer = ""
    @State private var checkedResult: AnswerResult?
    @State private var answers: [AnswerRecord] = []
    @State private var results: [AnswerResult] = []
    @FocusState private var typingFocused: Bool

    public init(lesson: Lesson, onExit: @escaping () -> Void, onComplete: @escaping (LessonSummary, [AnswerRecord]) -> Void) {
        self.lesson = lesson
        self.onExit = onExit
        self.onComplete = onComplete
    }

    public var body: some View {
        VStack(spacing: 0) {
            header
            ScrollView {
                VStack(spacing: KotobaSpacing.space5) {
                    promptCard
                    answerControls
                    if let checkedResult {
                        LessonFeedbackCard(result: checkedResult)
                    }
                }
                .padding(KotobaSpacing.gutter)
            }
            bottomAction
        }
        .background(KotobaColor.canvas)
    }

    private var header: some View {
        HStack(spacing: KotobaSpacing.space3) {
            KotobaIconButton("xmark", label: "Close", variant: .ghost, action: onExit)
            VStack(alignment: .leading, spacing: KotobaSpacing.space2) {
                Text(lesson.title)
                    .font(KotobaFont.body(.textMd, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                KotobaXPBar(value: Double(index + (checkedResult == nil ? 0 : 1)), max: Double(lesson.exercises.count), showCount: false)
            }
        }
        .padding(.horizontal, KotobaSpacing.gutter)
        .padding(.top, KotobaSpacing.space3)
        .padding(.bottom, KotobaSpacing.space2)
        .background(KotobaColor.canvas)
    }

    private var promptCard: some View {
        KotobaCard(tone: .brand) {
            VStack(spacing: KotobaSpacing.space4) {
                KotobaBadge("Question \(index + 1) of \(lesson.exercises.count)", tone: .brand, size: .sm)
                Text(currentExercise.prompt)
                    .font(KotobaFont.display(.text2xl, weight: .bold))
                    .foregroundStyle(KotobaColor.textStrong)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .frame(maxWidth: .infinity)
        }
    }

    @ViewBuilder
    private var answerControls: some View {
        if currentExercise.type == .typeAnswer {
            KotobaInput(
                label: "Your answer",
                placeholder: "Type the reading",
                text: $typedAnswer,
                helperText: "Use romaji for now.",
                error: inputError
            )
            .focused($typingFocused)
            .disabled(checkedResult != nil)
            .onSubmit { if canCheck { checkAnswer() } }
        } else {
            VStack(spacing: KotobaSpacing.space3) {
                ForEach(options(for: currentExercise), id: \.self) { option in
                    LessonChoiceRow(title: option, state: state(for: option), disabled: checkedResult != nil) {
                        selectedAnswer = option
                    }
                }
            }
        }
    }

    private var bottomAction: some View {
        VStack(spacing: 0) {
            KotobaButton(
                variant: actionVariant,
                size: .lg,
                fullWidth: true,
                action: checkedResult == nil ? checkAnswer : advance
            ) {
                Text(checkedResult == nil ? "Check" : isLastExercise ? "Finish" : "Continue")
            }
            .disabled(!canCheck)
            .opacity(canCheck ? 1 : 0.55)
        }
        .padding(KotobaSpacing.gutter)
        .background(KotobaColor.canvas)
    }

    private var currentExercise: Exercise {
        lesson.exercises[index]
    }

    private var inputValue: String {
        currentExercise.type == .typeAnswer ? typedAnswer : selectedAnswer ?? ""
    }

    private var canCheck: Bool {
        checkedResult != nil || !inputValue.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    private var actionVariant: KotobaButtonVariant {
        guard canCheck else { return .secondary }
        return checkedResult?.isCorrect == false ? .secondary : .primary
    }

    private var inputError: String? {
        guard let checkedResult, !checkedResult.isCorrect else { return nil }
        return "Correct answer: \(checkedResult.correctAnswer)"
    }

    private var isLastExercise: Bool {
        index + 1 >= lesson.exercises.count
    }

    private func options(for exercise: Exercise) -> [String] {
        if !exercise.choices.isEmpty { return exercise.choices }
        return Array(Set([exercise.answer, "a", "i", "u", "ka"])).sorted()
    }

    private func state(for option: String) -> KotobaKanaTileState {
        guard let checkedResult else {
            return option == selectedAnswer ? .selected : .default
        }
        if matches(option, checkedResult.correctAnswer) { return .correct }
        if option == selectedAnswer { return .wrong }
        return .default
    }

    private func checkAnswer() {
        guard checkedResult == nil else { return }
        let value = inputValue.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !value.isEmpty else { return }
        typingFocused = false

        let result = AnswerEvaluator.evaluate(answer: value, for: currentExercise)
        results.append(result)
        answers.append(AnswerRecord(
            exerciseID: result.exerciseID,
            stat: result.stat,
            prompt: currentExercise.prompt,
            givenAnswer: result.givenAnswer,
            correctAnswer: result.correctAnswer,
            isCorrect: result.isCorrect
        ))
        checkedResult = result
    }

    private func advance() {
        if isLastExercise {
            onComplete(LessonScoring.summary(for: lesson, answers: results), answers)
            return
        }
        index += 1
        selectedAnswer = nil
        typedAnswer = ""
        checkedResult = nil
    }

    private func matches(_ lhs: String, _ rhs: String) -> Bool {
        JapaneseScriptSupport().normalizeAnswer(lhs) == JapaneseScriptSupport().normalizeAnswer(rhs)
    }
}
