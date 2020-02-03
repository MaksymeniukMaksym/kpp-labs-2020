const readlineSync = require('readline-sync');

// console.log('Select a mode:\n 1.AI vs People\n 2.People vs People ')
// const mode = readlineSync.question('Mode: ');

// switch (mode) {
//     case '1':
//         aiVsPeople()
//         break;
//     case '2':
//         peopleVsPeople()
//         break;
// }



console.log(randomInteger(0, 9))
function numberGenerator(){

}
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

// const password = '7241';


function peopleVsPeople() {
    const word = readlineSync.question('Player1 choose your word: ');
    console.clear()
    console.log(`The game started against the man. Player2 guess the word.\nWord lenght: ${word.length}`)
    game(word);
}

function game(word) {
    let Attempt = 0;
    while (true) {
        let number = readlineSync.question('Attempt: ');
        Attempt++
        if (word === number) {
            console.log('Your got right! Attempts: ' + Attempt)
            return 0;
        }
        let cows = 0;
        let bulls = 0;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < word.length; j++) {
                if (word[i] === number[j]) {
                    if (i === j) {
                        bulls++;
                    } else {
                        cows++;
                    }
                }
            }
        }

        console.log(`Bulls: ${bulls}; Cows: ${cows}`)
    }
}