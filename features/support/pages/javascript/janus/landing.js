/**
 * Created by scalixte on 4/30/15.
 */
'use strict';

var information = information || require('../../../../support/javascript/information');
var support = support || require('../../../../support/javascript/support');

var Landing = function(){
    this.config = information.config['apps'];
    this.selector = information.selector;
};

Landing.prototype.visit = function (that, callback) {
    support.get(that, this.config['landing page'], function(){
        setTimeout(callback, 1000);
    });
};

Landing.prototype.selectStudy = function (that, study, callback) {
    console.log('helllo');
};

module.exports = new Landing();
