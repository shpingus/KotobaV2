import Foundation

/// Small JSON store for local-first state; callers choose the file URL.
public final class LearnerStateStore: Sendable {
    private let url: URL
    private let encoder: JSONEncoder
    private let decoder: JSONDecoder

    public init(url: URL) {
        self.url = url
        self.encoder = JSONEncoder()
        self.decoder = JSONDecoder()
        encoder.dateEncodingStrategy = .iso8601
        decoder.dateDecodingStrategy = .iso8601
    }

    public func load() throws -> LearnerState {
        guard FileManager.default.fileExists(atPath: url.path) else {
            return LearnerState()
        }

        let data = try Data(contentsOf: url)
        var state = try decoder.decode(LearnerState.self, from: data)
        state = migrate(state)
        return state
    }

    public func save(_ state: LearnerState) throws {
        let directory = url.deletingLastPathComponent()
        try FileManager.default.createDirectory(at: directory, withIntermediateDirectories: true)
        let data = try encoder.encode(state)
        try data.write(to: url, options: [.atomic])
    }

    private func migrate(_ state: LearnerState) -> LearnerState {
        var migrated = state
        migrated.schemaVersion = PersistenceSchema.currentVersion
        return migrated
    }
}
