module.exports = {
  env: {
    'commonjs': true,
    'node': true,
    'browser': true,
    'es6': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: [
    'prettier',
    'react'
  ],
  globals: {
    '_': true,
  },
  rules: {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    'linebreak-style': ['error', 'unix'
    ],
    'semi': ['error', 'never'
    ],
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'
    ],
    'no-alert': 'error',
    'no-console': [
      0,
      { 'allow': ['warn', 'error'
        ]
      }
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-self-compare': 'error',
    'arrow-spacing': ['error',
      { 'before': true, 'after': true
      }
    ],
    'space-before-blocks': ['error',
      { 'functions': 'always', 'keywords': 'always', 'classes': 'always'
      }
    ],
    'object-curly-spacing': ['error', 'always'
    ],
    'block-spacing': ['error', 'always'
    ],
    'keyword-spacing': ['error'
    ],
    'brace-style': ['warn', '1tbs'
    ],
    'camelcase': [
      'warn',
      {
        'properties': 'never'
      }
    ],
    'comma-style': ['error', 'last'
    ],
    'no-unused-vars': 'error',
    'operator-linebreak': ['error', 'before'
    ],
    'no-unneeded-ternary': 'error',
    'no-const-assign': 'error',
    'prefer-const': 'warn',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': [
      'error',
      {
        'includeExports': true
      }
    ],
    'no-lonely-if': 'error',
    'no-continue': 'error',
    'eol-last': 'error',
    'prettier/prettier': [
      'error',
      {
        'printWidth': 100,
        'singleQuote': true,
        'trailingComma': 'es5',
        'semi': false
      }
    ],
    'react/jsx-uses-vars': 2,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
}
