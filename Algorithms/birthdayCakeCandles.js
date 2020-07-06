// soluion 1
function birthdayCakeCandles(arr) {
    let max = 0;
    let counter = 0;

    arr.forEach(item => {
        if (item > max) {
            max = item;
            counter = 1;
        } else if (item === max) {
            counter++;
        }
    });

    return counter;
}

// solution 2
function birthdayCakeCandles(arr) {
    let max = Math.max(...arr);
    return arr.filter(item => item === max).length;
}

// solution 3
const birthdayCakeCandles = arr =>
    arr.reduce(
        (acc, item) =>
        acc.max < item ?
        { max: item, counter: 1 } :
        acc.max === item ?
        {...acc, counter: ++acc.counter } :
        acc, { max: 0, counter: 0 }
    ).counter;