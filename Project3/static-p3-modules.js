/*
Drew Lesh
CIS 281 Project 3
5.4.23
*/

/*
  Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100. Must use the array indexOf() method.
  This function can be coded to be a single line of code, although not required. If you do attempt to code into a single line of code, 
  you are recommended to first find a solution that you understand completely, then comment out your solution when you reduce your 
  code to a single line of code.
*/
// static-p3-modules.js
function coinCount(...coinage) {
    function validDenomination(coin) {
        return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
    }

    function valueFromCoinObject(obj) {
        const { denom = 0, count = 0 } = obj;
        return validDenomination(denom) ? denom * count : 0;
    }

    function valueFromArray(arr) {
        return arr.reduce(
            (acc, val) =>
                Array.isArray(val) ? valueFromArray(val) : acc + valueFromCoinObject(val), 0
        );
    }

    return valueFromArray(coinage);
}
