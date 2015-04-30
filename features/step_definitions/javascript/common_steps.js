/**
* Created by scalixte on 4/15/15.
*/
'use strict';

var information = information || require('../../support/javascript/information');
var support = support || require('../../support/javascript/support');
var imedidata = imedidata || require('../../support/pages/javascript/imedidata/imedidata');
var landing = landing || require('../../support/pages/javascript/janus/landing');

var common_steps = function() {

    this.Given(/^I visit the ([^"]+) page for ([^"]+)$/, function (page, app, callback) {
        try{
            this.config = information.config;
            switch(page){
                case 'Landing':
                    landing.visit(this, callback);
                    break;
            }
        } catch (e) {
            console.log(e);
        }
    });

    this.Given(/^I am on the homepage$/, function(callback) {
        support.get(this, 'http://localhost:5000', function(result){
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I should see a "([^"]*)" link$/, function(link, callback) {
        support.findByBinding(this, link, function(result){
            result.getText().then (function(text){
                text.trim().toLowerCase().should.equal(link.trim().toLowerCase());
                setTimeout(callback, 1000);
            });
        });
    });

    this.Then(/^I should not see a "([^"]*)" link$/, function(link, callback) {
        support.isElementPresent(this, link, function(result){
            result.should.equal(false);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I should see a "([^"]*)"$/, function(link, callback) {
        support.isElementPresentByClass(this, link, function(result){
            result.should.equal(true);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I pause"$/, function(callback) {
        support.pause(this, function(){});
    });

};

module.exports = common_steps;
