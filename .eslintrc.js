module.exports = {
	"parser": "babel-eslint",
	"extends": [
			"standard",
			"eslint:recommended",
			"plugin:react/recommended"
	],
	"rules": {
			"semi": [2, "always"],
			"space-before-function-paren": ["error", "never"],
			"camelcase": [2, { "properties": "never" }],
			"indent": 0,
	},
	"env": {
			"es6": true
	},
	"ecmaFeatures": {
			"destructuring": true,
			"modules": true,
	},
	"overrides": [
			{
				"files": "*.test.js",
				"env": {
					"jest": true
				}
			},
	]
};
