// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "LearningEngine",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [
        .library(name: "LearningEngine", targets: ["LearningEngine"])
    ],
    dependencies: [
        .package(path: "../ContentKit")
    ],
    targets: [
        .target(name: "LearningEngine", dependencies: ["ContentKit"]),
        .testTarget(name: "LearningEngineTests", dependencies: ["LearningEngine", "ContentKit"])
    ]
)
