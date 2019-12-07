module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "babel",
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "features": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "accessor-pairs": "warn",
        "array-bracket-newline": ["warn", {"multiline": true}],
        "array-bracket-spacing": ["warn", "never"],
        "array-callback-return": "warn",
        "arrow-body-style": "off",
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": "warn",
        "block-scoped-var": "warn",
        "block-spacing": ["warn", "never"],
        "brace-style": ["off", "stroustrup"],
        "callback-return": "off",
        "camelcase": "warn",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "warn",
        "comma-spacing": ["warn", {"before": false, "after": true}],
        "comma-style": ["warn", "last"],
        "complexity": ["warn", 10],
        "computed-property-spacing": ["warn", "never"],
        "consistent-return": ["warn", {"treatUndefinedAsUnspecified": true}],
        "consistent-this": "off",
        "constructor-super": "warn",
        "curly": ["warn", "all"],
        "default-case": "off",
        "dot-location": ["warn", "property"],
        "dot-notation": ["warn", {"allowKeywords": true}],
        "eol-last": ["warn", "always"],
        "eqeqeq": ["warn", "always", {"null": "ignore"}],
        "for-direction": "off",
        "func-call-spacing": ["warn", "never"],
        "func-name-matching": "off",
        "func-names": ["warn", "always"],
        "func-style": "off",
        "generator-star-spacing": ["warn", {"before": false, "after": true}],
        "global-require": "warn",
        "guard-for-in": "warn",
        "handle-callback-err": "off",
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": ["warn", 4, {"SwitchCase": 1}],
        "indent-legacy": "off",
        "init-declarations": "warn",
        "jsx-quotes": ["warn", "prefer-double"],
        "key-spacing": ["warn", {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": "warn",
        "line-comment-position": "off",
        "linebreak-style": ["warn", "unix"],
        "lines-around-comment": "off",
        "max-depth": ["warn", 3],
        "max-len": ["warn", 120, 4, {"ignoreUrls": true}],
        "max-lines": ["warn", 800],
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": ["warn", 30, {"ignoreTopLevelFunctions": true}],
        "max-statements-per-line": "warn",
        "multiline-ternary": "off",
        "new-cap": "warn",
        "new-parens": "warn",
        "newline-per-chained-call": "off",
        "no-alert": "warn",
        "no-array-constructor": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-buffer-constructor": "warn",
        "no-caller": "warn",
        "no-case-declarations": "warn",
        "no-catch-shadow": "off",
        "no-class-assign": "warn",
        "no-compare-neg-zero": "warn",
        "no-cond-assign": "warn",
        "no-confusing-arrow": ["warn", {"allowParens": true}],
        "no-console": "off",
        "no-const-assign": "warn",
        "no-constant-condition": "warn",
        "no-continue": "off",
        "no-control-regex": "warn",
        "no-debugger": "warn",
        "no-delete-var": "warn",
        "no-div-regex": "off",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-duplicate-imports": "warn",
        "no-else-return": "off",
        "no-empty": "warn",
        "no-empty-character-class": "warn",
        "no-empty-function": "warn",
        "no-empty-pattern": "warn",
        "no-eq-null": "off",
        "no-eval": "warn",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-boolean-cast": "warn",
        "no-extra-label": "warn",
        "no-extra-parens": ["warn", "functions"],
        "no-extra-semi": "warn",
        "no-fallthrough": "warn",
        "no-floating-decimal": "warn",
        "no-func-assign": "warn",
        "no-global-assign": "warn",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "warn",
        "no-inline-comments": "off",
        "no-inner-declarations": "warn",
        "no-invalid-regexp": "warn",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "warn",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "warn",
        "no-loop-func": "warn",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-mixed-spaces-and-tabs": "warn",
        "no-multi-assign": "warn",
        "no-multi-spaces": ["warn", {"exceptions": {"Property": false}}],
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "warn",
        "no-negated-condition": "warn",
        "no-negated-in-lhs": "warn",
        "no-nested-ternary": "off",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-require": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "warn",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-param-reassign": ["warn", {"props": true}],
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "warn",
        "no-prototype-builtins": "off",
        "no-redeclare": "warn",
        "no-regex-spaces": "warn",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": ["warn", "except-parens"],
        "no-return-await": "warn",
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow": "off",
        "no-shadow-restricted-names": "off",
        "no-spaced-func": "warn",
        "no-sparse-arrays": "warn",
        "no-sync": "off",
        "no-tabs": "warn",
        "no-template-curly-in-string": "off",
        "no-ternary": "off",
        "no-this-before-super": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef": "warn",
        "no-undef-init": "warn",
        "no-undefined": "off",
        "no-underscore-dangle": "warn",
        "no-unexpected-multiline": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": "warn",
        "no-unreachable": "warn",
        "no-unsafe-finally": "warn",
        "no-unsafe-negation": "warn",
        "no-unused-expressions": ["warn", {"allowShortCircuit": true}],
        "no-unused-labels": "warn",
        "no-unused-vars": "warn",
        "no-use-before-define": ["warn", {"variables": false, "classes": false, "functions": true}],
        "no-useless-call": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "warn",
        "no-void": "warn",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "warn",
        "no-with": "warn",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": ["warn", {"consistent": true, "multiline": true}],
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "object-shorthand": ["off", "consistent-as-needed"],
        "one-var": ["warn", "never"],
        "one-var-declaration-per-line": "warn",
        "operator-assignment": "off",
        "operator-linebreak": ["warn", "before"],
        "padded-blocks": "off",
        "padding-line-between-statements": "off",
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "warn",
        "prefer-promise-reject-errors": "warn",
        "prefer-reflect": "off",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": ["warn", "single"],
        "radix": "warn",
        "require-await": "warn",
        "require-jsdoc": "off",
        "require-yield": "warn",
        "rest-spread-spacing": ["warn", "never"],
        "semi": ["warn", "always"],
        "semi-spacing": "warn",
        "semi-style": ["warn", "last"],
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": ["warn", "always"],
        "space-before-function-paren": ["warn", {"anonymous": "always", "named": "never"}],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",
        "spaced-comment": ["warn", "always"],
        "strict": "off",
        "switch-colon-spacing": ["warn", {"before": false, "after": true}],
        "symbol-description": "warn",
        "template-curly-spacing": ["warn", "never"],
        "template-tag-spacing": ["warn", "never"],
        "unicode-bom": "warn",
        "use-isnan": "warn",
        "valid-jsdoc": "off",
        "valid-typeof": "warn",
        "vars-on-top": "off",
        "wrap-iife": ["warn", "any"],
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "warn",
        "babel/object-curly-spacing": ["warn", "never"],
        "react/default-props-match-prop-types": "warn",
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "warn",
        "react/forbid-prop-types": "off",
        "react/jsx-boolean-value": "warn",
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-curly-spacing": "warn",
        "react/jsx-equals-spacing": "warn",
        "react/jsx-filename-extension": ["warn", {"extensions": [".js", ".jsx", ".es"]}],
        "react/jsx-first-prop-new-line": "warn",
        "react/jsx-handler-names": "off",
        "react/jsx-indent-props": ["warn", 4],
        "react/jsx-indent": ["warn", 4],
        "react/jsx-key": "warn",
        "react/jsx-max-props-per-line": ["warn", {"when": "multiline", "maximum": 1}],
        "react/jsx-no-bind": ["warn", {"ignoreRefs": true}],
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-literals": "off",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-sort-props": "off",
        "react/jsx-tag-spacing": "warn",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "warn",
        "react/jsx-wrap-multilines": "warn",
        "react/no-array-index-key": "warn",
        "react/no-children-prop": "warn",
        "react/no-danger-with-children": "warn",
        "react/no-danger": "warn",
        "react/no-deprecated": "warn",
        "react/no-did-mount-set-state": "off",
        "react/no-did-update-set-state": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-find-dom-node": "warn",
        "react/no-is-mounted": "warn",
        "react/no-multi-comp": ["warn", {"ignoreStateless": true}],
        "react/no-render-return-value": "warn",
        "react/no-set-state": "off",
        "react/no-string-refs": "warn",
        "react/no-unescaped-entities": "warn",
        "react/no-unknown-property": "warn",
        "react/no-unused-prop-types": "warn",
        "react/no-will-update-set-state": "warn",
        "react/prefer-es6-class": "warn",
        "react/prefer-stateless-function": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "warn",
        "react/require-optimization": "off",
        "react/require-render-return": "warn",
        "react/self-closing-comp": ["warn", {"html": false}],
        "react/sort-prop-types": "off",
        "react/style-prop-object": "warn",
        "react/void-dom-elements-no-children": "warn",
        "react/sort-comp": [
            0,
            {
                "order": [
                    "static-properties",
                    "static-methods",
                    "state",
                    "properties",
                    "lifecycle",
                    "everything-else",
                    "render"
                ],
                "groups": {
                    "static-properties": [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics"
                    ],
                    "lifecycle": [
                        "getDefaultProps",
                        "getInitialState",
                        "constructor",
                        "getChildContext",
                        "componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "componentDidUpdate",
                        "componentWillUnmount"
                    ]
                }
            }
        ]
    }
};
