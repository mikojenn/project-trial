/*var victor = {
    mass: 65,
    height: 1.70,
}
var john = {
    mass: 60,
    height: 1.65,
}

function bmi(person) {
    return person.mass / (person.height * person.height)
}

victor.bmi = bmi(victor);
john.bmi = bmi(john);

var comp = victor.bmi > john.bmi;
console.log('Is victors BMI greater than john?' + comp)
*/

var victormass = 65;
var victorheight = 1.80;
var johnmass = 75;
var johnheight = 1.65;

var victorbmi = victormass / (victorheight * victorheight);
var johnbmi = johnmass / (johnheight * johnheight);

var comp = victorbmi > johnbmi;
console.log("Is Victor's BMI higher than John's BMI?" + comp);