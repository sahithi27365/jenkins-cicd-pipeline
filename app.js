
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Application is healthy");
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! Jenkins CI/CD pipeline is working.");
});

server.listen(3000, "0.0.0.0", () => {
    console.log("App running on port 3000");
});
