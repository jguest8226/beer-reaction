module.exports = {
  'Demo Test' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('h1', 1000)
      .assert.containsText('h1', 'Beer')
      .end();
  }
};
