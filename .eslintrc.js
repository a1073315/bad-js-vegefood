module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
  },
  // extends: 'google',
  // quotes: [2, 'single'],
  // globals: {
  //   SwaggerEditor: false
  // },
  // env: {
  //   browser: true
  // },
  // rules:{
  //   "linebreak-style": 0
  // }
};
