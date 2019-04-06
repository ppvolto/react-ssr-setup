const paths = require('./config/paths');

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'prettier',
        'prettier/react',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
    ],
    globals: {
        __BROWSER__: true,
        __SERVER__: true,
    },
    plugins: ['babel', 'import', 'prettier', 'security'],
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
            },
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        'import/named': 0,
        'import/namespace': 0,
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'prettier/prettier': 'error',
    },
};
