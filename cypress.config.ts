/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';

export default defineConfig({
	video: false,
	modifyObstructiveCode: false,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.ts')(on, config);
		},
		baseUrl: 'http://localhost:8080',
		specPattern: 'cypress/e2e/**/*.spec.ts',
	},
});
