const http = require("http");
// const fs = require("fs").promises;
const fs = require("fs");

const port = 8000;
const host = "localhost";

const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");
const homeLogo = fs.readFileSync("./navbar-app/logo.svg");
// const homePage = async (path) => {
//     try {
//         const data = await fs.readFile(path);
//         console.log(data);
//     } catch (error) {
//         console.log("An error occured trying to fetch file");
//     }
// };
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    } else if (req.url == "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyles);
        res.end();
    } else if (req.url == "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(homeLogo);
        res.end();
    } else if (req.url == "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
        res.end();
    } else {
        res.writeHead(404);
        res.write("Page does not exist");
        res.end();
    }
});

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
