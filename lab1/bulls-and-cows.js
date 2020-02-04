const readlineSync = require('readline-sync');

console.log('Select a mode:\n 1.AI vs People\n 2.People vs People\n 3.Fallout Terminal ')
const mode = readlineSync.question('Mode: ');

switch (mode) {
    case '1':
        aiVsPeople()
        break;
    case '2':
        peopleVsPeople()
        break;
    case '3':
        fallout()
        break;
}


function numberGenerator(size) {
    let numbers = [];
    for (let i = 0; i < size; i++) {
        let num = randomInteger(0, 9);
        if (!numbers.includes(num)) {
            numbers.push(num);
        } else {
            i--;
        }
    }
    return numbers.join('');
}
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function aiVsPeople() {
    const size = readlineSync.question('Set size of word: ');
    game(numberGenerator(size));
}

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

function terminalPassword() {
    const list = ['askos', 'audit', 'books', 'carts', 'clans', 'daddy', 'depth', 'doors', 'earls', 'email', 'fetch', 'firms', 'foggy', 'gappy', 'grant', 'guest', 'hairs', 'harry', 'holly', 'ideal', 'ideas', 'irony', 'japan', 'joker', 'jolly', 'krona', 'kings', 'kelpy', 'largo', 'leave', 'light', 'maker', 'money', 'mured', 'needs', 'nodes', 'nukes', 'offed', 'oxter', 'orbit', 'pedro', 'penny', 'phone', 'quire', 'quote', 'qanat', 'rains', 'ready', 'repot', 'salad', 'scene', 'skull', 'taxes', 'tools', 'types', 'users', 'unzip', 'umbra', 'vocal', 'vodka', 'venus', 'watch', 'wreak', 'works', 'yourn', 'yearn', 'yourn', 'zayin', 'zoris', 'zymes']
    let arr = [];
    let variablesSize = 7;
    for (let i = 0; i < variablesSize; i++) {
        arr.push(list[randomInteger(0, list.length)])
    }
    arr = arr.map(function (value) { return value.toUpperCase() })
    const text = `0x01 !]:#&{})|!*^)[ | 0x0D *>:+&=+)${arr[0]}/\n0x02 [</${arr[1]}[]@>|! | 0x0E $"}/:_|]>+?&#:|\n0x03 *;___|=)(/!}#? | 0x0F \(:;<\\)]!+%<\)\n0x04 [&?<)[:*)]{|#% | 0x10 _|_?|${arr[2]}??=#_\n0x05 =+*${arr[3]}+[*^>* | 0x11 ]&/*|^>%&)/^;<\n0x06 $("[?+#|\=$=+$_ | 0x12 \}=^>=$}}=|__&[\n0x07 {%<?%;{;>^:/>% | 0x13 :@+$&\%^%${arr[4]}\n0x08 >+;@>>*(/}\_&=+ | 0x14 (%#;(}{;|<:;\n0x09 ${arr[5]}!])/{=)/@ | 0x15 ]]($??;%%\]=#/#\n0x0A @*@$_/>\)@{#|{) | 0x16 &}\_]/^$@]${arr[6]}\n0x0B |[(([&}{*%%}=| | 0x17 >{/>!@*>#$<=?{|\n0x0C &[\/[+^\^##&=]\:; | 0x18 /^\"(=;}|[*>*!\\n`;
    console.log(text)
    return arr[randomInteger(0, 7)]
}

function fallout() {
    let attempt = 3
    let symbol = '# ';
    console.log('ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL\nPASSWORD REQUIRED')
    console.log(`ATTEMPTS REMAINING: ${symbol.repeat(attempt)}`);
    const password = terminalPassword();
    while (true) {
        const answer = readlineSync.question('> ');
        if (password !== answer) {
            console.log('Entry denied');
            attempt--;
            if (attempt === 0) {
                console.log('TERMINAL LOCKED');
                console.log('PLEASE CONTACT AN ADMINISTRATOR');
                console.log(`PASSWORD: ${password}`)
                return 0;
            }

            let likeness = 0;
            for (let i = 0; i < password.length; i++) {
                if (password[i] === answer[i]) {
                    likeness++;
                }
            }
            console.log(`Likeness=${likeness}`)
            console.log(`ATTEMPTS REMAINING: ${symbol.repeat(attempt)}`);


        } else {
            console.log('>Extact match!\n>Please wait\n>while system\n>is accessed.')
            return 0;
        }

    }
}