module.exports = {
  "root": true,
  "settings": {
    "ecmascript": 6,
    "jsx": true,
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react", "jsx-a11y", "react-hooks", "prettier"],
  "env": {
    "node": true,
    "browser": true,
    "jest": true,
    "es6": true
  },
  "globals": {
    "graphql": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "rules": {
    // Specify Unix line endings.
    "linebreak-style": ["error", "unix"],

    // Enforce camelcase for variables.
    "camelcase": "error",

    // Prohibit use of == and != in favor of === and !==.
    "eqeqeq": "error",

    // If ESlint considers a file to be a Node module one 'use strict'
    // is needed at the top of the file. If not 'use strict' needs to
    // be added at the top of the function scope.
    "strict": ["error", "safe"],

    // Prohibit use of a variable before it is defined.
    "no-undef": "error",

    // Require capitalized names for constructor functions.
    "new-cap": "error",

    // Warn when variables are defined but never used.
    "no-unused-vars": "warn",

    // Require one var declaration for each variable and
    // declare each variable on a newline.
    "one-var": ["error", "never"],

    // Validates JSDoc comments are syntactically correct
    "valid-jsdoc": "error",

    // Treat var as Block Scoped
    "block-scoped-var": "warn",

    // Require Following Curly Brace Conventions
    "curly": "error",

    // Disallow Use of Alert
    "no-alert": "warn",

    // Disallow eval()
    "no-eval": "error",

    // Disallow the type conversion with shorter notations
    "no-implicit-coercion": "error",

    // Disallow Functions in Loops
    "no-loop-func": "error",

    // Disallow Script URLs
    "no-script-url": "error",

    // Disallow Use of the Comma Operator
    "no-sequences": "error",

    // Disallow unnecessary concatenation of strings
    "no-useless-concat": "error",

    // Disallow Early Use
    "no-use-before-define": "error",

    // Require file to end with single newline
    "eol-last": "error",

    // Disallow trailing spaces at the end of lines
    "no-trailing-spaces": "error",

    // Disallow Dangling Underscores in Identifiers
    "no-underscore-dangle": "error",

    // Require JSDoc comment
    "require-jsdoc": "error",

    // Require Or Disallow Space Before Blocks
    "space-before-blocks": "error",

    // Disallow Yoda Conditions
    "yoda": "error",

    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react-hooks/rules-of-hooks": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "prettier/prettier": "error"
  }
}