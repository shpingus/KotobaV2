import Foundation

/// Owns learner-state storage and forward migrations; it never embeds content payloads.
public enum PersistenceScaffold {
    public static let currentSchemaVersion = 1
}
