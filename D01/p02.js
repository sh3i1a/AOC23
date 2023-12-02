const utils = require('../utils');

const input = utils.readInputFile('/D01/input.txt').split('\n');
const resultSet = [];
let result = 0;

input.forEach((i) => {
    const reg = /one|two|three|four|five|six|seven|eight|nine|\d/;
    let matches = [];
    while (match = reg.exec(i)) {
        matches.push(match[0]);
        i = i.slice(match.index + 1);
    }

    const line = [];
    matches.forEach((m) => {
        switch (m) {
            case 'one':
                line.push('1');
                break;
            case 'two':
                line.push('2');
                break;
            case 'three':
                line.push('3');
                break;
            case 'four':
                line.push('4');
                break;
            case 'five':
                line.push('5');
                break;
            case 'six':
                line.push('6');
                break;
            case 'seven':
                line.push('7');
                break;
            case 'eight':
                line.push('8');
                break;
            case 'nine':
                line.push('9');
                break;
            default:
                line.push(m);
                break;
        }
    })
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