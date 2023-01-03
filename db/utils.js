const fs = require('fs');

function getNextId(obj) {
    return (Math.max.apply(Math, obj.map(function(o) {
        return o.id;
    })) + 1);
}

function writeToDb(params, objects, objName, res, redirectUrl) {
    let id = getNextId(objects);
    let newObj = {id};

    params.forEach((k, v) => {
        newObj[v] = k;
    })

    objects.push(newObj);

    let newJSON = JSON.stringify(objects);
    fs.writeFileSync(`${process.cwd()}\\db\\${objName}.json`, newJSON, {
        encoding: 'utf8',
        flag: 'w',
    });
    
    res.writeHead(301, {
        'Location': redirectUrl
    });
}


function patchToDb(params, objects, objName, res, redirectUrl) {
    let id = params.get('cat-id');
    let newObj = {id};

    params.forEach((k, v) => {
        newObj[v] = k;
    })

    let index = objects.findIndex(x => x.id == id);
    objects[index] = newObj;

    let newJSON = JSON.stringify(objects);
    fs.writeFileSync(`${process.cwd()}\\db\\${objName}.json`, newJSON, {
        encoding: 'utf8',
        flag: 'w',
    });
    
    res.writeHead(301, {
        'Location': redirectUrl
    });
}

function deleteFromDb(objName, id, res, redirectUrl) {
    let cats = require(`./${objName}.json`);
    let newCats = cats.filter(x => x.id != id);
    
    let newJSON = JSON.stringify(newCats);
    fs.writeFileSync(`${process.cwd()}\\db\\${objName}.json`, newJSON, {
        encoding: 'utf8',
        flag: 'w',
    });
    
    res.writeHead(301, {
        'Location': redirectUrl
    });
}


module.exports = {
    getNextId,
    writeToDb,
    patchToDb,
    deleteFromDb
}