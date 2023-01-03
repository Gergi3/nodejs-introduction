const cats = require('../db/cats.json');

function getCatById(id) {
    return cats.filter(x => x.id == id);
}

module.exports = {
    getCatById
}