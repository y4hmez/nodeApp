'use strict'

var Angle = (function() {

    var fullRotation = 2.0 * Math.PI;

    var toRadians = function(deg) { return deg * fullRotation / 360; };
    var toDegrees = function(rad) { return rad * 360 / fullRotation; };
    
    var fromDegrees = function(deg) {

        deg = (deg + 360) % 360;
        var rad = toRadians(deg);

        return {
            deg: deg,
            rad: rad,
        };
    };

    var fromRadians = function(rad) {

        rad = (rad + fullRotation) % (fullRotation)
        var deg = toDegrees(rad);

        return {
            deg: deg,
            rad: rad,
        }
    };

    return {
        fromDegrees: fromDegrees,
        fromRadians: fromRadians        
    }
} ());

module.exports = Angle;


    // var angleBetween = function(radians) {
    //     return function(otherAngle) {            
    //         var delta = (Math.abs(radians - otherAngle.rad));
            
    //         if(delta > Math.PI) {
    //             delta = fullRotation - delta;
    //         }
                        
    //         return Angle.fromRadians( delta );            
    //     }
    // };
         
    // var rotate = function(radians) {
    //     return function(angleToAdd) {
    //         return Angle.fromRadians(radians + angleToAdd.rad);
    //     }
    // };

    // var counterRotate = function(radians) {
    //     return function(angleToAdd) {
    //         return Angle.fromRadians(radians - angleToAdd.rad);
    //     }
    // };
