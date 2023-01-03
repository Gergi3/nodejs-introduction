const { cats, queryCatsByName } = require('./homeController.js')

const homeTemplate = (cats) => `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
        <link rel="stylesheet" href="/styles/site.css">
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
            <form action="/search" method="GET">
                <input type="text" name="name">
                <button type="submit">Search</button>
            </form>
        </header>

        <main>
            <section class="cats">
                <ul>
                    ${cats.map(x => catTemplate(x.id, x.name, x.breed, x.description, x.imageUrl)).join('')}
                </ul>
            </section>
        </main>

    </body>

    </html>
`;

const catTemplate = (id, name, breed, description, imageUrl) => `
    <li>
        <img src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p><span>Breed: </span>${breed}</p>
        <p><span>Description: </span>${description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="/cats/edit-cat?cat-id=${id}">Change Info</a></li>
            <li class="btn delete"><a href="/cats/cat-shelter?cat-id=${id}">New Home</a></li>
        </ul>
    </li>
`;
function exportHome(url) {
    let exported = homeTemplate.bind(null, cats);

    if (url.pathname == '/search') {
        let catName = new URLSearchParams(url.query).get('name');
        if (catName !== "") {
            exported = homeTemplate.bind(null, queryCatsByName(catName));
        }
    }
    return exported();
}

module.exports = exportHome;