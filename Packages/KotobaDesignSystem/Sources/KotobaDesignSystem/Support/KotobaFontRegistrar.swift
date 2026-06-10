import CoreText
import Foundation

/// Registers bundled font resources once; it does not fetch fonts at runtime.
public enum KotobaFontRegistrar {
    public static func registerBundledFonts() {
        fontResourceNames.forEach(registerFontResource)
    }

    private static let fontResourceNames = [
        "SpaceGrotesk-Regular.ttf",
        "PlusJakartaSans-Regular.ttf",
        "ZenKakuGothicNew-Regular.ttf",
        "ZenMaruGothic-Regular.ttf"
    ]

    private static func registerFontResource(_ resourceName: String) {
        let name = (resourceName as NSString).deletingPathExtension
        let ext = (resourceName as NSString).pathExtension

        guard let url = Bundle.module.url(forResource: name, withExtension: ext) else {
            return
        }

        CTFontManagerRegisterFontsForURL(url as CFURL, .process, nil)
    }
}
