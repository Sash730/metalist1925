var {defineSupportCode} = require('cucumber');
defineSupportCode(function({After, Before}) {
    
    Before("@webdriver.init", function () {
        this.browserService.before();
    });

    After("@webdriver.quit", function (scenarioResult, callback) {
        this.browserService.after(callback);
    });
    
});
