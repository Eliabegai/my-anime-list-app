module.exports = {
  extends: [
    "semistandard",
    "eslint:recommended"
  ],
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-var": "error",
    semi: [ "error",
      "always" ],
    quotes: [ "error",
      "double" ],
    "prefer-const": "error",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "eol-last": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1
      }
    ],
    "no-console": [
      "error",
      {
        allow: [
          "debug",
          "error",
          "clear"
        ]
      }
    ],
    "import/first": "error",
    "no-undef": "error",
    "array-bracket-spacing": [
      "error",
      "always",
      {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "array-element-newline": [
      "error",
      "always",
      {
        multiline: true,
        minItems: 2
      }
    ],
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    "object-curly-newline": [
      "error",
      "always"
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "brace-style": "error",
    "implicit-arrow-linebreak": [ "error",
      "beside" ],
    "multiline-ternary": [ "error",
      "always" ],
    "no-multi-spaces": "error"
  }
};
