const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...process.env,                 // add all process env var here
        ...config.env                   // plus any command line overrides
      }
    },
  },
});
