/*
Elijah Freestone
SDI 1209
Project 2
9-4-12
*/

//Initial Variables
var start = "Echo and I take off from the garage in my car. ",
    zombiesInDrive = "yes", //Procedure argument
    booVar1 = true, //Boolean argument 1
    booVar2 = false //Boolean argument 2,
;

console.log(start) //Start

if (zombiesInDrive === "yes") { //Procedure
        console.log("I take out several Zombies like Bowling Pins as I speed down the driveway. ") 
        } else {
            console.log("No Zombies in the driveway. Looks like we're free and clear for the moment. ")
            }
;

console.log("Is the road clear? ")

var booFunc = function(booVar1, booVar2) { //Boolean Function
    if (booVar1 == booVar2) {
        console.log("We need to head west but the road is blocked by an overturned Semi-truck.")
        } else {
            console.log("Roads are clear and we're heading in the right direction! ")
        }
};

//booFunc(false) //Boolean Function Output

//return booFunc;

console.log("Should I try cutting through the field or just take the long way around? ")


console.log("Do we cut through downtown of take side streets? ")

var numberFunc = function (number1, number2)
    number1 = 10,
    number2 = 5
    
;
    
var whileLoop = 5;
    while (whileLoop > 0) {
        console.log("Side streets used to be light on traffic so it's probably clear of abandoned cars. Sounds like a safe bet to me! ")
        whileLoop-=5
    }
;

console.log("Do we cut through downtown of take side streets? ")
/*
var numberFunc = function (number1, number2) { //Number Function
    if (number1<number2) {
        console.log("Lots of traffic probably means lots of abandoned cars blocking the road. ")
    } else {
        console.log("Side streets used to be light on traffic so it's probably clear of abandoned cars. Sounds like a safe bet to me! ")
    }
};

numberFunc(7, 5) //Number Function Output
*/