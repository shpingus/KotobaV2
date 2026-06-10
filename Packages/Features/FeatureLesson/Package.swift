// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureLesson",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureLesson", targets: ["FeatureLesson"])],
    dependencies: [
        .package(path: "../../KotobaDesignSystem"),
        .package(path: "../../ContentKit"),
        .package(path: "../../LearningEngine"),
        .package(path: "../../Persistence")
    ],
    targets: [
        .target(name: "FeatureLesson", dependencies: ["KotobaDesignSystem", "ContentKit", "LearningEngine", "Persistence"])
    ]
)
