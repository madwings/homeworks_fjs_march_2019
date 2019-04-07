module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "es6": true,
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
        "no-tabs": "off",
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
        "prefer-destructuring": "off"
    }
};
