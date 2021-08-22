module.exports = {
   'root': true,
   'extends': ["eslint: recommended",
      "google",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"],
   'parser': '@typescript-eslint/parser',
   'plugins': [
      '@typescript-eslint',
   ],
   "rules": {
      "space-in-brackets": ["error", "never"],
      "@typescript-eslint/rule-name": "error"
   },


};
