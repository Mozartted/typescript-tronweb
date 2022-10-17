module.exports = {
    env: {
        browser: true,
        commonjs: true,
        jquery: true,
        es2021: true,
    },
    globals: {
        bootstrap: 'readonly',
        ApexCharts: 'readonly',
        moment: 'readonly',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    root: true,
    parserOptions: {
        ecmaVersion: 13,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        indent: [
            1,
            4,
            {
                SwitchCase: 1,
                FunctionDeclaration: { parameters: 'first' },
                FunctionExpression: { parameters: 'first' },
                offsetTernaryExpressions: true,
                MemberExpression: 'off',
                CallExpression: { arguments: 'first' },
            },
        ],
        'linebreak-style': [2, 'unix'],
        quotes: [1, 'single', 'avoid-escape'],
        semi: [2, 'always'],
        'max-len': [1, 88, 2, { ignoreUrls: true }],
        'no-trailing-spaces': 2,
        'no-multi-spaces': 2,
        'array-bracket-spacing': 2,
        'keyword-spacing': ['error', { after: true, before: true }],
        'max-depth': [2, 7],
        'max-statements': [2, 133],
        complexity: [2, 45],
        'no-eval': 2,
        'no-underscore-dangle': 0,
        'no-loop-func': 2,
        'no-floating-decimal': 2,
        eqeqeq: [2, 'smart'],
        'new-cap': 2,
        'no-empty': 0,
        'space-infix-ops': 2,
        'comma-dangle': [2, 'always-multiline'],
        curly: [2, 'multi-or-nest', 'consistent'],
        'no-unused-vars': 0,
        // ts
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,
        // FIXME: only temporary
        '@typescript-eslint/no-this-alias': 0,
    },
};
