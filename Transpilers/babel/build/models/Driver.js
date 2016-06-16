'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Driver = Driver;
function Driver(name, yearsOfExperience) {
    var name = name;
    var yearsOfExperience = yearsOfExperience;

    var self = this;

    self.getName = function () {
        return name;
    };
    self.getYearsOfExperience = function () {
        return yearsOfExperience;
    };
    self.getHtmlDescription = getHtmlDescription;

    function getHtmlDescription() {
        var html = [];
        html.push('<p>Name: ' + name + '</p>');
        html.push('<p>Years of experience: ' + yearsOfExperience + '</p>');
        return html.join('');
    }
}