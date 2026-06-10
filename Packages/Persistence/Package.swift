// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "Persistence",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [
        .library(name: "Persistence", targets: ["Persistence"])
    ],
    dependencies: [
        .package(path: "../ContentKit"),
        .package(path: "../LearningEngine")
    ],
    targets: [
        .target(name: "Persistence", dependencies: ["ContentKit", "LearningEngine"]),
        .testTarget(name: "PersistenceTests", dependencies: ["Persistence", "ContentKit", "LearningEngine"])
    ]
)
