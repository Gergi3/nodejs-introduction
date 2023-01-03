const { getCatById, breeds } = require('./editCatController.js');

const editCatTemplate = (cat) => `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/styles/site.css">
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
        <title>Cat Shelter</title>
    </head>

    <body>
        <header>
            <nav>
                <ul class="navigation">
                    <li><a href="/">Home Page</a></li>
                    <li><a href="/cats/add-breed">Add Breed</a></li>
                    <li><a href="/cats/add-cat">Add Cat</a></li>
                </ul>
            </nav>
            <h1>Cat Shelter</h1>
        </header>
        <main>
        ${catTemplate(cat.id, cat.name, cat.description, cat.breed, cat.imageUrl)}
        </main>
    </body>

    </html>
`;

const catTemplate = (id, name, description, breed, imageUrl) => `
    <form action="/cats/edit-cat-action" method="GET" class="cat-form" enctype="multipart/form-data">
        <h2>Edit Cat</h2>

        <label for="name">Name</label>
        <input name="name" type="text" value=${name}>
        
        <label for="description">Description</label>
        <textarea name="description">${description}</textarea>
        
        <label for="image">Image URL</label>
        <input name="imageUrl" type="text" value=${imageUrl}>
        
        <label for="group">Breed</label>
        ${breedsTemplate(breeds, breed)}
        
        <input type="hidden" name="cat-id" value=${id}>
        <button type="submit">Edit Cat</button>
    </form>
`;

const breedsTemplate = (breeds, selectedBreed) => `
    <select name="breed" id="group">
        ${breeds.map(x => breedTemplate(x.name, selectedBreed)).join('')}
    </select>
`;

const breedTemplate = (name, selectedBreed) => `
    <option value="${name}" ${selectedBreed == name ? 'selected' : ''}>
        ${name}
    </option>
`;

function exportEditPage(url, res) {
    let id = new URLSearchParams(url.query).get('cat-id');
    let cat = getCatById(id);
    if (!cat) {
        res.writeHead(301, {
            'Location': '/'
        });
        return "";
    }
    console.log(breeds);
    return editCatTemplate(cat[0]);
}

module.exports = exportEditPage;