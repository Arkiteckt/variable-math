// Create four variables, `x1`, `y1`, `x2`, and `y2` and store numbers in each of them.

// Calculate the distance between coordinates (x1, y1) and (x2, y2). Log this distance out to the user in a human readable sentence.

// The distance formula along with an example can be found below.

// <img src="https://cdn.tutors.com/assets/images/courses/math/geometry-help/tutors-how-to-use-the-distance-formula.jpg" width="400px"/>

let x1 = 5;
let x2 = 6;
let y1 = 10;
let y2 = 15;

// Distance formula 
function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

console.log("The distance between the two coordinates is " + Math.sqrt(x * x + y * y));