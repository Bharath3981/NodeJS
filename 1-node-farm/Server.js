import { readFile, readFileSync } from "fs";
import http from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const data = readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((request, response) => {
  const pathname = request.url;
  if (pathname === "/" || pathname === "/overview") {
    response.end("This is overview page");
  } else if (pathname === "/products") {
    response.end("This is products page");
  } else if (pathname === "/api") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(data);
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
      MyHeader: "CustomeHeader",
    });
    response.end("<h2>Page not found</h2>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
