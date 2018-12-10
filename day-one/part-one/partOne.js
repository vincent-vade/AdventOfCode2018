const fs = require('fs');
const inputFile = fs.readFileSync('../input.txt', 'utf8');

const starsChange = input => input
    .split(/\n/g) // split chars in string
    .reduce((acc, value) => acc + +value, 0);

const result = starsChange(inputFile);

console.log(result);
