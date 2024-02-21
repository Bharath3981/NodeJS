import http from "http";
import path from "path";

const server = http.createServer((request, response) => {
  const pathname = request.url;
  if (pathname === "/" || pathname === "/overview") {
    response.end("This is overview page");
  } else if (pathname === "/products") {
    response.end("This is products page");
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
