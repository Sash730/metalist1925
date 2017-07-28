var {defineSupportCode} = require('cucumber');
defineSupportCode(function({ Given, When, Then }) {

  var moment = require('moment');

  Given(/^I am a guest and on homepage$/, function (callback) {
    this.browser.visit('/').then(callback);
  });

  Then(/^I should see the match$/, function(callback) {
    this.browser
      .assertVisible('div.bgTicket')
      .then(callback);
  });

  Then(/^the Schedule Report modal should close$/, function(callback) {
    this.browser
      .assertElementNotPresent('.schedule-report-modal')
      .then(callback);
  });

  Then(/^I should see the Begin Date date set to today's date$/, function(callback) {
    var today = moment().format('YYYY-MM-DD');

    this.browser
      .assertValue('.col-schedule-control input[name=beginDate]', today)
      .then(callback);
  });

  Then(/^I should see the End Date enabled$/, function(callback) {
    this.browser
      .assertElementPresent(".col-schedule-control input[name=finishDate]:enabled")
      .then(callback);
  });

  Then(/^I should see the End Date disabled$/, function(callback) {
    this.browser
      .assertElementPresent(".col-schedule-control input[name=finishDate]:disabled")
      .then(callback);
  });

  Then(/^I should see the End Date date set to today's date next year$/, function(callback) {
    var todayNextYear = moment().add(1, 'year').format('YYYY-MM-DD');

    this.browser
      .assertValue('.col-schedule-control input[name=finishDate]', todayNextYear)
      .then(callback);
  });

  When(/^I check No End checkbox$/, function(callback) {
    this.browser.click('.col-schedule-control label:contains(No End)')
      .then(callback);
  });

  Then(/^I should see the following options:$/, function(string, callback) {
    var expectedOptions = string.split(/[\n\r]+/);
    this.browser
      .assertListEquals('.col-schedule-control input[name=radio-time]', expectedOptions)
      .then(callback);
  });

  Then(/^I should see "([^"]*)" option checked$/, function(name, callback) {
    this.browser
      .assertElementPresent(".col-schedule-control label:contains(" + name + ") input[name=radio-time]:checked")
      .then(callback);
  });

  Then(/^I should see "([^"]*)" option unchecked$/, function(name, callback) {
    this.browser
      .assertElementPresent(".col-schedule-control label:contains(" + name + ") input[name=radio-time]")
      .assertElementNotPresent(".col-schedule-control label:contains(" + name + ") input[name=radio-time]:checked")
      .then(callback);
  });

  Then(/^the Deliver report to Email checkbox should be checked on by default$/, function(callback) {
    this.browser
      .assertElementPresent(".col-schedule-control label:contains(Deliver report to Email) input")
      .then(callback);
  });

  When(/^I enter a valid email address like "([^"]*)"$/, function(name, callback) {
    this.browser
      .setValue('div.method-email input', name)
      .click('body') // in order to close suggestion dropdown
      .then(callback);
  });

  When(/^I click on the Set Scheduling button$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  When(/^I click on the "([^"]*)" button in the Schedule Report modal$/, function(name, callback) {
    var buttonSelector = '.schedule-report-modal button:contains(' + name + ')';
    this.browser
      .waitForElementPresent(buttonSelector, 15000)
      .click(buttonSelector)
      .then(callback);
  });

  Then(/^I enter the Begin Date value "([^"]*)"$/, function(value, callback) {
    this.browser
      .setValue('.col-schedule-control input[name=beginDate]', value)
      .click('.col-schedule-control input[name=finishDate]')
      .then(callback);
  });

  Then(/^I enter the End Date value "([^"]*)"$/, function(value, callback) {
    this.browser
      .setValue('.col-schedule-control input[name=finishDate]', value)
      .click('body') // without this action "No end" checkbox isn't visible
      .then(callback);
  });

  Then(/^I should see the validation error: "([^"]*)"$/, function(error, callback) {
    this.browser
      .assertElementPresent('.has-error .help-block:contains("' + error + '")')
      .then(callback);
  });

  Then(/^I should not see the validation error: "([^"]*)"$/, function(error, callback) {
    this.browser
      .assertElementNotPresent('.has-error .help-block:contains("' + error + '")')
      .then(callback);
  });

  Then(/^I should see the "([^"]*)" icon$/, function(iconClass, callback) {
    this.browser
      .assertElementPresent('.glyphicon.' + iconClass)
      .then(callback);
  });

  When(/^I hover over the "([^"]*)" icon$/, function (iconClass, callback) {
    this.browser
      .moveToObject('.glyphicon.' + iconClass)
      .then(callback);
  });

  //
  //When(/^I click on "([^"]*)" in the Delete Report modal$/, function(arg1, callback) {
  //  this.browser
  //    .waitForElementPresent('.delete-report-modal button:contains('+arg1+')', 15000)
  //    .click('.delete-report-modal button:contains('+arg1+')')
  //    .then(callback);
  //});
  //
  //Then(/^the Delete Report modal should close$/, function(callback) {
  //  this.browser
  //    .assertElementNotPresent('.delete-report-modal')
  //    .then(callback);
  //});
  //
  //When(/^I refresh the page$/, function(callback) {
  //  this.browser
  //    .refreshPage()
  //    .then(callback);
  //});
  //
  //Then(/^I should not see "([^"]*)" in Report List dropdown$/, function(arg1, callback) {
  //  this.browser
  //    .assertElementNotPresent('.ui-multiselect-menu span:contains('+arg1+')')
  //    .then(callback);
  //});
  //
  //Then(/^I should see these options disabled in the Delete Report modal:$/, function(string, callback) {
  //  var data = string.split(/[\n\r]+/);
  //  this.browser
  //    .then(function() {
  //        for(var i=0; i<data.length; i++) {
  //            this.browser
  //              .assertElementPresent('.delete-report-modal button:contains('+data[i]+'):disabled');
  //        }
  //    }.bind(this))
  //    .then(callback);
  //});
  //
  //Then(/^I should see the Loading Indicator in the Delete Report modal$/, function(callback) {
  //  this.browser
  //    .assertElementPresent('.delete-report-modal.loading')
  //    .then(callback);
  //});
  //
  //When(/^the delete request is done$/, function(callback) {
  //  this.browser
  //    .waitForElementNotPresent('.delete-report-modal.loading', 15000)
  //    .assertElementNotPresent('.delete-report-modal.loading')
  //    .then(callback);
  //});

});

