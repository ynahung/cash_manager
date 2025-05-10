module.exports = {
  transformIgnorePatterns: [
    "[/\\]node_modules[/\\](?!(@mui|axios)/)"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
