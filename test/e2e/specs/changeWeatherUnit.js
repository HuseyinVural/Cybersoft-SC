// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Hava durumu arama testi': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#temp-city', 5000)
      //.pause("1000")
      .click("#temp-unit-F")
      //.pause("3000")
      .waitForElementVisible('#temp-unit-F[class=selected]', 5000)
      .end()
  }
}
