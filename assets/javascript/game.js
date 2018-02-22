// selection of names that the computer will randomly choose for hangman
var names = ["goku", "buu", "vegeta", "goten", "whis", "beerus", "gohan", "trunks"];

var correctCounter = 0;

correct = 0;
// creating a function that will start the game
var start = function () {
    // randomly choosing a name from the words array
    var randomNames = names[Math.floor(Math.random() * names.length)];
    var randomNamesArray = randomNames.split('');

    var correctLetters = [];

    // creating blank spaces for the current name
    for (var j = 0; j < randomNamesArray.length; j++) {
        // creating individual divs with respective numbers up to max length of the letters of the name
        var newDiv = document.createElement("span");

        // // creating a text
        var blankLines = document.createTextNode(" - ");
        // //attaching the text to the new div that was created with numbers
        newDiv.appendChild(blankLines);

        // attaching the new div to a div in the html

        var currentDiv = document.getElementById("blankNames");

        currentDiv.appendChild(newDiv).setAttribute("class", "sam");
    }

    document.onkeypress = function (e) {
        var userPick = e.key;
        var counter = document.getElementById("countdown").innerHTML;
        counter--;
        var countdown = document.getElementById("countdown");
        var countdown1 = document.createTextNode(counter);
        var countdown2 = document.getElementById("countdown").childNodes[0];

        countdown.appendChild(countdown1);
        countdown.replaceChild(countdown1, countdown2);

        if(counter === 0) {
            alert("Out of guesses!");
            alert("Restarting the game now . . .");
            location.reload();
        }

        for (var i = 0; i < randomNamesArray.length; i++) {
            var wrongLetters = [];
            var uniqueLetters = [];

            if (userPick === randomNamesArray[i]) {

                var newDiv1 = document.getElementsByClassName("sam")[i].innerHTML;

                var replacingLetter = document.createTextNode(randomNamesArray[i]);

                var item = document.getElementsByClassName("sam")[i].childNodes[0];

                document.getElementsByClassName("sam")[i].replaceChild(replacingLetter, item);

                var elements = document.getElementsByTagName("span");
                if (elements !== " - ") {
                    correctCounter++
                    if (correctCounter === randomNamesArray.length) {
                        correct++;

                        var plac = document.getElementById("placeC");
                        var plac1 = document.createTextNode(correct);
                        var repla = document.getElementById("placeC").childNodes[0];

                        plac.replaceChild(plac1, repla);

                        empty();
                        start();
                    }
                }

            } else if (userPick !== randomNamesArray[i]) {

                wrongLetters.push(userPick);
                var items = randomNamesArray[i];
                uniqueLetters.splice(items, 1);

            }
            wrongLetters.forEach(function (item) {
                if (uniqueLetters.indexOf(item) < 0) {
                    uniqueLetters.push(item);
                }
            });

        }
        wrongLetters.forEach(function (item) {
            if (uniqueLetters.indexOf(item) < 0) {
                uniqueLetters.push(item);
            }
        });

        var asdf = document.createTextNode(uniqueLetters);
        var newDiv2 = document.getElementById("wrongLetters");
        newDiv2.appendChild(asdf);

    }
}

start();

// creating a function that will remove all child elements of a DOM node
var empty = function () {
    document.getElementById("wrongLetters").innerHTML = "";
    document.getElementById("countdown").innerHTML = 15;
    // selecting the area that I want to remove
    var reset = document.getElementById('blankNames');
    // setting a while loop with the condition if there is a "firstChild" in the selected Id. 
    while (reset.firstChild)
        // using removeChild method to remove that firstChild.  This loop will continue until there's no more child in the selected element.
        reset.removeChild(reset.firstChild);

    // setting the correctCounter to zero so that the if statement will do its job
    correctCounter = 0;
}
