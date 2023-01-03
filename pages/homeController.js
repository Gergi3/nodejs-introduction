const cats = require('../db/cats.json');

function queryCatsByName(name) {
    const nameLowered = name.toLowerCase();
    return cats.filter(cat => cat.name.toLowerCase() === nameLowered);
}

module.exports = {
    cats,
    queryCatsByName
};