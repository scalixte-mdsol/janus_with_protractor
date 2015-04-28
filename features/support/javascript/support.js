/**
 * Created by scalixte on 4/27/15.
 */
var webdriver = webdriver || require('selenium-webdriver');
var Support = function(){
};

Support.prototype.ignoreSynchronization=function(sut, status, callback){
    sut.browser.ignoreSynchronization = status;
}

Support.prototype.get = function(sut, url, callback){
    sut.browser.get(url).then(function(result) {
        callback(result)
    });
};

Support.prototype.driver = function(sut){
    return sut.browser.driver;
};

//Support.prototype.change_url = function(sut, new_url, callback){
//    var currentUrl;
//    sut.browser.getCurrentUrl().then(function(url){
//        currentUrl = url;
//    }).then(then(function(){
//        sut.browser.wait(function(){
//
//        });
//    });
//    sut.browser.get(url).then(function(result) {
//        callback(result)
//    });
//};

Support.prototype.findByName = function(sut, item, callback){
    sut.browser.driver.findElement(webdriver.By.name(item)).then(function(result) {
        callback(result);
    });
};

Support.prototype.findByCSS = function(sut, item, callback){
    sut.browser.driver.findElement(webdriver.By.css(item)).then(function(result) {
        callback(result);
    });
};

Support.prototype.findByBinding = function(sut, item, callback){
    sut.browser.findElement(sut.by.binding(item)).then(function(result) {
        callback(result);
    });
};

Support.prototype.isElementPresent = function(sut, find, callback){
    sut.browser.isElementPresent(sut.by.linkText(find)).then(function(result) {
        callback(result)
    });
};

Support.prototype.isElementPresentByClass = function(sut, find, callback){
    sut.browser.isElementPresent(sut.by.css('.'+find)).then(function(result) {
        callback(result)
    });
};

module.exports = new Support();
