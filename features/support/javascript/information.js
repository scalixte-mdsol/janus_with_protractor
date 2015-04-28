/**
 * Created by scalixte on 4/15/15.
 */
'use strict';

var yaml = require('js-yaml');
var fs = require('fs');
var glob = require("glob");
var Information = module.exports = function () {
    try {
        this.config = yaml.safeLoad(fs.readFileSync('features/support/config.yml', 'utf8'));
        this.selector = {}
        glob("features/support/locators/**/*.yml", 'matchBase', function (er, files) {
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
                this.selector = concat(this.selector, yaml.safeLoad(fs.readFileSync(files[i], 'utf8')));
            }
            console.log(this.selector['Imedidata']['Sign In']['username']['label']);
        });
    } catch (e) {
        console.log(e);
    }
};