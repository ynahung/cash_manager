module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: [
    "[/\\]node_modules[/\\](?!(@mui|axios)/)"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom"
};
