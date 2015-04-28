/**
* Created by scalixte on 4/15/15.
*/
'use strict';

var information = information || require('../../support/javascript/information');
var support = support || require('../../support/javascript/support');

var common_steps = function() {

    this.Given(/^I visit the ([^"]+) page for ([^"]+)$/, function (page, app, callback) {
        try{
            this.config = information.config;
            switch(page){
                case 'Landing':
                    this.url = this.config['apps']['landing page'];
                    break;
            }
        } catch (e) {
            console.log(e);
        }
        support.get(this, this.url, function(result){
            setTimeout(callback, 1000);
        });

    });

};

module.exports = common_steps;
