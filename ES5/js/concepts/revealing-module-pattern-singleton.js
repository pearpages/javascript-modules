var scoreboard = function() {
    
    // private variables
    var whatever = 'whatever';
    
    return {
      showMessage: showMessage  
    };
    
    function showMessage(message) {
        console.log(message);
    }
}();

scoreboard.showMessage('Hello me!!');