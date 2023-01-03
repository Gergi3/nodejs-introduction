const { getCatById } = require("./catShelterController.JS");

const catShelterTemplate = (cat) => `
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
      <form action="/cats/delete-cat-action" method="GET" class="cat-form">
        <h2>Shelter the cat</h2>
        <img src="${imageUrl}" alt="">
        
        <label for="name">Name</label>
        <input type="text" id="name" value="${name}" disabled>
        
        <label for="description">Description</label>
        <textarea id="description" disabled>${description}</textarea>
        
        <label for="group">Breed</label>
        <select id="group" disabled>
            <option value="${breed}">${breed}</option>
        </select>
        
        <input type="hidden" value="${id}" name="cat-id">
        <button type="submit">SHELTER THE CAT</button>
    </form>
`;

function exportCatShelter(url, res) {
    let id = new URLSearchParams(url.query).get('cat-id');
    let cat = getCatById(id);
    console.log(cat);

    if (cat.length != 1) {
        res.writeHead(301, {
            'Location': '/',
        });
        return "";
    } else {
        return catShelterTemplate(cat[0]);
    }


}

module.exports = exportCatShelter;
