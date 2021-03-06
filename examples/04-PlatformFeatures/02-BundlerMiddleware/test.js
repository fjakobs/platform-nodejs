
var HELPER = require("sourcemint-platform-nodejs/tests/test-helper"),
	ASSERT = require("assert"),
	BROWSER = require("zombie"); 


HELPER.makeTest(require, exports, module, function(Q, onTestDoneDeferred, options)
{
    Q.call(function()
    {
        (new BROWSER({
            silent: true,
            debug: false
        })).visit("http://127.0.0.1:" + options.port + "/", function(err, browser)
        {
            if (err) {
                onTestDoneDeferred.reject(err);
            } else
            if (browser.window.console.output) {
                Q.call(function() {
                    throw new Error(browser.window.console.output);
                }).fail(onTestDoneDeferred.reject);
            } else
            if (browser.error) {
                Q.call(function() {
                    throw new Error(browser.error);
                }).fail(onTestDoneDeferred.reject);
            } else {
                onTestDoneDeferred.resolve();
            }
        });
    }).fail(onTestDoneDeferred.reject);
});
