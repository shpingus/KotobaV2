import Foundation

/// Loads bundled language packs and validates them before app code sees them.
public enum ContentLoader {
    public static func loadBundledSamplePack() throws -> LanguagePack {
        try loadBundledSamplePack(bundle: .module)
    }

    public static func loadBundledSamplePack(bundle: Bundle) throws -> LanguagePack {
        guard let url = bundle.url(forResource: "sample-ja-pre-n5", withExtension: "json") else {
            throw ContentLoaderError.missingResource("sample-ja-pre-n5.json")
        }

        let data = try Data(contentsOf: url)
        let pack = try JSONDecoder().decode(LanguagePack.self, from: data)
        try PackValidator.validate(pack)
        return pack
    }
}

public enum SupportedLanguage: String, CaseIterable, Sendable {
    case japanese = "ja"
}

public enum ContentLoaderError: Error, Equatable {
    case missingResource(String)
}
