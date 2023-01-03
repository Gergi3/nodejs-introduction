let { deleteFromDb } = require('../db/utils.js');

function deleteCat(url, res) {
    let id = new URLSearchParams(url.query).get('cat-id');

    deleteFromDb('cats', id, res, '/');
}

module.exports = deleteCat;