/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2, 
  useTabs: false,
  semi: true, 
  singleQuote: true, 
  quoteProps: 'as-needed', 
  jsxSingleQuote: false, 
  trailingComma: 'none', 
  bracketSpacing: true, 
  jsxBracketSameLine: false, 
  arrowParens: 'always', 
  endOfLine: 'auto', 

  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200 
      }
    }
  ]
};
