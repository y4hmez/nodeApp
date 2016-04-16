/* 
    Following tests assume travelling north at unit speed.
    Test name indicates resulting ground track
*/

var N_W = {
    airSpd: 1,    
    bearing: Angle.fromDegrees(0),
    grndSpd: 1.41,
    grndTrack: Angle.fromDegrees(315) //North-West 
}

var N_E = {
    airSpd: 100,    
    bearing: Angle.fromDegrees(0),
    grndSpd: 141,
    grndTrack: Angle.fromDegrees(45) //North-East
}

var v = Vector.calcWindSpeed(N_E)
console.log(v.wndSpd);
console.log(v.hdngDelta)
console.log(v.grndTrack2wind)
console.log(v.bearing2wind)

// var a = Angle.fromDegrees(520); //360
// var b = Angle.fromDegrees(270)
// var c = a.angleBetween(b);

// console.log(c.deg);


// var c = Angle.fromDegrees(180); //360
// var d = Angle.fromDegrees(270); //360
// var e = Angle.fromDegrees(360); //360

//  console.log(a.rad);
//  console.log(b.rad);
//  console.log(a.deg);
//  console.log(b.deg);
 


// console.log(x.rad);
// console.log(y.rad);
// console.log(x.deg);
// console.log(y.deg);


// var angle = -90               
// angle = (angle + 360) % 360;
// console.log(angle);  

// var grndSpd = (airSpd * airSpd) + (wndSpd * wndSpd) - ((2 * airSpd) * wndSpd * Math.cos(Vector.deg2rad(bearing)));
// console.log(Math.sqrt(grndSpd));

//500mph
//(wndSpd * wndSpd) = (airSpd * airSpd) + (grndSpd * grndSpd) - 2 * airSpd * grndSpd * Vector.deg2rad(bearing)

//var wndSpd = (airSpd * airSpd) + (grndSpd * grndSpd) - ((2 * airSpd) * grndSpd * Math.cos(Vector.deg2rad(hdngDelta)));
