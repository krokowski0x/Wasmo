const path = require('path');

module.exports = {
  plugins: ['jest', 'promise', 'security'],
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')]
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'no-unused-expressions': [2, { allowTaggedTemplates: true }],
    'react/require-default-props': 0,
    'react/default-props-match-prop-types': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ]
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ],
  globals: {
    $PropertyType: true,
    before: true,
    after: true
  }
};
