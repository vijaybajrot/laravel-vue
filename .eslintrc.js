module.exports = {
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "eslint:recommended",
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/recommended",
        "prettier/vue",
        "plugin:prettier/recommended"
    ],
    // required to lint *.vue files
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        semi: "off",
        "no-console": "off",
        "vue/max-attributes-per-line": "off",
        "prettier/prettier": ["error", { semi: true, tabWidth: 2 }]
    }
};
