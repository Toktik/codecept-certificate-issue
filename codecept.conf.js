const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      url: 'http://github.com',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: true,
      capabilities: {
        chromeOptions: {
          args: [
            '--disable-gpu',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--ignore-certificate-errors',
            '--disable-dev-shm-usage',
          ]
        }
      }
    },
    // Puppeteer: {
    //   url: "http://github.com",
    //   show: true
    // }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'sandbox-codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: { //https://www.npmjs.com/package/wdio-selenium-standalone-service
      enabled: true, //i would prefer to use this plugin, but https://github.com/Codeception/CodeceptJS/issues/1739
      watch: false,
      services: ['selenium-standalone']
    }
  }
}
