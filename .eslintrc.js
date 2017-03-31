module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2015
  },
  plugins: ["node"],
  root: true,
  rules: {
    "accessor-pairs": 2,
    "array-bracket-spacing": [1, "never"],
    "array-callback-return": 2,
    "arrow-body-style": [1, "as-needed"],
    "arrow-parens": [1, "as-needed"],
    "arrow-spacing": [1, { after: true, before: true }],
    "block-scoped-var": 2,
    "block-spacing": 1,
    "brace-style": 0,
    "callback-return": 0,
    "camelcase": [1, { properties: "never" }],
    "capitalized-comments": 0,
    "class-methods-use-this": 1,
    "comma-dangle": 0,
    "comma-spacing": [1, { after: true, before: false }],
    "comma-style": [1, "last"],
    "curly": 0,
    "complexity": 0,
    "computed-property-spacing": [1, "never"],
    "consistent-return": 2,
    "consistent-this": [2, "that"],
    "default-case": 2,
    "dot-location": [1, "property"],
    "dot-notation": [1, { allowKeywords: true }],
    "eol-last": 1,
    "eqeqeq": 2,
    "func-names": 0,
    "func-name-matching": 0,
    "func-style": 0,
    "generator-star-spacing": [1, "before"],
    "global-require": 0,
    "guard-for-in": 2,
    "handle-callback-err": [2, "^(err|error)$"],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [1, 2, {
      CallExpression: { arguments: "first" },
      FunctionDeclaration: { parameters: "first" },
      FunctionExpression: { parameters: "first" },
      MemberExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 }
    }],
    "init-declarations": 0,
    "jsx-quotes": [1, "prefer-double"],
    "key-spacing": [1, { afterColon: true, beforeColon: false }],
    "keyword-spacing": [1, { after: true, before: true }],
    "line-comment-position": 0,
    "linebreak-style": 0,
    "lines-around-comment": 0,
    "lines-around-directive": [1, { before: "never", after: "always" }],
    "max-depth": [2, 10],
    "max-len": [1, {
      code: 100,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true
    }],
    "max-lines": 0,
    "max-nested-callbacks": [1, 5],
    "max-params": 0,
    "multiline-ternary": 0,
    "new-cap": 2,
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-per-chained-call": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-await-in-loop": 0,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-confusing-arrow": 0,
    "no-catch-shadow": 2,
    "no-continue": 0,
    "no-console": 0,
    "no-div-regex": 2,
    "no-duplicate-imports": 1,
    "no-else-return": 2,
    "no-empty-function": 1,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-extra-parens": [2, "functions"],
    "no-floating-decimal": 2,
    "no-implicit-globals": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-invalid-this": 2,
    "no-irregular-whitespace": [2, {
      skipStrings: true,
      skipRegExps: true,
      skipTemplates: true
    }],
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 1,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-operators": 0,
    "no-mixed-requires": [1, { allowCall: true, grouping: true }],
    "no-multi-assign": 0,
    "no-multi-spaces": 1,
    "no-multi-str": 0,
    "no-multiple-empty-lines": 0,
    "no-global-assign": 2,
    "no-negated-condition": 0,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 1,
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "no-restricted-properties": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-return-assign": 2,
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": [2, { props: true }],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "func-call-spacing": 1,
    "func-name-matching": 0,
    "no-sync": 0,
    "no-tabs": 1,
    "no-template-curly-in-string": 1,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 1,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": [1, {
      allowAfterThis: true,
      allowAfterSuper: true
    }],
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 1,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-expressions": 1,
    "no-unused-vars": [1, { args: "after-used", vars: "all" }],
    "no-use-before-define": 0,
    "no-useless-call": 1,
    "no-useless-computed-key": 1,
    "no-useless-concat": 1,
    "no-useless-constructor": 1,
    "no-useless-escape": 1,
    "no-useless-rename": 1,
    "no-useless-return": 1,
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-whitespace-before-property": 1,
    "no-with": 2,
    "object-curly-newline": 0,
    "object-curly-spacing": [1, "always"],
    "object-property-newline": 0,
    "object-shorthand": 1,
    "one-var": 0,
    "one-var-declaration-per-line": [1, "initializations"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "prefer-arrow-callback": 1,
    "prefer-const": 1,
    "prefer-destructuring": [1, {
      array: true,
      object: true
    }, {
      enforceForRenamedProperties: false
    }],
    "prefer-numeric-literals": 1,
    "prefer-promise-reject-errors": 1,
    "prefer-rest-params": 0,
    "prefer-spread": 1,
    "prefer-template": 1,
    "quote-props": [1, "as-needed", { keywords: false, numbers: true }],
    "quotes": [1, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "radix": [2, "always"],
    "require-await": 1,
    "require-jsdoc": 0,
    "require-yield": 2,
    "rest-spread-spacing": 1,
    "semi": 2,
    "semi-spacing": [1, { after: true, before: false }],
    "sort-keys": 0,
    "sort-imports": 0,
    "sort-vars": 0,
    "space-before-blocks": 1,
    "space-before-function-paren": [1, "never"],
    "space-in-parens": [1, "never"],
    "space-infix-ops": 1,
    "space-unary-ops": [1, { nonwords: false, words: true }],
    "spaced-comment": [1, "always", {
      block: { balanced: true }
    }],
    "strict": [2, "safe"],
    "symbol-description": 1,
    "template-curly-spacing": [1, "never"],
    "template-tag-spacing": [1, "never"],
    "unicode-bom": [2, "never"],
    "valid-jsdoc": 0,
    "valid-typeof": [2, { requireStringLiterals: true }],
    "vars-on-top": 0,
    "wrap-iife": [2, "inside", { functionPrototypeMethods: true }],
    "wrap-regex": 0,
    "yield-star-spacing": [1, "before"],
    "yoda": [1, "never", { exceptRange: true }],
    "node/exports-style": 0,
    "node/no-deprecated-api": 2,
    "node/no-missing-import": 2,
    "node/no-missing-require": 2,
    "node/no-unpublished-bin": 2,
    "node/no-unpublished-import": 0,
    "node/no-unpublished-require": 0,
    "node/no-unsupported-features": 2,
    "node/process-exit-as-throw": 2,
    "node/shebang": 2
  }
};