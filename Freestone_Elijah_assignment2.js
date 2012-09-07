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
    string1 = "field",
    string2 = "long way"
;

var say = function(message) { console.log(message); }; //Console.log Function

say(start);

if (zombiesInDrive === "yes") { //Procedure
    say("I take out several Zombies like Bowling Pins as I speed down the driveway. ") 
} else {
    say("No Zombies in the driveway. Looks like we're free and clear for the moment. ")
};

say("Is the road clear? ");

var booFunc = function(booVar1, booVar2) { //Boolean Function
    if (booVar1 === booVar2) {
        say("We need to head west but the road is blocked by an overturned Semi-truck.")
        } else {
            say("Roads are clear and we're heading in the right direction! ")
        } return booFunc;
};

booFunc(); //Boolean Function Output

//say("Should I try cutting through the field or just take the long way around? ")

var stringFunc = function(string1, string2) {
    var yes = true,
        no = false;
    if (yes === no) {
        say("Que offroading scene in non-offroading vehicle! ");
    } else {
        say("Should I take the " + string2 + " around or try cutting through the " + string1 + "? ");
    } return stringFunc;
};

stringFunc(string1, string2); //String Function Output

say("It will add even more time and distance but at least the" + string2 + "should be safer. ");

say("The " + string1 + " would be fun but if we get stuck we're done for! " + string2 + " it is! ");

say("We reach town safely. Now we must make it all the way across to the other side of town. ");

say("Do we cut through downtown of take side streets? ");

var numberFunc = function (number1, number2)
    number1 = 10,
    number2 = 5;
    
var whileLoop = 5;
    while (whileLoop > 0) {
        say("Side streets used to be light on traffic so it's probably clear of abandoned cars. Sounds like a safe bet to me! ")
        whileLoop-=5
    }
;

//console.log("Do we cut through downtown of take side streets? ")
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

var missCars = ["left", "right", "left", "right"],
    zombiesHit = [2, 7, 13, 5]
for (var carsMissed = 0; numberZombies < zombiesHit.length; carsMissed++){
    var numberZombies = 27,
        missCar = missCars[missNumber];
say("I plow through" + missCar + " zombies and swerve" + zombiesHit + "to miss a car");
for (var zombies = 0; zombies < zombiesHit; zombies +=5) {
    var zombiesLeft = zombiesHit - zombies;
    say("We made it through!") }
};