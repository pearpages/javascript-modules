/*
    The problem with this approach are the dependencies. They should be included through the function.
 */
var game = function () {
    
    // private members
    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3;
    
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
    
    function printGame() {}
    function calculateScore() {}
    function setProblemCount() {}
    function getProblemCount() {}
}();