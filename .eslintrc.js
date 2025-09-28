module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-console': 0,
    'space-in-parens': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'padded-blocks': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-bitwise': 0,
    'no-shadow': 0,
    'camelcase': 'off', // Allow snake_case for mathematical variables
    'no-continue': 'off', // Allow continue statements
    'no-restricted-syntax': 'off', // Allow for-in loops
    'guard-for-in': 'off', // Allow for-in loops without guards
    'no-unused-expressions': 'off', // Allow unused expressions in tests
    'func-names': 'off', // Allow unnamed functions
    'max-classes-per-file': 'off', // Allow multiple classes per file
    'class-methods-use-this': 'off', // Allow methods that don't use this
    'no-extend-native': 'off', // Allow extending native prototypes
    'no-self-assign': 'off', // Allow self assignment
    'no-mixed-operators': 'off', // Allow mixed operators for bitwise operations
    'no-sequences': 'off', // Allow comma operator
    'no-constant-condition': 'off', // Allow constant conditions
    'no-undef': 'off', // Allow undefined variables (some test files)
    'no-unused-vars': 'off', // Allow unused variables
    'array-callback-return': 'off', // Allow array callbacks without return
    'import/extensions': 'off', // Allow file extensions in imports
    'import/order': 'off', // Allow any import order
    'import/newline-after-import': 'off', // Don't require newlines after imports
    'prefer-destructuring': 'off', // Allow non-destructured assignments
    'arrow-parens': 'off', // Allow arrow functions without parentheses
    'arrow-body-style': 'off', // Allow any arrow function style
    'implicit-arrow-linebreak': 'off', // Allow implicit arrow linebreaks
    'no-else-return': 'off', // Allow else after return
    'no-case-declarations': 'off', // Allow declarations in case blocks
    'no-confusing-arrow': 'off', // Allow confusing arrow functions
    'no-multi-spaces': 'off', // Allow multiple spaces
    'operator-linebreak': 'off', // Allow any operator linebreak
    'no-multi-assign': 'off', // Allow chained assignments
    'no-restricted-properties': 'off', // Allow Math.pow
    'prefer-exponentiation-operator': 'off', // Allow Math.pow
    'comma-dangle': 'off', // Allow trailing commas
    'object-curly-spacing': 'off', // Allow any object spacing
    'space-infix-ops': 'off', // Allow any operator spacing
    'keyword-spacing': 'off', // Allow any keyword spacing
    'indent': 'off', // Allow any indentation
    'quotes': 'off', // Allow any quote style
    'semi': 'off', // Allow any semicolon usage
    'eol-last': 'off', // Don't require newline at end of file
    'no-extra-semi': 'off', // Allow extra semicolons
    'function-paren-newline': 'off', // Allow any function paren newlines
    'comma-spacing': 'off', // Allow any comma spacing
    'array-bracket-spacing': 'off', // Allow any array bracket spacing
    'prefer-template': 'off', // Allow string concatenation
    'no-multiple-empty-lines': 'off', // Allow multiple empty lines
    'one-var': 'off', // Allow multiple variable declarations
    'one-var-declaration-per-line': 'off', // Allow multiple declarations per line
    'nonblock-statement-body-position': 'off', // Allow any statement position
    'curly': 'off', // Allow non-curly if statements
    'jsdoc/require-jsdoc': 'warn', // Require JSDoc for functions
    'jsdoc/require-description': 'warn', // Require description in JSDoc
    'jsdoc/require-param': 'warn', // Require param documentation
    'jsdoc/require-returns': 'warn', // Require return documentation
  },
  env: {
    browser: false, // browser global variables.
    node: true, // Node.js global variables and Node.js-specific rules.
    mocha: true, // adds all of the Mocha testing global variables.
    es2022: true, // Enable ES2022 features
  },
  plugins: ['import', 'jsdoc'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },
};
