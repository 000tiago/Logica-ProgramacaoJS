/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
        languageOptions: {
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
        },
        rules: {
            'no-console': 'warn',
        },
    },
];

module.exports = config;
