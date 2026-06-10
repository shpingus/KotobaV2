// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "KotobaDesignSystem",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [
        .library(name: "KotobaDesignSystem", targets: ["KotobaDesignSystem"])
    ],
    targets: [
        .target(
            name: "KotobaDesignSystem",
            resources: [.process("Resources")]
        ),
        .testTarget(
            name: "KotobaDesignSystemTests",
            dependencies: ["KotobaDesignSystem"]
        )
    ]
)
