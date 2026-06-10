// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureProfile",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureProfile", targets: ["FeatureProfile"])],
    dependencies: [
        .package(path: "../../KotobaDesignSystem"),
        .package(path: "../../ContentKit"),
        .package(path: "../../LearningEngine"),
        .package(path: "../../Persistence")
    ],
    targets: [
        .target(name: "FeatureProfile", dependencies: ["KotobaDesignSystem", "ContentKit", "LearningEngine", "Persistence"])
    ]
)
