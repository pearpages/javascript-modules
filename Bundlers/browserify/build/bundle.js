(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Car = require('./models/Car.js');
var Driver = require('./models/Driver.js');

var car1 = new Car('Ferrari', 'dkd35123');
var car2 = new Car('Lamborghini', '1234XYZ');
var driver1 = new Driver('Pere Pages', 10);
var driver2 = new Driver('Fitipaldi', 34);

var mainDiv = document.getElementById('main');

mainDiv.innerHTML = '<h2>Cars</h2>';
mainDiv.innerHTML += car1.getHtmlDescription();
mainDiv.innerHTML += car2.getHtmlDescription();
mainDiv.innerHTML += '<h2>Drivers</h2>';
mainDiv.innerHTML += driver1.getHtmlDescription();
mainDiv.innerHTML += driver2.getHtmlDescription();


},{"./models/Car.js":2,"./models/Driver.js":3}],2:[function(require,module,exports){
module.exports = function (model,serialNumber) {

    var model = model;
    var serialNumber = serialNumber;

    var self = this;

    self.getModel = function() { return model; }; 
    self.getSerialNumber = function() { return serialNumber; }; 
    self.getHtmlDescription = getHtmlDescription;
    
    function getHtmlDescription() {
        var html = [];
        html.push('<p>Model: '+model+'</p>');
        html.push('<p>Serial Number: '+serialNumber+'</p>');
        return html.join('');
    }
};
},{}],3:[function(require,module,exports){
module.exports = function (name, yearsOfExperience) {
    var name = name;
    var yearsOfExperience = yearsOfExperience;

    var self = this;

    self.getName = function () { return name; }
    self.getYearsOfExperience = function () { return yearsOfExperience; }
    self.getHtmlDescription = getHtmlDescription;

    function getHtmlDescription() {
        var html = [];
        html.push('<p>Name: ' + name + '</p>');
        html.push('<p>Years of experience: ' + yearsOfExperience + '</p>');
        return html.join('');
    }
};

},{}]},{},[1]);
