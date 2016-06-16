/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Car,Driver) {
	    
	    var car1 = new Car('Ferrari','dkd35123');
	    var car2 = new Car('Lamborghini','1234XYZ');
	    var driver1 = new Driver('Pere Pages', 10);
	    var driver2 = new Driver('Fitipaldi', 34);
	    
	    var mainDiv = document.getElementById('main');
	    
	    mainDiv.innerHTML = '<h2>Cars</h2>';
	    mainDiv.innerHTML += car1.getHtmlDescription(); 
	    mainDiv.innerHTML += car2.getHtmlDescription();
	    mainDiv.innerHTML += '<h2>Drivers</h2>';
	    mainDiv.innerHTML += driver1.getHtmlDescription();
	    mainDiv.innerHTML += driver2.getHtmlDescription();

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {

	    return function (model,serialNumber) {

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

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {

	    return function (name, yearsOfExperience) {
	        var name = name;
	        var yearsOfExperience = yearsOfExperience;

	        var self = this;

	        self.getName = function() { return name; }
	        self.getYearsOfExperience = function() { return yearsOfExperience; }
	        self.getHtmlDescription = getHtmlDescription;
	        
	        function getHtmlDescription() {
	            var html = [];
	            html.push('<p>Name: '+name+'</p>');
	            html.push('<p>Years of experience: '+yearsOfExperience+'</p>');
	            return html.join('');
	        }
	    };


	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);