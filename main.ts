const words: any = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z"
}
let index = 0;
let currentSelected = "a";
let resettingPoint = 26;
let final = "";
radio.setGroup(1);
input.onButtonPressed(Button.A, function() {
    if(index == resettingPoint){
        basic.showString(words[0]);
        currentSelected = "a";
        index = 1;
    }else{
        basic.showString(words[index]);
        currentSelected = words[index];
        index += 1;
    }
});

input.onButtonPressed(Button.B, function() {
    index = 1;
    final = final + currentSelected;
    currentSelected = "a";
    basic.showString("a");
});

input.onButtonPressed(Button.AB, function() {
    basic.showString("SENT");
    radio.sendString(final);
    final = "";
    index = 1;
    currentSelected = "a";
    basic.showString("a");
});

radio.onReceivedString(function(receivedString) {
    basic.showString(receivedString);
});