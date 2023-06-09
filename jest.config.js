module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  testTimeout: 30000,
  transformIgnorePatterns: ["node_modules/(?!swiper|@govtechsg|uuid).*/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
