module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "html",
        "import"
    ],
    "settings": {
        "html/indent": "+4"  // indentation is the <script> indentation plus four spaces.
    },
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "script"
    },
    "rules": {
        "no-console": "off",
        "indent": ["error", 4, {
            "MemberExpression": 1,
            "SwitchCase": 1
        }],
        "no-tabs": "error",
        "camelcase": ["error", {
            "properties": "always"
        }],
        "import/prefer-default-export": "off",
        "no-use-before-define": "off",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "prefer-destructuring": "off",
        "space-unary-ops": ["warn", {
            "words": false,
            "nonwords": true
        }]
    }
};
