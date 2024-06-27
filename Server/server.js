const http = require("http");
const app = require("../app.js");
var port = parseInt(process.env.PORT);

// create the server with http
const server = http.createServer(app);

if (!port || typeof port != "number") {
  console.log("Port is not given or not number type");
} else {
  // listening on PORT
  server.listen(port, () => {
    console.log("Server is listening on port", port);
  });
}
