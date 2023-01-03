let { patchToDb } = require('../db/utils.js');
let cats = require('../db/cats.json');

function editCat(url, res) {
    let params = new URLSearchParams(url.query);

    patchToDb(params, cats, 'cats', res, '/');
}

module.exports = editCat;