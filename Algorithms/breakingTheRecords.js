'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let { countMax, countMin } = (scores || []).reduce((target, item, index) => {
        !index && (target['max'] = target['min'] = item);

        target['score'] = item;

        item > target['max'] && (target['max'] = item, target['countMax']++);
        item < target['min'] && (target['min'] = item, target['countMin']++);

        return target;
    }, { max: 0, min: 0, score: 0, countMax: 0, countMin: 0 });

    return [countMax, countMin];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}