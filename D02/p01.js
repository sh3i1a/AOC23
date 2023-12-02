const utils = require('../utils');
const games = utils.readInputFile('/D02/input.txt').split('\n');

const MAX_NB_BALLS = {
    'red': 12,
    'green': 13,
    'blue': 14
};

const resultSet = [];
let result = 0;

games.forEach((game) => {
    let isGameValid = true;
    const draws = game.split(': ')[1].split('; ');

    draws.forEach((draw) => {
        const colors = draw.split(', ');
        colors.forEach((color) => {
            if (color.split(' ')[0] > MAX_NB_BALLS[color.split(' ')[1]]) {
                isGameValid = false;
            }
        });

    });

    isGameValid && resultSet.push(games.indexOf(game) + 1);
});

resultSet.forEach((r) => {
    result += parseInt(r);
})

console.log(result);