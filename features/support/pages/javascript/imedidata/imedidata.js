/**
 * Created by scalixte on 4/30/15.
 */
'use strict';

var information = information || require('../../../../support/javascript/information');
var support = support || require('../../../../support/javascript/support');

var Imedidata = function(){
    this.config = information.config['apps'];
    this.selector = information.selector['Imedidata'];
};

Imedidata.prototype.visit=function(that, callback){};

Imedidata.prototype.login=function(that, callback){
    try {
        var self = this;
        support.ignoreSynchronization(that, true, function (result) {});
        support.get(that, this.config['login'], function (result) {
            setTimeout(callback, 1000);
        });
        support.findByName(that,'session[username]', function(result){result.sendKeys(self.config['username']);});
        support.findByName(that,'session[password]', function(result){result.sendKeys(self.config['password']);});
        support.findByCSS(that,'#create_session_link', function(result){result.click();});
    } catch (e) {
        console.log(e);
    }
};

Imedidata.prototype.logout=function(that, callback){
    try{
        var self = this;
        var that = that;
        support.ignoreSynchronization(that, true, function (result) {});
        support.findByCSS(that, this.selector['Header']['signout']['link'], function (result) {
            result.click().then(function () {
                support.findByCSS(that, self.selector['Header']['logout']['link'], function (result) {
                    result.click().then(function(){support.exit(that)});
                });
            });

        });



    } catch (e) {
        console.log(e);
    }
};


module.exports = new Imedidata();