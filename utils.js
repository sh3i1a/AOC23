const fs = require('fs');
const path = require('path');

function readInputFile(file) {
    const filePath = path.join(__dirname, file);

    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (erreur) {
        console.error(`Failed to read input file ${cheminFichier}: ${erreur.message}`);
        return null;
    }
}

module.exports = { readInputFile };