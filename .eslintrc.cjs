module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['jest'],
  ignorePatterns: [
    'static/**/*',
    'cypress/**/*',
    'assets/**/*',
    'coverage/**/*'
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-unused-vars': 'off'
  }
}
