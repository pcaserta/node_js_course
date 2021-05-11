const http = require("http");
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

const port = 4200;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
