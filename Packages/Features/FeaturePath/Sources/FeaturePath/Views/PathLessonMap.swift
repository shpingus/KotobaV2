import SwiftUI
import ContentKit
import KotobaDesignSystem

/// Winding stepping-stone lesson map with the companion beside the current node.
struct PathLessonMap: View {
    let lessons: [Lesson]
    let locked: Bool
    let currentLessonID: LessonID?
    let completedIDs: Set<String>
    let onStartLesson: (Lesson) -> Void

    private let offsets: [CGFloat] = [0, 64, 90, 64, 0, -64, -90, -64]

    var body: some View {
        VStack(spacing: KotobaSpacing.space5) {
            ForEach(Array(lessons.enumerated()), id: \.element.id.rawValue) { index, lesson in
                node(lesson, index: index)
                    .frame(maxWidth: .infinity)
                    .offset(x: offsets[index % offsets.count])
            }
        }
    }

    private func node(_ lesson: Lesson, index: Int) -> some View {
        let complete = completedIDs.contains(lesson.id.rawValue)
        let current = !locked && !complete && lesson.id == currentLessonID
        let available = !locked && (complete || current)

        return ZStack(alignment: .leading) {
            Button {
                if available { onStartLesson(lesson) }
            } label: {
                KotobaLessonNode(
                    state: nodeState(complete: complete, current: current),
                    size: current ? .lg : .md,
                    current: current,
                    label: lesson.title
                )
            }
            .buttonStyle(.plain)
            .disabled(!available)

            if current {
                KotobaCompanion(stage: .traveler, size: 54, floating: true)
                    .offset(x: -62, y: -6)
            }
        }
    }

    private func nodeState(complete: Bool, current: Bool) -> KotobaLessonNodeState {
        if complete { return .complete }
        if current { return .available }
        return .locked
    }
}
