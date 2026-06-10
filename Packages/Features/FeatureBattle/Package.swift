// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureBattle",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureBattle", targets: ["FeatureBattle"])],
    dependencies: [
        .package(path: "../../KotobaDesignSystem"),
        .package(path: "../../ContentKit"),
        .package(path: "../../LearningEngine")
    ],
    targets: [
        .target(name: "FeatureBattle", dependencies: ["KotobaDesignSystem", "ContentKit", "LearningEngine"])
    ]
)
