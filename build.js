import StyleDictionary from "style-dictionary-utils"

const CanonicalDesignTokens = StyleDictionary.extend({
    source: ["tokens/**/*.json"],
    platforms: {
        scss: {
            transformGroup: "scss",
            buildPath: "build/scss/",
            files: [
                {
                    destination: "_variables.scss",
                    format: "scss/variables",
                },
            ],
        },
    },
})

CanonicalDesignTokens.buildAllPlatforms()
