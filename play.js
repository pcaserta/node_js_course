const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
