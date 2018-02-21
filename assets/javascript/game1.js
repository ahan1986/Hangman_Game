// selection of names that the computer will randomly choose for hangman
var names = ["buu"];
// randomly choosing a name from the words array
var randomNames = names[Math.floor(Math.random() * names.length)];

var correctLetters = [];
var wrongLetters = [];

var randomNamesArray = randomNames.split('');

// creating blank spaces for the current name
for (var j = 0; j < randomNamesArray.length; j++) {
    // creating individual divs with respective numbers up to max length of the letters of the name
    var newDiv = document.createElement("span");

    // creating a text
    var blankLines = document.createTextNode(" - ");
    //attaching the text to the new div that was created with numbers
    newDiv.appendChild(blankLines);

    // attaching the new div to a div in the html

    var currentDiv = document.getElementById("blankNames");

    currentDiv.appendChild(newDiv).setAttribute("class", "sam");

    console.log(newDiv);

}




document.onkeypress = function (e) {
    var userPick = e.key;
    for (var i = 0; i < randomNamesArray.length; i++) {
        

        if (userPick === randomNamesArray[i]) {
            correctLetters.push(userPick);

        } else {
            wrongLetters.push(userPick);

        }


    }

    // setting variable to hold no duplicates
    var uniqueLettersC = [];
    var uniqueLettersW = [];
    // using forEach function that will remove duplicates from variable wrongLetters.
    correctLetters.forEach(function (item) {
        // if the index of the first occurence is not found, it will push that letter into the empty variable uniqueLetters.
        if (uniqueLettersC.indexOf(item) < 0) {
            uniqueLettersC.push(item);
        }
    }
    );
    wrongLetters.forEach(function (item) {
        // if the index of the first occurence is not found, it will push that letter into the empty variable uniqueLetters.
        if (uniqueLettersW.indexOf(item) < 0) {
            uniqueLettersW.push(item);
        }
    }
    );

    var q = document.getElementsByClassName("wrongLetters").innerHTML;
    var qq = document.createTextNode(uniqueLettersW);
    
    console.log(q);
    console.log(qq);
    console.log(uniqueLettersC);
    console.log(uniqueLettersW);

}




