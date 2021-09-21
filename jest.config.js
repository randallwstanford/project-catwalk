// /* eslint-disable quotes */
// /* eslint-disable max-len */

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    './jest.setup.js',
    '@testing-library/jest-dom/extend-expect'
  ]
};