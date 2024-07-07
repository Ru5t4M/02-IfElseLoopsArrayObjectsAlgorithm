let arr = [3, 8, 2, 5, 4, 10, 7, 6];

let input = prompt('enter your number: ');

if (input in arr) {
    console.log(`${input} is in array`)
}
else {
    console.log(`${input} is not in array`)
}