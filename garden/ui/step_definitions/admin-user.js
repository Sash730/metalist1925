var {defineSupportCode} = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {
    Then(/^I should see "(.+)" link in nav menu$/, function (name, callback) {
        this.browser
            .waitForElementPresent('nav li a:contains(' + name + ')', 6000)
            .then(callback);
    });

    Then(/^I should not see "(.+)" link nav menu$/, function (name, callback) {
        this.browser
            .waitForElementNotPresent('nav li a:contains("' + name + '")', 6000)
            .then(callback);
    });

    Then(/^I should see Service Catalog List table$/, function (callback) {
        this.browser
            .waitForElementPresent('table.table.table-striped.scm-list', 10000)
            .then(callback);
    });

    Then(/^I should see the following options in nav menu:$/, function (table, callback) {
        this.browser
            .assertListEquals('nav li a', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I should see the follow columns in the Service Catalog List:$/, function (table, callback) {
        this.browser
            .assertListEquals('table.scm-list tr th', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I click "(.+)" link in nav menu$/, function (name, callback) {
        this.browser
            .click('nav li a:contains(' + name + ')')
            .then(callback);
    });

    Then(/^I click "(.+)" button$/, function (name, callback) {
        this.browser
            .click('button:contains(' + name + ')')
            .then(callback);
    });

    Then(/^I should see login form`s fields with error class:$/, function (table, callback) {
        this.browser
            .assertListEquals('form#signin-form div.form-group.has-error label', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I should see login form`s fields with error messages:$/, function (table, callback) {
        this.browser
            .assertListEquals('form#signin-form div.form-group.has-error span', table.hashes().map(row => row.column))
            .then(callback);
    });

    Given(/^I enter "([^"]*)" in "([^"]*)" input$/, function(value, fieldName, callback) {
        this.browser
            .setValue("input[name='" + fieldName + "']", value)
            .then(callback);
    });

    Then(/^I reload browser$/, function (callback) {
        this.browser
            .refreshPage()
            .then(callback);
    });

});
