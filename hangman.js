 var words = ['programmer','hangman'];
var word = words[Math.floor(Math.random() * words.length)];
    var answer = [];
    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
    }
var remainingLetters = word.length;
    while (remainingLetters > 0) {
        alert("This is the number of remaining letters:\n" + answer.join(" "));
        var guess = prompt("Guess a letter or click 'Cancel' to stop the game.");
        if (prompt === null) {
            break;
        } else if (guess.length !== 1) {
            alert("Please enter one single letter.");
        } else {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answer[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }
    alert(answer.join(" "));
    alert("Good work! The right answer is " + word);