const commonConfig = require('./common');

/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  ...commonConfig,
  testEnvironment: 'node',
};