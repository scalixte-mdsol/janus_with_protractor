/**
 * Created by scalixte on 4/15/15.
 */
'use strict';

var pc = require('protractor-cucumber');

var steps = function() {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'chrome', timeout : 100000 };
    this.World = pc.world(seleniumAddress, options);

    this.After(function(callback) {
        console.log('done!!!')
        this.quit(callback);
    });

    this.Given(/^I visit the ([^"]+) page for ([^"]+)$/, function (page, app, callback) {
        //support.ignoreSynchronization(this, false, function (result) {});
        console.log(support.browser);
        //this.WebDriver.quit(callback);
        //this.quit();

    });
};

module.exports = steps;