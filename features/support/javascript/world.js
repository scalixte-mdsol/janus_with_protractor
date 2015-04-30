/**
 * Created by scalixte on 4/15/15.
 */
'use strict';
//var pc = require('protractor-cucumber');
//var WorldConstructor = exports.World = function WorldConstructor(callback) {
//    var seleniumAddress = 'https://login-sandbox.imedidata.net/login';
//    var options = { browser : 'chrome', timeout : 100000 };
//    var world = {
//        World: pc.world(seleniumAddress, options),
//        After: function(callback) {         // this.visit will be available in step definitions
//            this.quit(callback);
//        }
//    };
//    callback(world); // tell Cucumber we're finished and to use our world object instead of 'this'
//};


//var Browser = require('zombie'),
//    HTML5 = require("html5").HTML5,
//    should = require('should'),
//    webdriver = require("selenium-webdriver");

//server = require('../../../server');

//var World = function(callback) {
//    var self = this;
//
//    console.log(this);
//
//
//    this.browser = new Browser({
//        runScripts: true,
//        debug: false,
//        htmlParser: HTML5
//    });
//
//    this.visit = function(path, callback) {
//        //console.log(this.browser);
//        console.log(path);
//        browser.visit(path, function(err, browser, status) {
//        //    callback(err, browser, status);
//        });
//    };
//    World.mostRecentInstance = this;
//    callback();
//};
//module.exports =

// features/support/world.js
//module.exports = function() {
//    var zombie = require('zombie');
//    this.World = function World(callback) {
//        this.browser = new zombie(); // this.browser will be available in step definitions
//
//        this.visit = function(url, callback) {
//            this.browser.visit(url, callback);
//        };
//
//        callback(); // tell Cucumber we're finished and to use 'this' as the world instance
//    };
//}

//var WorldConstructor = exports.World = function WorldConstructor(callback) {
//    var browser = new Browser({ runScripts: true, debug: false, htmlParser: HTML5 });
//    var world = {
//        browser: browser,
//        visit: function(url, callback) {         // this.visit will be available in step definitions
//            this.browser.visit(url, callback);
//        },//.bind(this)
//        driver: new webdriver.Builder()
//            .withCapabilities(webdriver.Capabilities.phantomjs())
//            .build()
//    };
//    callback(world); // tell Cucumber we're finished and to use our world object instead of 'this'
//};

//var WorldConstructor = exports.World = function WorldConstructor(callback) {
//
//    function getParams(func){
//        var str=func.toString();
//        var len = str.indexOf("(");
//        return str.substr(len+1,str.indexOf(")")-len -1).replace(/ /g,"").split(',')
//    }
//
//    try {
//        var that = this;
//        this.browser = new Browser({runScripts: true, debug: false, htmlParser: HTML5});
//        //this.visit = (function (url, status) {
//        //    that.browser.visit(url, function (error) {
//        //        if (error) {
//        //            status.fail(error);
//        //        } else {
//        //            status.call(that, that.browser);
//        //        }
//        //    });
//        //});
//
//    this.visit = function(path, callback) {
//        //console.log(that.browser);
//        console.log(callback);
//        console.log(getParams(that.browser.visit));
//        that.browser.visit(path, callback);
//        //    callback(err, browser, status);
//        //    console.log(browser);
//        //    console.log(status);
//        //    if (error){
//        //        status.fail(error);
//        //    }else{
//        //        status.call(error, that.browser, status);
//        //    }
//        //});
//    };
//    } catch (e) {
//        console.log(e);
//    }
//
//    callback(); // tell Cucumber we're finished and to use our world object instead of 'this'
//};
//
