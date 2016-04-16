'use strict'

var Angle = require('./angle');

var Vector = (function () {
    
    var square = function (x) { return x * x };

    return function ctor(direction, speed) {
        
        var vector = Angle.fromDegrees(direction);        
        vector.speed = speed;
        
        vector.NorthSouthComponent = Math.cos(vector.rad) * speed;       
        vector.EastWestComponent = Math.sin(vector.rad) * speed;
        
        vector.subtract = function (otherVector) {
                     
            var nsDiff = vector.NorthSouthComponent - otherVector.NorthSouthComponent;
            var ewDiff = vector.EastWestComponent - otherVector.EastWestComponent;
                        
            var ratio = ewDiff / nsDiff;
          
            var radsbtw = Math.atan(ratio);
                                    
            if (nsDiff < 0){
                radsbtw += Math.PI;
            }                       
            
            var directionDiff = Angle.fromRadians(radsbtw).deg;
            
            var speedDiff = Math.sqrt(square(nsDiff) + square(ewDiff))
            
            return ctor(directionDiff,speedDiff);
        }
            
        return vector;
    };
} ());

module.exports = Vector;