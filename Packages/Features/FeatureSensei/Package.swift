// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureSensei",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureSensei", targets: ["FeatureSensei"])],
    dependencies: [
        .package(path: "../../KotobaDesignSystem"),
        .package(path: "../../LearningEngine")
    ],
    targets: [
        .target(name: "FeatureSensei", dependencies: ["KotobaDesignSystem", "LearningEngine"])
    ]
)
