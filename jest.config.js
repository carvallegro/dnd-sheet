module.exports = {
  'collectCoverageFrom': [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ],
  'coverageReporters': [
    'text',
    'lcov'
  ],
  'resolver': 'jest-pnp-resolver',
  'setupFiles': [
    'react-app-polyfill/jsdom',
    '<rootDir>/config/jest/register-context.js'
  ],
  'setupTestFrameworkScriptFile': '<rootDir>/config/jest/globalSetupTestFramework.js',
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'testMatch': [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
  ],
  'testEnvironment': 'jsdom',
  'testURL': 'http://localhost',
  'transform': {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  'transformIgnorePatterns': [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  'moduleNameMapper': {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@enums(.*)$': '<rootDir>/src/enums$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@redux(.*)$': '<rootDir>/src/redux$1',
    '^@common(.*)$': '<rootDir>/src/components/common$1',
    '^@character-elements(.*)$': '<rootDir>/src/components/character-elements$1'
  },
  'moduleFileExtensions': [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ]
}
