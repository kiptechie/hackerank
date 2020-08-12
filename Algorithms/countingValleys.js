'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
let deepLevel = 0;
    let count = 0;
    let totalCount = 0;

    [...s].reduce((target, value) => {
        deepLevel = (value === 'U') ? deepLevel + 1 : deepLevel - 1;

        (value !== 'U') && (totalCount = deepLevel);

        (totalCount < 0 && deepLevel === 0) && count++;

        return target;
    }, []);

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
