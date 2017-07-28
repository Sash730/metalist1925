var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

    Then(/^I see Create Catalog button$/, function (callback) {
        this.browser
            .waitForElementPresent('div.pull-left .btn.btn-action', 5000)
            .then(callback);
    });

    Then(/^I click Create Catalog button$/, function (callback) {
        this.browser
            .click('div.pull-left .btn.btn-action')
            .then(callback);
    });

    Then(/^I should see form with fields:$/, function (table, callback) {
        this.browser
            .assertListEquals('div#catalog-create-modal .form-group label', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I wait submit form$/, function (callback) {
        this.browser
            .waitForElementPresent('div#catalog-create-modal div.form-group.has-error', 5000)
            .then(callback);
    });

    Then(/^I should see form`s fields with error class:$/, function (table, callback) {
        this.browser
            .assertListEquals('div#catalog-create-modal div.form-group.has-error label', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I should see "(.+)" form`s fields with error messages:$/, function (id, table, callback) {
        this.browser
            .assertListEquals('div[id="' + id + '"] div.form-group.has-error span', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I click "(.+)" button in "(.+)"$/, function (name, id, callback) {
        this.browser
            .click('div[id="' + id + '"] button:contains(' + name + ')')
            .then(callback);
    });

    Then(/^I click the dropdown button$/, function (callback) {
        this.browser
            .waitForElementNotPresent('div.loading', 5000)
            .pause(2000)
            .click('table.scm-list tr:nth-child(1) td.action button')
            .then(callback);
    });

    Then(/^I should see dropdown menu with links:$/, function (table, callback) {
        this.browser
            .assertListEquals('tr:nth-child(1) ul.dropdown-menu li', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^I click "(.+)" link dropdown menu$/, function (name, callback) {
        this.browser
            .click('tr:nth-child(1) ul.dropdown-menu li:contains(' + name + ')')
            .then(callback);
    });

    Then(/^I should see the modal with id "(.+)"$/, function (id, callback) {
        this.browser
            .waitForElementPresent('div[id="' + id + '"]', 5000)
            .then(callback);
    });

    Then(/^I should see the data loaded from API$/, function (callback) {
        this.browser
            .waitForElementNotPresent('div.loading', 10000)
            .then(callback);
    });

    Then(/^I click Needs Review switch$/, function (callback) {
        this.browser
            .click('table.scm-list tr:nth-child(1)>td div.switches-input')
            .then(callback);
    });

    Then(/^I should see Needs Review switch$/, function (callback) {
        this.browser
            .pause(3000)
            .waitForElementPresent('table.scm-list tr:nth-child(1) > td div.switches-input', 3000)
            .then(callback);
    });

    Then(/^I enter "(.+)" in textarea field$/, function (text, callback) {
        this.browser
            .pause(3000)
            .setValue("textarea[name='policyViolationDetails']", text)
            .then(callback);
    });
});
