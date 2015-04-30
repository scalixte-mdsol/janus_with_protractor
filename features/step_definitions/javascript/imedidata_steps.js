/**
 * Created by scalixte on 4/15/15.
 */
'use strict';
var information = information || require('../../support/javascript/information');
var support = support || require('../../support/javascript/support');
var imedidata = imedidata || require('../../support/pages/javascript/imedidata/imedidata');

var imedidata_steps = function() {

    this.Given(/^I login to the iMedidata page$/, function (callback) {
        try {
            imedidata.login(this,callback);
        } catch (e) {
            console.log(e);
        }
    });

    this.Given(/^I log out from the iMedidata page$/, function (callback) {
        try {
            imedidata.logout(this,callback);
        } catch (e) {
            console.log(e);
        }
    });

}

module.exports = imedidata_steps;
