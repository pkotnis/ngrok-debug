const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.all("/", (req, res) => {
  console.log("Method");
  console.table(req.method);
  console.log("Headers");
  console.table(req.headers);
  console.log("Query");
  console.table(req.query);
  console.log("Params");
  console.table(req.params);
  console.log("Body");
  console.table(req.body);
  console.log("URL");
  console.log(req.url);
  console.log("Hostname");
  console.log(req.hostname);
  res.send("Hi!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
