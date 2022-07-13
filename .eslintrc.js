module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "semi": "off",
        "brace-style": ["error", "1tbs"],
        "no-trailing-spaces": "error",
        "no-var": "error",
        "prefer-const": "error",
        "spaced-comment": ["error", "always", { "markers": ["/"] }],
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/array-type": ["error", { default: "generic" }],
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: 'type-imports' }],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": ["error"],
        // "@typescript-eslint/method-signature-style": ["error", "property"],
        // enable?
        // "@typescript-eslint/explicit-function-return-type": ["error"],
    },
};