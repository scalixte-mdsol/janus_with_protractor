/**
 * Created by scalixte on 4/28/15.
 */
'use strict';
var webdriver = require('selenium-webdriver');

var Selenium = function(browser){
    var seleniumdriver = (function(browser){
        switch(browser){
            case 'firefox':
                console.log(browser);
                return new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
            default:
                new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        }
    });
    //console.log(seleniumdriver(browser));
};

Selenium.prototype.get = function(url, callback){
    console.log(this);
    //this.driver().get(url);
        //.then(function(result) {
        //callback(result)
    //});
    new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build().get(url);
};

Selenium.prototype.quit = function(callback){
    this.driver.quit(callback);
};


module.exports = new Selenium('firefox');