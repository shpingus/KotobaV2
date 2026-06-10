// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureOnboarding",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureOnboarding", targets: ["FeatureOnboarding"])],
    dependencies: [.package(path: "../../KotobaDesignSystem")],
    targets: [
        .target(name: "FeatureOnboarding", dependencies: ["KotobaDesignSystem"])
    ]
)
