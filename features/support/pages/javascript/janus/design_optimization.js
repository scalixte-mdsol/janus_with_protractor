/**
 * Created by scalixte on 4/30/15.
 */
'use strict';

var information = information || require('../../../../support/javascript/information');
var support = support || require('../../../../support/javascript/support');

var DesignOptimization = function(){
    this.config = information.config;
    this.selector = information.selector;
};

DesignOptimization.prototype.visit=function(that, callback){};

module.exports = new DesignOptimization();
