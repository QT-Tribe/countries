import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  ...presets.createEsmPreset(),
};

export default config;
