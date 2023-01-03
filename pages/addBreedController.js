const breeds = require('../db/breeds.json');
const { writeToDb } = require('../db/utils.js');

function addBreed(url, res) {
    let params = new URLSearchParams(url.query);

    writeToDb(params, breeds, 'breeds', res, '/');
}

module.exports = addBreed;