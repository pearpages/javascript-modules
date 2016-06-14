var player = function() {
    
    // private members
    var playerName = '';
    
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
    
    function logPlayer() {
        console.log('The current player is ' + playerName + '.');    
    }
    
    function setName(newName) {
        playerName = newName;
    }
    
    function getName() {
        return playerName;
    }
    
}();