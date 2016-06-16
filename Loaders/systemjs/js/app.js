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

