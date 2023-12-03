const utils = require('../utils');
const games = utils.readInputFile('/D02/input.txt').split('\n');

const resultSet = [];
let result = 0;

games.forEach((game) => {
    const minNbBalls = {
        'red': 0,
        'green': 0,
        'blue': 0
    };
    const draws = game.split(': ')[1].split(/; |, /g);

    draws.forEach((draw) => {
        if (parseInt(draw.split(' ')[0]) > minNbBalls[draw.split(' ')[1]]) {
            minNbBalls[draw.split(' ')[1]] = parseInt(draw.split(' ')[0]);
        }
    });

    resultSet.push(minNbBalls['red'] * minNbBalls['green'] * minNbBalls['blue']);
});

resultSet.forEach((r) => {
    result += parseInt(r);
})

console.log(result);