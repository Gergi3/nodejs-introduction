const http = require('http');
const router = require('./router');
const url = require('url');
const port = 5000;

const server = http.createServer((req, res) => {
    let contentType = 'text/html';
    let reqUrl = url.parse(req.url);

    if (reqUrl.pathname == '/styles/site.css') {
        contentType = 'text/css';
    }
    
    res.writeHead(200, {
        'Content-Type': `${contentType}`
    });

    let page = router(reqUrl, res);
    res.write(String(page));

    res.end();
});

server.listen(port, () => console.log(`Server is listening on port ${port}...`));