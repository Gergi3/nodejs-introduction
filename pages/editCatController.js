const cats = require('../db/cats.json');
const breeds = require('../db/breeds.json');

function getCatById(id) {
    return cats.filter(x => x.id == id);
}

module.exports = {
    getCatById,
    breeds
}