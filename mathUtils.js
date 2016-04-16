'use strict'

var MathUtils = function () {

    function perRound(num, precision) {
        var precision = 2; //default value if not passed from caller, change if desired
        // remark if passed from caller
        precision = parseInt(precision); // make certain the decimal precision is an integer

        var result1 = num * Math.pow(10, precision);
        var result2 = Math.round(result1);
        var result3 = result2 / Math.pow(10, precision);
        return zerosPad(result3, precision);
    }

    function zerosPad(rndVal, decPlaces) {

        var valStrg = rndVal.toString(); // Convert the number to a string
        var decLoc = valStrg.indexOf("."); // Locate the decimal point
        var decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s

        // check for a decimal 
        if (decLoc == -1) {
            // If decPlaces is greater than zero, add a decimal point
            valStrg += decPlaces > 0 ? "." : "";
        }
        else {
            decPartLen = valStrg.length - decLoc - 1; // If there is a decimal already, only the needed decimal places will be padded with 0s
        }

        var totalPad = decPlaces - decPartLen;    // Calculate the number of decimal places that need to be padded with 0s

        if (totalPad > 0) {
            // Pad the string with 0s
            for (var cntrVal = 1; cntrVal <= totalPad; cntrVal++)
                valStrg += "0";
        }

        return valStrg;
    }
    
    return {
        perRound: perRound        
    }
    
    
} ();

module.exports = MathUtils;