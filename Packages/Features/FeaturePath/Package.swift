// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeaturePath",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeaturePath", targets: ["FeaturePath"])],
    dependencies: [
        .package(path: "../../KotobaDesignSystem"),
        .package(path: "../../ContentKit"),
        .package(path: "../../LearningEngine"),
        .package(path: "../../Persistence")
    ],
    targets: [
        .target(name: "FeaturePath", dependencies: ["KotobaDesignSystem", "ContentKit", "LearningEngine", "Persistence"])
    ]
)
