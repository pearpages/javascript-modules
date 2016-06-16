module.exports = function Car(model,serialNumber) {

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