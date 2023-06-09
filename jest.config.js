module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  testTimeout: 30000,
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    "uuid": require.resolve('uuid'),
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
