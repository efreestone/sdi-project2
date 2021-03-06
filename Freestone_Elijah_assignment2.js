/*
Elijah Freestone
SDI 1209
Project 2
9-4-12
*/

//Initial Variables
var start = "Echo and I take off from the garage in my car. ", //Start
    zombiesInDrive = "yes", //Procedure argument
    booVar1 = true, //Boolean argument 1
    booVar2 = false //Boolean argument 2
    string1 = "field", //String argument 1
    string2 = "long way", //String argument 2
    blocks = 5, //Number argument
    choices = ["Downtown ", "Side streets "], //Array
    end = "...to be continued... " //Finish
;

//Functions

var say = function(message) { console.log(message); }; //Console.log Function

var zombies = function(zombiesInDrive) { //Procedure
        if (zombiesInDrive === "yes") { 
            say("I take out several Zombies like Bowling Pins as I speed down the driveway. ") 
        } else {
            say("No Zombies in the driveway. Looks like we're free and clear for the moment. ")
        }
};

var booFunc = function(booVar1, booVar2) { //Boolean Function
    var booOut = (booVar1 === booVar2)
        if (booVar1 === booVar2) {
            say("We need to head west but the road is blocked by an overturned Semi-truck.")
        } else {
            say("Roads are clear and we're heading in the right direction! ")
    } return booOut;
};

var stringFunc = function(string1, string2) { //String Function
    var field = "safe";
        if (field === "fun") {
            say("Que offroading scene in non-offroading vehicle! ");
        } else {
            stringOut = say("Should I take the " + string2 + " around or try cutting through the " + string1 + "? ");
    } return stringOut;
};

var blocksLeft = function(blocks) { //Number Function
    var blocksToGo = 5;
        say(blocksToGo + " blocks left until downtown. ");
    while (blocksToGo > 0) {
            blocksToGo--;
                if (blocksToGo > 0) {
                    say(blocksToGo + " more. ");
                } else {
                    say("We've reached the edge of downtown. ") };
            };
        say("We covered " + blocks + " blocks.");
    say("Do we cut through downtown of take side streets? ");
    return blocksToGo;
};

var arrayFunc = function(choices) { //Array Function
    var myArray = ["have heavy traffic which probably means lots of abandoned cars blocking the road. ",
                   "be light on traffic so its probably clear of abandoned cars. "];
    for (var i=0, j=choices.length; i < j; i++) {
        arrayOutput = say(choices[i] + "used to " + myArray[i]);
    }
    return arrayOutput;
};

//Outputs

say(start);

zombies(zombiesInDrive) //Procedure Output

say("Is the road clear? ");

booFunc(); //Boolean Function Output

stringFunc(string1, string2); //String Function Output

say("It will add even more time and distance but at least the " + string2 + " should be safer. ");

say("The " + string1 + " would be fun but if we get stuck we're done for! " + string2 + " it is! ");

say("We reach town limits safely. The next checkpoint between here and the Warehouse Store is downtown. ");

var blocksCovered = blocksLeft(blocks); //Number Function Output

arrayFunc(choices); //Array Function Output

say(choices[1] + "sounds like a safer choice to me. ");

say("We turn on to Park Street and it's swarming with zombies!");

say("Then the car dies... ");

say(end);