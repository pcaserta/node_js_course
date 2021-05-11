const fs = require("fs");

const requestHandeler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Greeting text </title> <head>");
    res.write(
      "<form action = '/message' method = 'post'><label>username</label> <input name='username'><button type='submit'>enter</button></form> "
    );
    res.write("</html>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html> <h1> HeEY </h1> </html>");
  res.end();
};

module.exports = {
  handler: requestHandeler,
  someText: "some har coded text",
};
