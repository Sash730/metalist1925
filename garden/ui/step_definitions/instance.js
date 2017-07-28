var {defineSupportCode} = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {

    Then(/^I should see "(.+)" tab as active$/, function (name, callback) {
        this.browser
            .assertCssClassPresent('ul[role="tablist"] li:contains(' + name + ')', 'active')
            .then(callback);
    });

    Then(/^I should see the "(.+)" Instance List table$/, function (name, callback) {
        this.browser
            .waitForElementPresent('table[id="' + name + '"]', 5000)
            .then(callback);
    });

    Then(/^I should see "(.+)" table with fields:$/, function (id, table, callback) {
        this.browser
            .assertListEquals('table[id="' + id + '"] th', table.hashes().map(row => row.column))
            .then(callback);
    });

    Then(/^Table should have "(.+)" row$/, function (number, callback) {
        this.browser
            .waitForElementPresent('table.scm-instance-list tr:nth-child(' + number + ')', 3000)
            .then(callback);
    });

    Then(/^Table should have not "(.+)" row$/, function (number, callback) {
        this.browser
            .waitForElementNotPresent('table.instance-list tr:nth-child(' + number + ')', 3000)
            .then(callback);
    });

    Then(/^I click the "(.+)" tab$/, function (name, callback) {
        this.browser
            .click('ul.nav-tabs a:contains(' + name  + ')')
            .then(callback);
    });
});
