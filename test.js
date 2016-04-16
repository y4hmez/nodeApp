'use strict'

var Vector = require('./vector');

var Test = (function () {

    var northHeading = Vector(0, 100);
    var southHeading = Vector(180, 100);
    var westHeading = Vector(270, 100);
    var eastHeading = Vector(90, 100);

    var northGroundTrack = Vector(0, 200);
    var southGroundTrack = Vector(180, 0);
    var southGroundTrack2 = Vector(180, 200);
    var northEastGroundTrack = Vector(45, 141.421356);
    var northWestGroundTrack = Vector(315, 141.421356);
    var southWestGroundTrack = Vector(225, 141.421356);
    var southEastGroundTrack = Vector(135, 141.421356);

    var eastGroundTrack = Vector(270, 0);
    var eastGroundTrack2 = Vector(90, 200);
    var westGroundTrack = Vector(270, 200);
    var westGroundTrack2 = Vector(270, 0);
    
    function RunChecks() {
        //northerly checks
    var northerlyWind = southGroundTrack.subtract(northHeading)
    console.assert(northerlyWind.deg === 180 && northerlyWind.speed === 100, "Stationary With North Heading should indicate wind going south (northerly) ");

    var southerlyWind = northGroundTrack.subtract(northHeading)
    console.assert(southerlyWind.deg === 0 && southerlyWind.speed === 100, "North Ground Track With North Heading should indicate wind going north (southerly) ");

    var easterlyWind = northWestGroundTrack.subtract(northHeading);
    console.assert(Math.round(easterlyWind.deg) === 270.00 && Math.round(easterlyWind.speed) === 100.00, "North West Track with North Heading should indicate wind going west (easterly)");

    var westerlyWind = northEastGroundTrack.subtract(northHeading);
    console.assert(Math.round(westerlyWind.deg) === 90 && Math.round(westerlyWind.speed) === 100, "North East Track with North Heading should indicate wind going east (westerly)");

    //southerly checks
    var northerlyWind2 = southGroundTrack2.subtract(southHeading)
    console.assert(northerlyWind2.deg === 180 && northerlyWind2.speed === 100, "South Ground Track With South Heading should indicate wind going south (northerly)");

    var southerlyWind2 = southGroundTrack.subtract(southHeading)
    console.assert(southerlyWind.deg === 0 && southerlyWind.speed === 100, "Stationary With South Heading should indicate wind going north (southerly) ");

    var easterlyWind2 = southWestGroundTrack.subtract(southHeading);
    console.assert(Math.round(easterlyWind2.deg) === 270 && Math.round(easterlyWind2.speed) === 100, "South West Track with South Heading should indicate wind going  west (easterly)");

    var westerlyWind2 = southEastGroundTrack.subtract(southHeading);
    console.assert(Math.round(westerlyWind2.deg) === 90 && Math.round(westerlyWind2.speed) === 100, "South East Track with North Heading should indicate wind going east (westerly)");

    //westerly checks
    var northerlyWind3 = southWestGroundTrack.subtract(westHeading)
    console.assert(Math.round(northerlyWind3.deg) === 180 && Math.round(northerlyWind3.speed) === 100, "South West Track With West Heading should indicate wind going south (northerly)");

    var southerlyWind3 = northWestGroundTrack.subtract(westHeading)
    console.assert(Math.round(southerlyWind3.deg) === 0 && Math.round(southerlyWind3.speed) === 100, "North West Track With West Heading should indicate wind going north (southerly)");

    var easterlyWind3 = westGroundTrack.subtract(westHeading);
    console.assert(easterlyWind3.deg === 270 && easterlyWind3.speed === 100, "West Track with West Heading should indicate wind going west (easterly)");

    var westerlyWind3 = eastGroundTrack.subtract(westHeading);
    console.assert(westerlyWind3.deg === 90 && westerlyWind3.speed === 100, "Stationary with West Heading should indicate wind going east (westerly)");

    //easterly checks
    var northerlyWind4 = southEastGroundTrack.subtract(eastHeading)
    console.assert(Math.round(northerlyWind4.deg) === 180 && Math.round(northerlyWind4.speed) === 100, "South East Track With East Heading should indicate wind going south (northerly)");

    var southerlyWind4 = northEastGroundTrack.subtract(eastHeading)    
    //should be 0, left as 360 for rounding purposes
    console.assert(Math.round(southerlyWind4.deg) === 360 && Math.round(southerlyWind4.speed) === 100, "North East Track With East Heading should indicate wind going north (southerly) ");

    var westerlyWind4 = eastGroundTrack2.subtract(eastHeading);
    console.assert(westerlyWind4.deg === 90 && westerlyWind4.speed === 100, "East Track with East Heading should indicate wind going east (westerly)");

    var easterlyWind4 = westGroundTrack2.subtract(eastHeading);    
    console.assert(easterlyWind4.deg === 270 && easterlyWind4.speed === 100, "Stationary with East Heading should indicate wind going west (easterly)");
     }
             
    return {
        RunChecks : RunChecks
    }

} ());

module.exports = Test;


