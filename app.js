const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action ='/product' method='POST'> <input type='text' name='title'></input><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body.title);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<form> hello from express! </form>");
});

app.listen(3000);
