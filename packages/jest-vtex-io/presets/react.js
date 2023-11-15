const commonConfig = require('./common');

/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  ...commonConfig,
  setupFilesAfterEnv: [require.resolve('../setupTests.cjs')],
  testEnvironment: 'jsdom',
  transform: {
    ...commonConfig.transform,
    '\\.(gql|graphql)$': 'jest-transform-graphql'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!swiper|ssr-window|dom7)'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('../fileMock.cjs')
  },
};
