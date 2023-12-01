const utils = require('../utils');

const input = utils.readInputFile('/D01/input.txt').split('\n');
const resultSet = [];
let result = 0;

input.forEach((i) => {
    const line = i.split('').filter((l) => !isNaN(l));
    if (line.length === 1) {
        resultSet.push(line[0] + line[0]);
    } else {
        resultSet.push(line[0] + line[line.length - 1]);
    }
})

resultSet.forEach((r) => {
    result += parseInt(r);
})

console.log(result);