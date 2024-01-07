module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testMatch: ['**/*.spec.(ts|tsx)'],
  transform: {
    '.spec.(ts|tsx)': 'dts-jest/transform',
    '.(ts|tsx)': 'ts-jest'
  },
  globals: {
    window: {},
    _dts_jest_: {
      compiler_options: './tsconfig.json',
      enclosing_declaration: true,
      test_value: true
    }
  },
  reporters: ['default', 'dts-jest/reporter']
};
