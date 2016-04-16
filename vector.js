
//airspeed
//heading - where we are pointing
//track
//ground speed;

//resolve - wind direction 
//resolve - wind speed

/*

c² = a² + b² - 2ab(cosC)c

grndSpd² = airSpd² + wndSpd²  - 2(airSpd)(wndSpd)(cos45)

*/

var Angle = require('./angle');

var Vector = (function() {

    var    square = function(x) { return x * x };

    var calcWindSpeed = function(reading) {

        //var hdngDeltaAngle = Angle.fromDegrees(Math.abs(reading.bearing.deg - reading.grndTrack.deg));
        var hdngDeltaAngle = Angle.fromDegrees(45);

        var wndSpd = Math.sqrt(square(reading.airSpd) + square(reading.grndSpd) - ((2 * reading.airSpd) * reading.grndSpd * Math.cos(hdngDeltaAngle.rad)));                
        var grndTrack2windAngle = Angle.fromRadians(Math.atan(reading.airSpd / wndSpd));
                
        return {
            wndSpd : wndSpd,            
            hdngDelta :hdngDeltaAngle.deg,
            grndTrack2wind : grndTrack2windAngle.deg,
            bearing2wind : (grndTrack2windAngle.deg + hdngDeltaAngle.deg),             
        }                 
    }

    return {
        calcWindSpeed: calcWindSpeed        
    }
} ());

//sohcahtoa

// CED subroutine for cleaning up JavaScript rounding errors 
// to any reasonable number of decimal places 5/5/1997 last mod 2/19/2004
// round for decimal of (value of precision) places, default is 3
// This routine can be used to pass a number and a number for precision
// or just a number only, that is to be rounded to a set number of decimal
// places. This routine supports leading and training zeros, leading and
// trailing spaces, and padding. To prevent errors, pass variables as a string.

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

    // check for a decimal 
    if (decLoc == -1) {
        decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s
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

function deg2rad(deg) {

    conv_factor = (2.0 * Math.PI) / 360.0;

    return (deg * conv_factor);
}

function rad2deg(rad) {

    conv_factor = 360 / (2.0 * Math.PI);

    return (rad * conv_factor);
}

function compute(obj) {

    // Get angle and convert to radians
    angle = parseFloat(obj.angle.value);

    if (isNaN(angle)) {

        alert("Please supply a valid value for Difference Between Heading and Apparent Wind Direction");

        return;
    }

    angle = deg2rad(angle);

    //Get apparent wind speed.  Convert to units to ship's speed if necesssary.
    aspeed = parseFloat(obj.aspeed.value);

    if (isNaN(aspeed)) {

        alert("Please supply a valid value for Apparent Wind Speed");

        return;
    }


    // Get ship's speed (if supplied)
    sspeed = parseFloat(obj.sspeed.value);

    // Convert apparent wind speed to units of ships speed if supplied in knots
    if (obj.units[1].checked)	// if apparent wind speed supplied in knots
    {
        if (isNaN(sspeed)) {

            alert("The Ship's Speed must be specified if the Apparent\n" +

                "Wind Speed is specified in knots.");

            return;

        }
        aspeed = aspeed / sspeed;
    }

    // Calculate true heading diff and true wind speed

    tan_alpha = (Math.sin(angle) / (aspeed - Math.cos(angle)));
    alpha = Math.atan(tan_alpha);
    tdiff = rad2deg(angle + alpha);
    tspeed = Math.sin(angle) / Math.sin(alpha);

    // Place values in output fields

    obj.tangle.value = tdiff;

    obj.tspeed.value = tspeed;

    obj.tspeedk.value = (isNaN(sspeed) ? "Unknown" : (tspeed * sspeed));

    obj.tangler.value = perRound(tdiff);

    obj.tspeedr.value = perRound(tspeed);

    obj.tspeedkr.value = (isNaN(sspeed) ? "Unknown" : perRound(tspeed * sspeed));



}



//-->


module.exports = Vector;