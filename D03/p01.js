const utils = require('../utils');
const input = utils.readInputFile('/D03/input.txt').split('\n');
const engine = [];
const resultSet = [];
const reg = /[^0-9.]/g;

input.forEach((i) => {
    const line = i.split('');
    engine.push(line);
});

engine.forEach((line) => {
    const currentLineIndex = engine.indexOf(line);
    const currentNb = [];
    let isNbValid = false;

    line.forEach((char) => {
        const currentCharIndex = line.indexOf(char);
        if (!isNaN(parseInt(char))) {
            const surroundingChars = [line[currentCharIndex - 1],
                                    line[currentCharIndex + 1],
                                    engine[currentLineIndex - 1]?.[currentCharIndex - 1],
                                    engine[currentLineIndex - 1]?.[currentCharIndex],
                                    engine[currentLineIndex - 1]?.[currentCharIndex + 1],
                                    engine[currentLineIndex + 1]?.[currentCharIndex - 1],
                                    engine[currentLineIndex + 1]?.[currentCharIndex],
                                    engine[currentLineIndex + 1]?.[currentCharIndex + 1]
                                    ];
            surroundingChars.forEach((c) => {
                if (reg.exec(c) && c !== undefined) {
                    isNbValid = true;
                }
            });
            currentNb.push(char);
        }

        if (char === '.' && currentNb.length > 0) {
            if (isNbValid) {
                resultSet.push(currentNb.join(''));
            }
            isNbValid = false;
            currentNb.length = 0;
        }
    })
});

console.log(resultSet);