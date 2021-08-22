module.exports = {
   'root': true,
   'extends': ["eslint: recommended",
      "google",
      "plugin:@typescript-eslint/recommended"],
   'parser': '@typescript-eslint/parser',
   'plugins': [
      '@typescript-eslint',
   ],
   "rules": {
      "space-in-brackets": ["error", "never"],
      "@typescript-eslint/rule-name": "error"
   },


};