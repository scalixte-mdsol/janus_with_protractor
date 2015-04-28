/**
 * Created by scalixte on 4/15/15.
 */
'use strict';
var information = information || require('../../support/javascript/information');
var support = support || require('../../support/javascript/support');

var imedidata_steps = function() {

    this.Given(/^I login to the iMedidata page$/, function (callback) {
        try {
            var self = this;
            this.config = information.config
            support.ignoreSynchronization(this, true, function (result) {});
            support.get(this, this.config['apps']['login'], function (result) {
                setTimeout(callback, 1000);
            });
            support.findByName(this,'session[username]', function(result){result.sendKeys(self.config['apps']['username']);});
            support.findByName(this,'session[password]', function(result){result.sendKeys(self.config['apps']['password']);});
            support.findByCSS(this,'#create_session_link', function(result){result.click();});
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

}

module.exports = imedidata_steps;
