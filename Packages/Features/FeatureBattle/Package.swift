// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "FeatureBattle",
    platforms: [.iOS(.v17)],
    products: [.library(name: "FeatureBattle", targets: ["FeatureBattle"])],
    dependencies: [.package(path: "../../KotobaDesignSystem")],
    targets: [
        .target(name: "FeatureBattle", dependencies: ["KotobaDesignSystem"])
    ]
)
