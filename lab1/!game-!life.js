const readlineSync = require('readline-sync');

let size = readlineSync.question('Size MxN: ').split(' ').map(Number);

console.log(size);

createArea(size)


function createArea(size) {
    const bort = '_';
    const space = ' ';
    const wall = '|';
    const hori = wall + space.repeat(size[0]) + wall + '\n';
    const area = space + bort.repeat(size[0]) + space + '\n' + hori.repeat(size[1])
    // const area = `${bort.repeat(size[0])}\n${space.repeat(size[0])}`
    console.log(area)
}