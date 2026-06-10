import Foundation

/// Presentation hooks for Japanese script behavior; engine logic stays language-neutral.
public protocol ScriptSupport {
    var language: SupportedLanguage { get }
    func displayText(surface: String, reading: String?, showRomaji: Bool) -> String
    func normalizeAnswer(_ answer: String) -> String
}

public struct JapaneseScriptSupport: ScriptSupport {
    public let language: SupportedLanguage = .japanese

    public init() {}

    public func displayText(surface: String, reading: String?, showRomaji: Bool) -> String {
        guard showRomaji, let reading, !reading.isEmpty else { return surface }
        return "\(surface) · \(reading)"
    }

    public func normalizeAnswer(_ answer: String) -> String {
        answer.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
    }
}
