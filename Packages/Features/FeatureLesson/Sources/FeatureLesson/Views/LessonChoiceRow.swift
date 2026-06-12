import SwiftUI
import KotobaDesignSystem

/// Single selectable answer row for lesson multiple-choice states.
struct LessonChoiceRow: View {
    let title: String
    let state: KotobaKanaTileState
    let disabled: Bool
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(KotobaFont.body(.textMd, weight: .bold))
                .foregroundStyle(foreground)
                .frame(maxWidth: .infinity, minHeight: 52)
                .padding(.horizontal, KotobaSpacing.space4)
                .background(fill)
                .clipShape(RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous))
                .overlay {
                    RoundedRectangle(cornerRadius: KotobaRadius.md, style: .continuous)
                        .stroke(border, lineWidth: KotobaBorder.base)
                }
                .shadow(
                    color: castsEdge ? edge : .clear,
                    radius: 0,
                    x: 0,
                    y: castsEdge ? KotobaMotion.pressDepth : 0
                )
        }
        .buttonStyle(.plain)
        .disabled(disabled)
    }

    private var fill: Color {
        switch state {
        case .default: KotobaColor.surfaceCard
        case .selected: KotobaColor.brandSoft
        case .correct: KotobaColor.successSoft
        case .wrong: KotobaColor.dangerSoft
        }
    }

    private var border: Color {
        switch state {
        case .default: KotobaColor.borderDefault
        case .selected: KotobaColor.borderBrand
        case .correct: KotobaColor.success
        case .wrong: KotobaColor.danger
        }
    }

    private var edge: Color {
        switch state {
        case .default: KotobaColor.surfaceEdge
        case .selected: KotobaColor.brand
        case .correct: KotobaColor.success
        case .wrong: KotobaColor.danger
        }
    }

    private var foreground: Color {
        switch state {
        case .correct: KotobaColor.successEdge
        case .wrong: KotobaColor.dangerEdge
        case .selected: KotobaColor.brandStrong
        case .default: KotobaColor.textStrong
        }
    }

    private var castsEdge: Bool {
        !disabled && state != .default
    }
}
