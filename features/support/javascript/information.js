/**
 * Created by scalixte on 4/15/15.
 */
'use strict';

var yaml = require('js-yaml');
var fs = require('fs');
var glob = require("glob");

var Information = function () {
    function selection() {
        var selections = {};
        var files = glob.sync("features/support/locators/**/*.yml", 'matchBase');
        var concat = (function (json1, json2) {
            var json3 = {};
            for (var attribute_name in json1) {
                json3[attribute_name] = json1[attribute_name];
            }
            for (var attribute_name in json2) {
                json3[attribute_name] = json2[attribute_name];
            }
            return json3;
        });
        for (var i in files) {
            selections = concat(selections, yaml.safeLoad(fs.readFileSync(files[i], 'utf8')));
        }
        return selections;
    }

    try {
        this.config = yaml.safeLoad(fs.readFileSync('features/support/config.yml', 'utf8'));
        this.selector = this.selector || selection();
    } catch (e) {
        console.log(e);
    }
};

module.exports = new Information();
