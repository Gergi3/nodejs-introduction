const cats = require('../db/cats.json');
const { writeToDb } = require('../db/utils.js');

function addCat(url, res) {
    let params = new URLSearchParams(url.query);

    writeToDb(params, cats, 'cats', res, '/');
}


module.exports = addCat;