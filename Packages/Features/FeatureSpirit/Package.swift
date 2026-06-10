// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureSpirit",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureSpirit", targets: ["FeatureSpirit"])],
    dependencies: [
        .package(path: "../../KotobaDesignSystem"),
        .package(path: "../../ContentKit"),
        .package(path: "../../LearningEngine"),
        .package(path: "../../Persistence")
    ],
    targets: [
        .target(name: "FeatureSpirit", dependencies: ["KotobaDesignSystem", "ContentKit", "LearningEngine", "Persistence"])
    ]
)
