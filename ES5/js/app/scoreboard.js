var scoreboard = function() {
    
    // private members
    var results = [];
    
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    };
    
    function addResult(newResult) {
        results.push(newResult);
    }
    
    function updateScoreboard() {
        
        var output = '<h2>Scoreboard</h2>';
        
        // loop over all results and create the html for the scoreboard
        results.reduce(function(previous,current,index,originalArrray) {
            output += '<h4>'+current.name + ': ' + current.score + '/' + current.problems + ' for factor ' + current.factor + '</h4>';
        },output);
        
        return output;
    }
}();


// for testing
scoreboard.addResult({name: 'aha',score:12,problems:3,facor:2});
scoreboard.addResult({name: 'what',score:6,problems:2,factor:5});

console.log(scoreboard.updateScoreboard());