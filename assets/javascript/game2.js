var names = ["buu"];
var randomNames = names[Math.floor(Math.random()*names.length)];
var randomNamesArray = randomNames.split('');
var lettersToChoose = "abcdefghijklmnopqrstuvwxyz".split('');

var correctLetters = [];
var wrongLetters = [];

for(var i =0; i<randomNames.length; i++) {
    var create0 = document.createElement("span");
    document.getElementById("blankNames").appendChild(create0).setAttribute("class", "sam");
}
document.onkeypress = function(e) {
    var userPick = e.key;
    randomNamesArray.map(x => x === userPick ? correctLetters.push(x)
    : wrongLetters.push(userPick));

    document.getElementsByClassName("sam");

    

}

console.log(correctLetters);
console.log(wrongLetters);