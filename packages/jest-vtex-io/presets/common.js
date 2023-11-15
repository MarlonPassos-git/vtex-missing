/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
 transformIgnorePatterns: [
    '<rootDir>/node_modules'
  ],
  globals: {
    'ts-jest': {
      tsconfig: {
        allowJs: true
      },
      isolatedModules: true,
      allowSyntheticDefaultImports: true
    }
  }
};

