/**
 * Created by scalixte on 4/15/15.
 */
'use strict';
var webdriver = webdriver || require('selenium-webdriver');
var information = information || require('../../support/javascript/information');
var support = support || require('../../support/javascript/support');

var pc = require('protractor-cucumber');

var steps = function() {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'firefox', timeout : 100000 };
    this.World = pc.world(seleniumAddress, options);

    this.After(function(callback) {
        try {
            this.quit(callback);
        } catch (e) {
            console.log(e);
        }
    });

};

module.exports = steps;
