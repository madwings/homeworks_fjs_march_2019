module.exports = {
	"extends": "airbnb-base",
	"parserOptions": {

	},
	"plugins": [],
	"rules": {
		"no-console": 0,
		"indent": ["error", 4, {
			"MemberExpression": 1,
			"SwitchCase": 1
		}],
		"no-tabs": "off",
		"camelcase": [2, {"properties": "always"}],

		"import/prefer-default-export": "off",
		"no-use-before-define": "off",
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}]
	},
	"env": {
		"browser": true,
		"es6": true,
		"jest": true
	}
};
