module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: ['error', 'always'], // never 不允许有分号、always默认需要加分号
    quotes: ['error', 'single'],
    indent: ['off'], // error 红色的提示、off 关闭提示报错、warn 黄色的警告
    'arrow-body-style': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
