var Scoreboard = function () {
    
    // private members
    var message = 'Welcome to the game!';
    function printMessage() {
        console.log(message);
    }
    return {
        showMessage: printMessage
    }
};

(function() {
    var scoreboard1 = new Scoreboard();
    var scoreboard2 = new Scoreboard();
    
    scoreboard1.showMessage();
    scoreboard2.showMessage();
})();