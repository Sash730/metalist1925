var {defineSupportCode} = require('cucumber');

defineSupportCode(function({ Given, Then }) {
    Given(/^I login with email "([^"]*)" and password "([^"]*)"$/, function(email, password, callback) {
        this.browser
            .visit('#/signin')
            .setValue("input[name='email']", email)
            .setValue("input[name='password']", password)
            .click("button:contains('Sign in')")
            .then(callback);
    });

    Given(/^I am on "(.+)"/, function (url, callback) {
        this.browser.visit(url).then(callback);
    });

    Given(/^I am on external host "(.+)"/, function (url, callback) {
        this.browser.visitExternal(url).then(callback);
    });

    Given(/^I am on homepage$/, function (callback) {
        this.browser.visit('#/').then(callback);
    });

    Given(/^I should be on "([^"]*)" page$/, function(expectedTitle, callback) {
        this.browser.assertTitle(expectedTitle).then(callback);
    });

    Then(/^take screenshot$/, function (callback) {
        this.browser.saveScreenshot('.screen.png').then(callback);
    });

    Given(/^I am on external hosts "(.+)"$/, function(url, callback) {
        this.browser
            .visitExternal(url)
            .then(callback);
    });

    Then(/^I should see alert with class "(.+)" and message "(.+)"$/, function(className, message, callback) {
        this.browser
            .waitForElementPresent('div.toasted.primary.' + className + ':contains(' + message + ')', 6000)
            .then(callback);
    });
});
