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
      .waitForElementVisible('#app', 5000)
      .setValue("#test-search-input", "Antalya")
      .click("#test-search-button")
      .assert.elementPresent('.weather-row-widget')
      .end()
  }
}
