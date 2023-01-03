const urlJS = require('url');
const homePage = require('./pages/home.js');
const addBreedPage = require('./pages/addBreed.js');
const addCatPage = require('./pages/addCat.js');
const deleteCatAction = require('./pages/deleteCatAction.js');
const catShelterPage = require('./pages/catShelter.js');
const editCatPage = require('./pages/editCat.js');
const editCatAction = require('./pages/editCatAction.js');
const siteCSS = require('./styles/site.js');

const addBreedAction = require('./pages/addBreedController.js');
const addCatAction = require('./pages/addCatController.js');

const routes = {
    '/': (url) => homePage(url),
    '/search': (url) => homePage(url),
    '/cats/add-breed': () => addBreedPage,
    '/cats/add-cat': () => addCatPage,
    '/cats/edit-cat': (url, res) => editCatPage(url, res),
    '/cats/edit-cat-action': (url, res) => editCatAction(url, res),
    '/cats/cat-shelter': (url, res) => catShelterPage(url, res),
    '/cats/delete-cat-action': (url, res) => deleteCatAction(url, res),
    '/cats/add-breed-action': (url, res) => addBreedAction(url, res),
    '/cats/add-cat-action': (url, res) => addCatAction(url, res),
    '/styles/site.css': () => siteCSS,
}

function router(url, res) {
    let action = routes[url.pathname];
    if (action === undefined) {
        return "ERROR";
    }
    
    let result = action(url, res);
    return result;
}

module.exports = router;