// swift-tools-version: 5.10

import PackageDescription

let package = Package(
    name: "ContentKit",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [
        .library(name: "ContentKit", targets: ["ContentKit"])
    ],
    targets: [
        .target(name: "ContentKit", resources: [.process("Resources")]),
        .testTarget(name: "ContentKitTests", dependencies: ["ContentKit"])
    ]
)
